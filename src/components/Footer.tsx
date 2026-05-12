import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/src/components/premium";
import { footerColumns } from "@/src/data/site-content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#05070D] px-4 py-14">
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_1fr_0.9fr]">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-violet-600 via-purple-400 to-purple-700 text-sm font-black text-white">
                F
              </span>
              <span className="text-sm font-semibold tracking-[0.22em] text-white">
                FUTURA DESIGN
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Branding, websites, lojas online e criativos de anúncio com clareza e
              execução premium.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column, index) => (
            <Reveal key={column.title} delay={index * 0.04}>
              <h3 className="text-sm font-bold text-white">{column.title}</h3>
              <ul className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="group relative text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div>
            <h3 className="text-sm font-bold text-white">Receba insights</h3>
            <div className="mt-4 flex gap-2">
              <Input type="email" placeholder="Seu e-mail" aria-label="Seu e-mail" />
              <Button size="icon" variant="premium" aria-label="Assinar">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-3 text-xs text-slate-500">Sem spam. Conteúdo direto.</p>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-slate-500">
        © 2026 FUTURA DESIGN. Clareza, entrega e rastreamento. Sem promessas irreais.
      </div>
    </footer>
  );
}
