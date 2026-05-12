import { motion, useMotionTemplate } from "motion/react";

import { useMousePosition } from "@/src/hooks/useMousePosition";

export function MouseGlow() {
  const { x, y, shouldTrack } = useMousePosition();
  const background = useMotionTemplate`radial-gradient(560px circle at ${x}px ${y}px, rgba(139,92,246,0.18), rgba(109,40,217,0.08) 24%, transparent 48%)`;

  if (!shouldTrack) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden mix-blend-screen lg:block"
      style={{ background }}
    />
  );
}
