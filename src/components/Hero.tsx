import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { CheckCircle } from "lucide-react";

import {
  FloatingCard,
  GradientText,
  MagneticButton,
  VideoBackground,
} from "@/src/components/premium";
import { whatsAppUrl } from "@/src/data/site-content";
import { useMousePosition } from "@/src/hooks/useMousePosition";
import { motionConfig } from "@/src/lib/animations";

const headlineWords = [
  { text: "Design", highlight: true },
  { text: "e" },
  { text: "estratégia" },
  { text: "para" },
  { text: "transformar" },
  { text: "visitas" },
  { text: "em" },
  { text: "clientes.", highlight: true },
];

const entranceVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const headlineVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.075,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.99, filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: motionConfig.ease },
  },
};

const supportingVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: motionConfig.ease, delay },
  }),
};

export function Hero() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const { x, y, shouldTrack } = useMousePosition();
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.78]);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${x}px ${y}px, rgba(139,92,246,0.20), rgba(109,40,217,0.09) 28%, transparent 58%)`;

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden pt-20 sm:pt-24">
      <VideoBackground />
      {shouldTrack ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[1] hidden mix-blend-screen xl:block"
          style={{ background: spotlight }}
        />
      ) : null}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-24 z-[1] hidden h-px origin-left bg-gradient-to-r from-transparent via-violet-400/70 to-transparent md:block"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        animate={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.15, ease: motionConfig.ease, delay: 0.25 }}
      />

      <FloatingCard title="Branding" meta="Authority" className="left-[7%] top-[28%]" />
      <FloatingCard
        title="Websites"
        meta="Conversion"
        className="right-[10%] top-[26%]"
        delay={0.8}
        direction={-1}
      />
      <FloatingCard
        title="Ads + Analytics"
        meta="Tracking"
        className="bottom-[18%] right-[18%]"
        delay={1.4}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-start px-4 pb-16 pt-20 sm:pt-24 lg:pt-28 xl:pt-32"
        style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
      >
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={entranceVariants}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.h1
            variants={headlineVariants}
            className="text-balance text-[2.7rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            {headlineWords.map((word, index) => (
              <motion.span
                key={`${word.text}-${index}`}
                variants={wordVariants}
                className="mr-[0.18em] inline-block origin-bottom will-change-transform"
              >
                {word.highlight ? <GradientText>{word.text}</GradientText> : word.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={supportingVariants}
            custom={1.05}
            className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-xl"
          >
            Branding, websites, lojas online, social media e criativos de anúncio
            construídos com clareza, autoridade e estratégia de conversão.
          </motion.p>

          <motion.div
            variants={supportingVariants}
            custom={1.16}
            className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:mt-10"
          >
            <MagneticButton href={whatsAppUrl} className="w-full sm:w-auto" pulse>
              Falar no WhatsApp
            </MagneticButton>
            <MagneticButton href="#process" variant="secondary" className="w-full sm:w-auto">
              Ver como funciona
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={supportingVariants}
            custom={1.26}
            className="mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-sm text-slate-400 lg:mt-8"
          >
            {["Estratégia clara", "Execução premium", "Resultados mensuráveis"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-violet-300" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
