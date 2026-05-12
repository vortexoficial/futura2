import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal, SectionHeader, TiltCard } from "@/src/components/premium";
import { capabilities, icons } from "@/src/data/site-content";

export function TeamSection() {
  return (
    <section id="team" className="relative px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal variant="left">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_120px_rgba(0,0,0,0.38)] sm:rounded-[2rem] sm:p-3">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(139,92,246,0.16),transparent)]" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85"
              alt="Creative team planning digital strategy"
              className="relative aspect-[1.12/1] w-full rounded-2xl object-cover opacity-85 sm:rounded-[1.55rem]"
              loading="lazy"
            />
            {["Design", "Development", "Strategy", "Performance"].map((label, index) => (
              <motion.div
                key={label}
                className="absolute rounded-full border border-white/10 bg-[#080D18]/80 px-4 py-2 text-sm font-medium text-white shadow-xl backdrop-blur-xl"
                style={{
                  left: index % 2 === 0 ? "7%" : "auto",
                  right: index % 2 === 1 ? "7%" : "auto",
                  top: `${16 + index * 18}%`,
                }}
                animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
                transition={{ duration: 6 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {label}
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="right">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Equipe completa"
            title="Um time para planejar e entregar."
            description="Design, desenvolvimento e estratégia trabalhando juntos com foco no que seu cliente precisa entender para confiar e tomar uma decisão."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <TiltCard intensity={4}>
                    <Card className="h-full p-5">
                      <motion.div whileHover={{ rotate: -5, scale: 1.08 }}>
                        <Icon className="h-5 w-5 text-violet-300" />
                      </motion.div>
                      <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                    </Card>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Clareza", "Autoridade", "Conversão", "Rastreamento"].map((item) => (
              <Badge key={item} variant="premium">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
