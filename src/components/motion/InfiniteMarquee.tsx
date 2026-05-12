import type { ReactNode } from "react";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function InfiniteMarquee({
  children,
  reverse = false,
  duration = 36,
}: {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
}) {
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const animate = reduceMotion || paused ? { x: "0%" } : { x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] };

  return (
    <div
      className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {[0, 1].map((copy) => (
        <motion.div
          key={copy}
          className="flex min-w-full shrink-0 gap-5 pr-5"
          aria-hidden={copy === 1}
          animate={animate}
          transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
}
