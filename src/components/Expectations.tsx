import { motion } from "motion/react";

import { Card } from "@/components/ui/card";
import { Reveal, SectionHeader } from "@/src/components/premium";
import { expectationItems, icons } from "@/src/data/site-content";

export function Expectations() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-24 mx-auto h-72 max-w-4xl rounded-full bg-violet-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Transparência"
          title="O que você pode esperar do processo."
          description="Sem promessas milagrosas. O foco é clareza, entrega de qualidade e acompanhamento do que importa."
        />
        <div className="relative grid gap-5 md:grid-cols-3">
          {expectationItems.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <motion.div whileHover={{ y: -6 }}>
                  <Card className="relative min-h-0 p-5 sm:min-h-64 sm:p-6">
                    <Icon className="h-6 w-6 text-violet-300" />
                    <h3 className="mt-8 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
                  </Card>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
