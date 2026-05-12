import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Brush,
  Camera,
  CheckCircle,
  Code2,
  Globe,
  Layers,
  LineChart,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";

export type IconName =
  | "Sparkles"
  | "Globe"
  | "Palette"
  | "MonitorSmartphone"
  | "Megaphone"
  | "LineChart"
  | "MessageCircle"
  | "Rocket"
  | "ShieldCheck"
  | "CheckCircle"
  | "ArrowUpRight"
  | "MousePointerClick"
  | "Layers"
  | "Code2"
  | "Brush"
  | "Store"
  | "Instagram";

export const icons: Record<IconName, LucideIcon> = {
  Sparkles,
  Globe,
  Palette,
  MonitorSmartphone,
  Megaphone,
  LineChart,
  MessageCircle,
  Rocket,
  ShieldCheck,
  CheckCircle,
  ArrowUpRight,
  MousePointerClick,
  Layers,
  Code2,
  Brush,
  Store,
  Instagram: Camera,
};

export const whatsAppUrl =
  "https://wa.me/5500000000000?text=Hello%20FUTURA%20DESIGN%2C%20I%20want%20a%20digital%20presence%20diagnosis.";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: 190, suffix: "+", label: "Projects delivered", icon: "Rocket" },
  { value: 92, suffix: "%", label: "Client satisfaction", icon: "ShieldCheck" },
  { value: 7, suffix: "+", label: "Years of experience", icon: "Sparkles" },
  { value: 10, suffix: "+", label: "Business segments", icon: "Globe" },
] satisfies Array<{
  value: number;
  suffix: string;
  label: string;
  icon: IconName;
}>;

export const methodCards = [
  {
    title: "Clear message",
    description:
      "Your client quickly understands what you do, who it is for and how to contact you.",
    icon: "MessageCircle",
  },
  {
    title: "Lightweight and organized website",
    description:
      "Fast loading, responsive layout and a clear path to action.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Result tracking",
    description:
      "Track visits, clicks, messages and orders without confusion.",
    icon: "LineChart",
  },
  {
    title: "Direct process",
    description:
      "Clear steps, agreed deadlines and objective communication.",
    icon: "MousePointerClick",
  },
] satisfies Array<{ title: string; description: string; icon: IconName }>;

export const painPoints = [
  {
    title: "Many visits, few messages",
    description:
      "The visitor enters but does not know what to do.",
    solution:
      "We adjust copy, pages and calls to action so attention turns into conversations.",
  },
  {
    title: "Beautiful but confusing website",
    description:
      "Visual appeal exists, but navigation does not help the decision.",
    solution:
      "We simplify the path with proof, essential information and clear contact points.",
  },
  {
    title: "Lack of credibility",
    description:
      "The brand looks improvised and the client hesitates.",
    solution:
      "We organize identity and communication to transmit security and professionalism.",
  },
  {
    title: "No clarity of results",
    description:
      "The business invests, but cannot see what generates contacts and sales.",
    solution:
      "We set up tracking so decisions stop depending on guessing.",
  },
];

export const capabilities = [
  {
    title: "Complete development",
    description:
      "Websites and systems built with speed, security and stability.",
    icon: "Code2",
  },
  {
    title: "Brand and experience",
    description:
      "Professional visual identity and information architecture that makes everything easier to understand.",
    icon: "Palette",
  },
  {
    title: "Websites and stores",
    description:
      "Fast, organized and responsive experiences designed to convert visits into messages and orders.",
    icon: "Store",
  },
  {
    title: "Content and ads",
    description:
      "Creative assets and campaigns with clear goals and performance tracking.",
    icon: "Megaphone",
  },
] satisfies Array<{ title: string; description: string; icon: IconName }>;

export const services = [
  {
    title: "Brand and identity",
    icon: "Brush",
    description:
      "Professional visuals and clear messaging to increase trust and make the client decision easier.",
    whenItMakesSense:
      "When the brand looks generic, communication is confusing and the client does not understand the value.",
    deliverables: [
      "Message and differentiators",
      "Visual identity and simple usage guide",
      "Templates for social media and ads",
    ],
    benefit:
      "More trust, less client doubt and coherent presentation across every channel.",
  },
  {
    title: "Websites and online stores",
    icon: "MonitorSmartphone",
    recommended: true,
    description:
      "A simple-to-navigate website that explains clearly and guides people to action.",
    whenItMakesSense:
      "When the website is slow, confusing or does not generate contacts and orders.",
    deliverables: [
      "Landing pages and institutional websites",
      "Mobile and desktop responsive layout",
      "Basic SEO and result tracking",
    ],
    benefit:
      "More orders and messages with a solid base ready for promotion.",
  },
  {
    title: "Ads and creatives",
    icon: "Megaphone",
    description:
      "Creative assets for ads and social media with clear goals and performance tracking.",
    whenItMakesSense:
      "When ads generate weak contacts or it is unclear what brought results.",
    deliverables: [
      "Creative packages for ads and social media",
      "Offer and message organization",
      "Adjustments based on messages, orders and sales",
    ],
    benefit: "More predictability and safer decisions without guessing.",
  },
  {
    title: "Social media management",
    icon: "Instagram",
    description:
      "Organic strategy that turns content into messages and orders.",
    whenItMakesSense:
      "When the business posts without consistency, proof or clear call to action.",
    deliverables: [
      "Content calendar",
      "Strategic posts and creatives",
      "Clear CTA and content direction",
    ],
    benefit:
      "More consistency, authority and direct communication with the audience.",
  },
] satisfies Array<{
  title: string;
  icon: IconName;
  recommended?: boolean;
  description: string;
  whenItMakesSense: string;
  deliverables: string[];
  benefit: string;
}>;

export const processSteps = [
  {
    number: "01",
    title: "Diagnosis",
    description:
      "We understand your goal, audience and what a good result means for you.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We organize the message, proof and customer path to contact or purchase.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "We build the page, website or store with clear copy and result tracking.",
  },
  {
    number: "04",
    title: "Acquisition",
    description:
      "We create assets and organize promotion to attract people with real interest.",
  },
  {
    number: "05",
    title: "Optimization",
    description:
      "We improve what is necessary to increase orders and reduce waste.",
  },
];

export const portfolioProjects = [
  "Reformas Santos",
  "To de Hack",
  "Calcados Castro e Esportiva",
  "Grand Haus Engenharia",
  "1000 Prints",
  "Kapte Midia",
  "Ponto.Tech",
  "Anjos do Leite",
  "Dionisio Gin & Vodka",
  "Serralheria Africa",
  "Viva Haven",
  "Maues Energy",
].map((title, index) => ({
  title,
  category: index % 3 === 0 ? "Websites" : index % 3 === 1 ? "Stores" : "Landing Pages",
  image: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  ][index % 4],
}));

export const creativeWorks = [
  {
    title: "Campaign system",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Brand direction",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Launch creatives",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Studio content",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Digital presence",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Interface assets",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
];

export const expectationItems = [
  {
    title: "Priority clarity",
    description:
      "You get a simple plan: what will be done first, what comes later and why.",
    icon: "Layers",
  },
  {
    title: "Clear path to contact",
    description:
      "Your website and communication stop being decoration and start guiding people to action.",
    icon: "MousePointerClick",
  },
  {
    title: "Tracking without complication",
    description:
      "You follow the basics that matter: visits, clicks and messages.",
    icon: "LineChart",
  },
] satisfies Array<{ title: string; description: string; icon: IconName }>;

export const practicalSteps = [
  "You explain the goal and what needs improvement.",
  "We define what will be delivered and the deadline.",
  "You approve the text and visual before launch.",
  "We publish with result tracking.",
  "We adjust based on what people do on the website.",
  "You have a clear next step without confusion.",
];

export const faqItems = [
  {
    question: "Can we start with a smaller budget?",
    answer:
      "Yes. The key is prioritization. We define a lean scope and deliver what unlocks results now, with a solid base to evolve.",
  },
  {
    question: "Do you guarantee sales or lead numbers?",
    answer:
      "We do not promise numbers. Every business has a different market, offer and ticket. We guarantee process and quality: clear messaging, well-structured pages and tracking to optimize safely.",
  },
  {
    question: "I already have a website or identity. Can you improve it?",
    answer:
      "Yes, and often this is the smartest path. We adjust positioning, structure, copy and visual direction to make it clearer, more reliable and easier to convert.",
  },
  {
    question: "How does the diagnosis work?",
    answer:
      "You explain your goal and moment, we analyze the scenario and return a practical plan: what to do first, why and what next step makes sense.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "It depends on scope and available material. During diagnosis, you receive deadline, steps and what we need from your side.",
  },
];

export const diagnosisItems = [
  "Understanding your goal and audience",
  "Recommendation of what to do first",
  "Scope proposal with deadline and priority",
  "Content guidance",
  "Clear next step without pressure",
];

export const footerColumns = [
  {
    title: "Sitemap",
    links: ["Home", "Team", "Services", "Contact"],
  },
  {
    title: "Legal",
    links: ["Terms of Use", "Privacy", "Cookies"],
  },
  {
    title: "Direct Contact",
    links: ["@futuradesign.br", "WhatsApp Support"],
  },
];
