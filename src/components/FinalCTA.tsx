import { CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { MagneticButton, Reveal } from "@/src/components/premium";
import { diagnosisItems, whatsAppUrl } from "@/src/data/site-content";

const particles = [
  { left: "12%", top: "22%", delay: 0 },
  { left: "78%", top: "18%", delay: 0.7 },
  { left: "62%", top: "74%", delay: 1.2 },
  { left: "25%", top: "82%", delay: 1.8 },
];

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(109,40,217,0.24),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.14),transparent_30%),linear-gradient(180deg,#05070D,#080D18)]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-[-20%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent blur-2xl"
        animate={{ x: ["0%", "160%", "0%"], opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          aria-hidden="true"
          className="absolute h-1.5 w-1.5 rounded-full bg-violet-400/70 shadow-[0_0_22px_rgba(139,92,246,0.80)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -18, 0], opacity: [0.25, 0.9, 0.25] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal variant="scale">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/80">
              Diagnóstico por WhatsApp
            </p>
            <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1]">
              Se você quer melhorar sua presença digital, comece pelo básico bem feito.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Fale conosco e descreva seu objetivo. Você sai com um caminho claro:
              o que ajustar primeiro e o que pode esperar.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href={whatsAppUrl} pulse>
                Falar no WhatsApp
              </MagneticButton>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="lg">
                    Ver o que entregamos
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>O que o diagnóstico organiza</DialogTitle>
                    <DialogDescription>
                      Uma conversa objetiva para transformar dúvidas em prioridade.
                    </DialogDescription>
                  </DialogHeader>
                  <ul className="grid gap-3">
                    {diagnosisItems.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-200">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </DialogContent>
              </Dialog>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Sem compromisso • Resposta em horário comercial • Conversa direta
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} variant="right">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Card className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-violet-500/10 text-violet-300">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Diagnóstico WhatsApp</p>
                  <p className="text-xs text-slate-500">Prioridade e próximo passo</p>
                </div>
              </div>
              <ul className="grid gap-4">
                {diagnosisItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
