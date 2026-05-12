import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { useMagnetic } from "@/src/hooks/useMagnetic";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/src/lib/animations";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  pulse = false,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  pulse?: boolean;
}) {
  const { ref, x, y, onMouseMove, onMouseLeave, enabled } =
    useMagnetic<HTMLAnchorElement>();

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      whileHover={enabled ? { scale: 1.035 } : undefined}
      whileTap={enabled ? { scale: 0.98 } : undefined}
      transition={motionConfig.hoverSpring}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
        variant === "primary"
          ? "premium-orbit-button text-white shadow-[0_0_44px_rgba(139,92,246,0.35)]"
          : "border border-white/12 bg-white/[0.06] text-white backdrop-blur-xl hover:bg-white/[0.10]",
        pulse && enabled && variant !== "primary" && "animate-premium-pulse",
        className
      )}
    >
      <span className="premium-orbit-sheen absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="premium-orbit-label relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}
