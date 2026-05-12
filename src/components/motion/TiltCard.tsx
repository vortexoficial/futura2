import type { ReactNode } from "react";
import type { MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";
import { usePointerDevice } from "@/src/hooks/usePointerDevice";
import { motionConfig } from "@/src/lib/animations";

export function TiltCard({
  children,
  className,
  intensity = 10,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const reduceMotion = useReducedMotion();
  const hasFinePointer = usePointerDevice();
  const enabled = !reduceMotion && hasFinePointer;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 160, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 160, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-intensity, intensity]);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn("group relative [transform-style:preserve-3d]", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={enabled ? { rotateX, rotateY } : undefined}
      whileHover={enabled ? { y: -7, scale: 1.01 } : undefined}
      transition={motionConfig.hoverSpring}
    >
      <span className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-r from-violet-500/0 via-purple-400/22 to-purple-600/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative [transform:translateZ(0)]">{children}</div>
    </motion.div>
  );
}
