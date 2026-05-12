import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/src/components/motion/Reveal";

export { AnimatedCounter } from "@/src/components/motion/AnimatedCounter";
export { InfiniteMarquee } from "@/src/components/motion/InfiniteMarquee";
export { MagneticButton } from "@/src/components/motion/MagneticButton";
export { MouseGlow } from "@/src/components/motion/MouseGlow";
export { Reveal } from "@/src/components/motion/Reveal";
export { TiltCard } from "@/src/components/motion/TiltCard";

export function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "animate-gradient-shimmer bg-[linear-gradient(110deg,#C4B5FD,#A78BFA,#8B5CF6,#C4B5FD)] bg-[length:220%_100%] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      variant="blur"
      className={cn(
        "mx-auto mb-10 max-w-3xl sm:mb-12",
        align === "center" ? "text-center" : "mx-0 text-left"
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-42"
        src="/videos/background.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 top-24 h-72 w-[34rem] rotate-12 rounded-full bg-violet-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 hidden h-96 w-[34rem] -rotate-12 rounded-full bg-violet-400/10 blur-3xl md:block"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(5,7,13,0.68),rgba(5,7,13,0.36)_28%,transparent_48%),radial-gradient(circle_at_25%_20%,rgba(109,40,217,0.10),transparent_28%),radial-gradient(circle_at_75%_10%,rgba(139,92,246,0.08),transparent_30%),linear-gradient(180deg,rgba(5,7,13,0.62)_0%,rgba(5,7,13,0.74)_52%,rgba(5,7,13,0.92)_78%,#05070D_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#05070D]/92 to-[#05070D]" />
    </div>
  );
}

export function FloatingCard({
  title,
  meta,
  className,
  delay = 0,
  direction = 1,
}: {
  title: string;
  meta: string;
  className?: string;
  delay?: number;
  direction?: 1 | -1;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute hidden min-w-40 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.075] px-4 py-3 text-left shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl will-change-transform xl:block",
        className
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
      animate={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
              y: [0, -14, 0],
              rotate: [0, direction * 1.5, 0],
              x: [0, direction * 8, 0],
            }
      }
      transition={{
        opacity: { duration: 0.55, delay },
        scale: { duration: 0.55, delay },
        y: {
          duration: 7.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        },
        x: {
          duration: 8.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        },
        rotate: {
          duration: 8.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/12 to-transparent opacity-80" />
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
      <p className="relative text-xs uppercase tracking-[0.22em] text-violet-300/70">
        {meta}
      </p>
      <p className="relative mt-1 text-sm font-semibold text-white">{title}</p>
    </motion.div>
  );
}
