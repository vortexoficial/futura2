import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal, SectionHeader, TiltCard } from "@/src/components/premium";
import { icons, services } from "@/src/data/site-content";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Serviços"
          title="Serviços focados em clareza e resultado."
          description="A escolha certa para agora: melhorar a marca, corrigir o site ou loja e organizar a promoção para gerar contatos e vendas."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <TiltCard className="h-full" intensity={5}>
                  <Card
                    className={cn(
                      "group relative h-full overflow-hidden p-6",
                      service.recommended &&
                        "border-violet-400/30 shadow-[0_0_90px_rgba(139,92,246,0.16)]"
                    )}
                  >
                    {service.recommended ? (
                      <span className="pointer-events-none absolute inset-x-0 top-0 h-px animate-border-orbit bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-violet-500/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                          <motion.span whileHover={{ rotate: -6, scale: 1.1 }} className="block">
                            <Icon className="h-5 w-5 text-violet-300" />
                          </motion.span>
                        </span>
                        {service.recommended ? <Badge variant="premium">Recommended</Badge> : null}
                      </div>
                      <h3 className="text-2xl font-bold leading-[1.12] tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        {service.description}
                      </p>

                      <Tabs defaultValue="deliverables" className="mt-6">
                        <TabsList>
                          <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
                          <TabsTrigger value="fit">When it fits</TabsTrigger>
                          <TabsTrigger value="benefit">Outcome</TabsTrigger>
                        </TabsList>
                        <TabsContent value="deliverables">
                          <motion.ul
                            className="grid gap-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                              hidden: {},
                              visible: { transition: { staggerChildren: 0.05 } },
                            }}
                          >
                            {service.deliverables.map((item) => (
                              <motion.li
                                key={item}
                                variants={{
                                  hidden: { opacity: 0, x: 10 },
                                  visible: { opacity: 1, x: 0 },
                                }}
                                className="flex gap-2 text-sm text-slate-300"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                                {item}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </TabsContent>
                        <TabsContent value="fit">
                          <p className="text-sm leading-7 text-slate-300">
                            {service.whenItMakesSense}
                          </p>
                        </TabsContent>
                        <TabsContent value="benefit">
                          <p className="text-sm leading-7 text-slate-300">{service.benefit}</p>
                        </TabsContent>
                      </Tabs>
                    </div>
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
