import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

import { Card } from "@/components/ui/card";
import { Reveal, SectionHeader } from "@/src/components/premium";
import { processSteps } from "@/src/data/site-content";
import { cn } from "@/lib/utils";

function StepCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-42% 0px -42% 0px" });

  return (
    <Reveal>
      <div ref={ref} className="grid items-center gap-5 md:grid-cols-2">
        <div className={index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}>
          <motion.div
            animate={{
              scale: inView ? 1.02 : 1,
              boxShadow: inView
                ? "0 0 80px rgba(139,92,246,0.20)"
                : "0 20px 80px rgba(0,0,0,0.24)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            <Card
              className={cn(
                "relative overflow-hidden p-6 transition-colors",
                inView && "border-violet-400/30"
              )}
            >
              <motion.span
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"
                animate={{ x: inView ? ["-100%", "100%"] : "-100%" }}
                transition={{ duration: 1.8, repeat: inView ? Number.POSITIVE_INFINITY : 0 }}
              />
              <motion.p
                animate={{ opacity: inView ? 1 : 0.65 }}
                className="text-sm font-semibold text-violet-300"
              >
                {step.number}
              </motion.p>
              <h3 className="mt-3 text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
              <span className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                Sprint estratégico
              </span>
            </Card>
          </motion.div>
        </div>
        <div className={index % 2 === 0 ? "hidden md:block" : "hidden md:order-1 md:block"} />
      </div>
    </Reveal>
  );
}

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Processo"
          title="Como trabalhamos: clareza, base e melhoria contínua."
          description="Um processo simples, sem complicação, para deixar o improviso para trás e ganhar consistência."
        />
        <div ref={ref} className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block" />
          <motion.div
            className="absolute left-4 top-0 hidden w-px bg-gradient-to-b from-violet-600 via-purple-400 to-purple-600 md:left-1/2 md:block"
            style={{ height }}
          />
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
