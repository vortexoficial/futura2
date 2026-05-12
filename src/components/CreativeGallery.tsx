import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  InfiniteMarquee,
  Reveal,
  SectionHeader,
  TiltCard,
} from "@/src/components/premium";
import { creativeWorks } from "@/src/data/site-content";

export function CreativeGallery() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Trabalhos criativos"
          title="Portfólio e projetos criativos."
          description="Quando mostramos trabalho, mostramos o que importou: o objetivo, o que foi feito e como isso ajudou o negócio."
        />
      </div>
      <div className="grid gap-5">
        <InfiniteMarquee>
          {creativeWorks.map((work) => (
            <Card key={work.title} className="group w-64 shrink-0 overflow-hidden p-0 sm:w-80">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 translate-y-2 text-sm font-semibold text-white opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {work.title}
                </p>
              </div>
            </Card>
          ))}
        </InfiniteMarquee>
        <InfiniteMarquee reverse duration={42}>
          {[...creativeWorks].reverse().map((work) => (
            <Card key={`reverse-${work.title}`} className="group w-60 shrink-0 overflow-hidden p-0 sm:w-72">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                  {work.title}
                </p>
              </div>
            </Card>
          ))}
        </InfiniteMarquee>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-3">
        {creativeWorks.slice(0, 3).map((work, index) => (
          <Reveal key={work.title} delay={index * 0.05}>
            <TiltCard intensity={5}>
              <motion.div>
                <Card className="overflow-hidden p-0">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="aspect-[1.2/1] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <p className="text-lg font-semibold text-white">{work.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Direção visual, clareza de oferta e peças prontas para ação.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <Button asChild variant="outline">
          <a href="#contact">Ver trabalhos no Instagram</a>
        </Button>
      </Reveal>
    </section>
  );
}
