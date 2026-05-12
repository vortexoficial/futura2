import type { Transition, Variants } from "motion/react";

export const motionConfig = {
  defaultDuration: 0.7,
  fastDuration: 0.25,
  slowDuration: 1.2,
  ease: [0.16, 1, 0.3, 1] as const,
  spring: {
    type: "spring" as const,
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  },
  hoverSpring: {
    type: "spring" as const,
    stiffness: 360,
    damping: 28,
  },
};

export const viewportConfig = {
  once: true,
  margin: "-80px",
  amount: 0.18,
} as const;

export const reducedMotionTransition: Transition = {
  duration: 0.01,
};

export function createStagger(delayChildren = 0.08, staggerChildren = 0.08): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionConfig.defaultDuration, ease: motionConfig.ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionConfig.defaultDuration, ease: motionConfig.ease },
  },
};

export const staggerContainer: Variants = {
  ...createStagger(),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: motionConfig.ease },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -42, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: motionConfig.defaultDuration, ease: motionConfig.ease },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 42, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: motionConfig.defaultDuration, ease: motionConfig.ease },
  },
};

export const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(16px)",
    clipPath: "inset(18% 0% 18% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.9, ease: motionConfig.ease },
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.defaultDuration,
      ease: motionConfig.ease,
      staggerChildren: 0.08,
    },
  },
};

export const softDrop: Variants = {
  hidden: { opacity: 0, y: -18, scale: 0.98, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: motionConfig.defaultDuration, ease: motionConfig.ease },
  },
};

export const cardHover = {
  y: -8,
  scale: 1.015,
  transition: motionConfig.hoverSpring,
};

export const iconHover = {
  y: -2,
  rotate: -4,
  scale: 1.08,
  transition: motionConfig.hoverSpring,
};

export const tapScale = {
  scale: 0.985,
  transition: { duration: motionConfig.fastDuration },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: motionConfig.ease },
  },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: reducedMotionTransition,
  },
};
