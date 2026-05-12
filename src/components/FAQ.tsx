import { HelpCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Reveal, SectionHeader } from "@/src/components/premium";
import { faqItems } from "@/src/data/site-content";

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes."
          description="Respostas diretas, com transparência e método."
        />
        <Reveal>
          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger>
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-4 w-4 shrink-0 text-violet-300" />
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
