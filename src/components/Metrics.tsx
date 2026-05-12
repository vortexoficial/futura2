import { motion } from "motion/react";

import { Card } from "@/components/ui/card";
import { AnimatedCounter, Reveal, TiltCard } from "@/src/components/premium";
import { icons, metrics } from "@/src/data/site-content";

export function Metrics() {
  return (
    <section id="metrics" className="relative z-10 -mt-8 px-4 pb-16 sm:-mt-12 sm:pb-20 lg:-mt-16">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = icons[metric.icon];
          return (
            <Reveal key={metric.label} delay={index * 0.04}>
              <TiltCard intensity={5}>
                <Card className="group relative overflow-hidden p-5 sm:p-6">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-x-8 -top-10 h-24 rounded-full bg-violet-500/20 blur-3xl" />
                  </div>
                  <motion.div whileHover={{ y: -2, rotate: -6, scale: 1.08 }}>
                    <Icon className="mb-5 h-5 w-5 text-violet-300" />
                  </motion.div>
                  <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
                </Card>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
