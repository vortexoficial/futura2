import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  blurReveal,
  fadeIn,
  fadeUp,
  reducedMotionVariants,
  scaleIn,
  slideLeft,
  slideRight,
  viewportConfig,
} from "@/src/lib/animations";
import type { Variants } from "motion/react";

type RevealVariant = "fadeUp" | "fadeIn" | "scale" | "left" | "right" | "blur";

const variants: Record<RevealVariant, Variants> = {
  fadeUp,
  fadeIn,
  scale: scaleIn,
  left: slideLeft,
  right: slideRight,
  blur: blurReveal,
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
  as = "div",
  once = true,
  amount = viewportConfig.amount,
  margin = viewportConfig.margin,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  as?: "div" | "section" | "article" | "header" | "footer";
  once?: boolean;
  amount?: number;
  margin?: string;
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      variants={reduceMotion ? reducedMotionVariants : variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin, amount }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
