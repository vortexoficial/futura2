import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Card } from "@/components/ui/card";
import { Reveal, SectionHeader } from "@/src/components/premium";
import { painPoints } from "@/src/data/site-content";
import { cn } from "@/lib/utils";

export function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-violet-700/12 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/12 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Clareza que converte"
          title="Onde muitos negócios se perdem, nós organizamos."
          description="Quando a mensagem está confusa e o site não ajuda, as pessoas até visitam, mas não entendem, não confiam e não chamam."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {painPoints.map((point, index) => {
            const active = activeIndex === index;

            return (
              <Reveal key={point.title} delay={index * 0.05} variant="blur">
                <motion.button
                  type="button"
                  onClick={() => setActiveIndex(active ? null : index)}
                  whileHover={{ y: -6 }}
                  className="group h-full w-full text-left"
                  aria-expanded={active}
                >
                  <Card className="relative h-full overflow-hidden p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-700/12 via-transparent to-violet-500/10 opacity-70" />
                    <motion.div
                      className="absolute inset-y-0 left-0 w-1/2 bg-violet-700/8"
                      animate={{ opacity: active ? 0.2 : 0.7 }}
                    />
                    <motion.div
                      className="absolute inset-y-0 right-0 w-1/2 bg-violet-500/8"
                      animate={{ opacity: active ? 0.75 : 0.25 }}
                    />
                    <div className="relative grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                      <motion.div
                        animate={{ opacity: active ? 0.45 : 1, x: active ? -6 : 0 }}
                        className={cn("transition-opacity group-hover:opacity-50", active && "opacity-50")}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/80">
                          Before
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-white">{point.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {point.description}
                        </p>
                      </motion.div>
                      <motion.div
                        animate={{ x: active ? 8 : 0 }}
                        className="hidden lg:block"
                      >
                        <ArrowRight className="h-5 w-5 text-violet-300" />
                      </motion.div>
                      <motion.div
                        animate={{
                          opacity: active ? 1 : 0.68,
                          x: active ? 0 : 6,
                          scale: active ? 1.01 : 1,
                        }}
                        className="rounded-2xl border border-violet-400/10 bg-violet-500/5 p-4 transition-colors group-hover:border-violet-400/25"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80">
                          After
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-200">{point.solution}</p>
                        <span className="mt-4 inline-flex text-xs font-medium text-violet-300">
                          {active ? "Solution active" : "Tap or hover to see the path"}
                        </span>
                      </motion.div>
                    </div>
                  </Card>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
