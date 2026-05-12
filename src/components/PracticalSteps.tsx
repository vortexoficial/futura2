import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

import { Card } from "@/components/ui/card";
import { Reveal, SectionHeader } from "@/src/components/premium";
import { practicalSteps } from "@/src/data/site-content";

export function PracticalSteps() {
  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Na prática"
          title="Como funciona na prática."
          description="Um caminho claro para reduzir atrito, definir prioridade e transformar intenção em entrega."
        />
        <Card className="p-4 sm:p-6">
          <div className="grid gap-3 md:grid-cols-2">
            {practicalSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.04}>
                <div className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]">
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, type: "spring", stiffness: 360, damping: 24 }}
                    className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-violet-500/10 text-violet-300"
                  >
                    <CheckCircle className="h-4 w-4" />
                  </motion.span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-slate-200">{step}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
