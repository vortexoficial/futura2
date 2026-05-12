import { motion } from "motion/react";

import { Card } from "@/components/ui/card";
import { Reveal, SectionHeader, TiltCard } from "@/src/components/premium";
import { icons, methodCards } from "@/src/data/site-content";

export function MethodIntro() {
  return (
    <section className="relative px-4 py-16 sm:py-20 lg:py-24">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-12 top-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal variant="left">
          <SectionHeader
            align="left"
            eyebrow="Método antes de improviso"
            title="Crescer com confiança exige método."
            description="A FUTURA DESIGN organiza a base: mensagem clara, visual profissional, sites bem construídos e acompanhamento de resultados. Assim fica mais fácil atrair o público certo e transformar interesse em mensagens, pedidos e vendas."
          />
        </Reveal>

        <div className="relative grid gap-4 sm:grid-cols-2">
          {methodCards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <Reveal key={card.title} delay={index * 0.05}>
                <TiltCard intensity={6}>
                  <Card className="relative min-h-0 p-5 sm:min-h-52 sm:p-6">
                    <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.95)]" />
                    <motion.div whileHover={{ rotate: -5, scale: 1.08 }}>
                      <Icon className="h-6 w-6 text-violet-300" />
                    </motion.div>
                    <h3 className="mt-8 text-xl font-bold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
                    <span className="mt-5 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Base para conversão
                    </span>
                  </Card>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
