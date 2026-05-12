import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal, SectionHeader, TiltCard } from "@/src/components/premium";
import { portfolioProjects } from "@/src/data/site-content";

const filters = ["Todos", "Sites", "Lojas", "Landing Pages", "Branding", "Campanhas"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const visibleProjects =
    activeFilter === "Todos"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter).slice(0, 6);

  return (
    <section id="portfolio" className="relative px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Sites, lojas e landing pages que desenvolvemos."
          description="Clique em um projeto para visitar o site. Nesta demo, usamos mockups visuais até inserir os screenshots reais."
        />
        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          <LayoutGroup>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "premium" : "secondary"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="relative overflow-hidden"
              >
                {activeFilter === filter ? (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{filter}</span>
              </Button>
            ))}
          </LayoutGroup>
        </Reveal>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${activeFilter}`}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(8px)" }}
                transition={{ duration: 0.45, delay: index * 0.025, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard intensity={5}>
                  <a href="#contact" className="group block">
                    <Card className="overflow-hidden p-0">
                      <div className="relative aspect-[1.35/1] overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} mockup do site`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-[#05070D]/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <p className="text-xs uppercase tracking-[0.22em] text-violet-300/80">
                            {project.category}
                          </p>
                          <div className="mt-2 flex items-end justify-between gap-4">
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-slate-950 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
