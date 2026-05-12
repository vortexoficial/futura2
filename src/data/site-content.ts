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
  "https://wa.me/5500000000000?text=Ol%C3%A1%20FUTURA%20DESIGN%2C%20quero%20um%20diagn%C3%B3stico%20de%20presen%C3%A7a%20digital.";

export const navItems = [
  { label: "Início", href: "#home" },
  { label: "Equipe", href: "#team" },
  { label: "Serviços", href: "#services" },
  { label: "Como funciona", href: "#process" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contact" },
];

export const metrics = [
  { value: 190, suffix: "+", label: "Projetos entregues", icon: "Rocket" },
  { value: 92, suffix: "%", label: "Satisfação dos clientes", icon: "ShieldCheck" },
  { value: 7, suffix: "+", label: "Anos de experiência", icon: "Sparkles" },
  { value: 10, suffix: "+", label: "Segmentos atendidos", icon: "Globe" },
] satisfies Array<{
  value: number;
  suffix: string;
  label: string;
  icon: IconName;
}>;

export const methodCards = [
  {
    title: "Mensagem clara",
    description:
      "Seu cliente entende rapidamente o que você faz, para quem é e como entrar em contato.",
    icon: "MessageCircle",
  },
  {
    title: "Site leve e organizado",
    description:
      "Carregamento rápido, layout responsivo e um caminho claro para a ação.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Rastreamento de resultados",
    description:
      "Acompanhe visitas, cliques, mensagens e pedidos sem confusão.",
    icon: "LineChart",
  },
  {
    title: "Processo direto",
    description:
      "Etapas claras, prazos combinados e comunicação objetiva.",
    icon: "MousePointerClick",
  },
] satisfies Array<{ title: string; description: string; icon: IconName }>;

export const painPoints = [
  {
    title: "Muitas visitas, poucas mensagens",
    description:
      "O visitante entra, mas não sabe o que fazer.",
    solution:
      "Ajustamos a copy, as páginas e as chamadas para ação para que a atenção vire conversa.",
  },
  {
    title: "Site bonito, mas confuso",
    description:
      "O apelo visual existe, mas a navegação não ajuda na decisão.",
    solution:
      "Simplificamos o caminho com provas, informações essenciais e pontos de contato claros.",
  },
  {
    title: "Falta de credibilidade",
    description:
      "A marca parece improvisada e o cliente hesita.",
    solution:
      "Organizamos identidade e comunicação para transmitir segurança e profissionalismo.",
  },
  {
    title: "Sem clareza de resultados",
    description:
      "O negócio investe, mas não consegue ver o que gera contatos e vendas.",
    solution:
      "Configuramos o rastreamento para que as decisões parem de depender de suposições.",
  },
];

export const capabilities = [
  {
    title: "Desenvolvimento completo",
    description:
      "Sites e sistemas construídos com velocidade, segurança e estabilidade.",
    icon: "Code2",
  },
  {
    title: "Marca e experiência",
    description:
      "Identidade visual profissional e arquitetura de informação que facilita a compreensão de tudo.",
    icon: "Palette",
  },
  {
    title: "Sites e lojas",
    description:
      "Experiências rápidas, organizadas e responsivas para converter visitas em mensagens e pedidos.",
    icon: "Store",
  },
  {
    title: "Conteúdo e anúncios",
    description:
      "Criativos e campanhas com objetivos claros e rastreamento de performance.",
    icon: "Megaphone",
  },
] satisfies Array<{ title: string; description: string; icon: IconName }>;

export const services = [
  {
    title: "Marca e identidade",
    icon: "Brush",
    description:
      "Visual profissional e comunicação clara para aumentar a confiança e facilitar a decisão do cliente.",
    whenItMakesSense:
      "Quando a marca parece genérica, a comunicação é confusa e o cliente não entende o valor.",
    deliverables: [
      "Mensagem e diferenciais",
      "Identidade visual e guia simples de uso",
      "Templates para redes sociais e anúncios",
    ],
    benefit:
      "Mais confiança, menos dúvida do cliente e apresentação coerente em todos os canais.",
  },
  {
    title: "Sites e lojas online",
    icon: "MonitorSmartphone",
    recommended: true,
    description:
      "Um site fácil de navegar, que explica com clareza e guia as pessoas para a ação.",
    whenItMakesSense:
      "Quando o site é lento, confuso ou não gera contatos e pedidos.",
    deliverables: [
      "Landing pages e sites institucionais",
      "Layout responsivo para mobile e desktop",
      "SEO básico e rastreamento de resultados",
    ],
    benefit:
      "Mais pedidos e mensagens com uma base sólida pronta para promoção.",
  },
  {
    title: "Anúncios e criativos",
    icon: "Megaphone",
    description:
      "Criativos para anúncios e redes sociais com objetivos claros e rastreamento de performance.",
    whenItMakesSense:
      "Quando os anúncios geram contatos fracos ou não está claro o que trouxe resultados.",
    deliverables: [
      "Pacotes criativos para anúncios e redes sociais",
      "Organização de oferta e mensagem",
      "Ajustes baseados em mensagens, pedidos e vendas",
    ],
    benefit: "Mais previsibilidade e decisões mais seguras sem suposições.",
  },
  {
    title: "Gestão de redes sociais",
    icon: "Instagram",
    description:
      "Estratégia orgânica que transforma conteúdo em mensagens e pedidos.",
    whenItMakesSense:
      "Quando o negócio posta sem consistência, sem prova ou sem chamada clara para ação.",
    deliverables: [
      "Calendário de conteúdo",
      "Posts estratégicos e criativos",
      "CTA claro e direção de conteúdo",
    ],
    benefit:
      "Mais consistência, autoridade e comunicação direta com o público.",
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
    title: "Diagnóstico",
    description:
      "Entendemos seu objetivo, público e o que um bom resultado significa para você.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Organizamos a mensagem, as provas e o caminho do cliente até o contato ou a compra.",
  },
  {
    number: "03",
    title: "Construção",
    description:
      "Construímos a página, o site ou a loja com copy clara e rastreamento de resultados.",
  },
  {
    number: "04",
    title: "Aquisição",
    description:
      "Criamos criativos e organizamos a promoção para atrair pessoas com interesse real.",
  },
  {
    number: "05",
    title: "Otimização",
    description:
      "Melhoramos o que for necessário para aumentar pedidos e reduzir desperdício.",
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
  category: index % 3 === 0 ? "Sites" : index % 3 === 1 ? "Lojas" : "Landing Pages",
  image: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  ][index % 4],
}));

export const creativeWorks = [
  {
    title: "Sistema de campanha",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Direção de marca",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Criativos de lançamento",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conteúdo de estúdio",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Presença digital",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ativos de interface",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
];

export const expectationItems = [
  {
    title: "Clareza de prioridades",
    description:
      "Você recebe um plano simples: o que será feito primeiro, o que vem depois e por quê.",
    icon: "Layers",
  },
  {
    title: "Caminho claro para o contato",
    description:
      "Seu site e sua comunicação param de ser decoração e passam a guiar as pessoas para a ação.",
    icon: "MousePointerClick",
  },
  {
    title: "Rastreamento sem complicação",
    description:
      "Você acompanha o básico que importa: visitas, cliques e mensagens.",
    icon: "LineChart",
  },
] satisfies Array<{ title: string; description: string; icon: IconName }>;

export const practicalSteps = [
  "Você explica o objetivo e o que precisa melhorar.",
  "Definimos o que será entregue e o prazo.",
  "Você aprova o texto e o visual antes do lançamento.",
  "Publicamos com rastreamento de resultados.",
  "Ajustamos com base no que as pessoas fazem no site.",
  "Você tem um próximo passo claro, sem confusão.",
];

export const faqItems = [
  {
    question: "Podemos começar com um orçamento menor?",
    answer:
      "Sim. A chave é a priorização. Definimos um escopo enxuto e entregamos o que desbloqueia resultados agora, com uma base sólida para evoluir.",
  },
  {
    question: "Vocês garantem números de vendas ou leads?",
    answer:
      "Não prometemos números. Cada negócio tem um mercado, oferta e ticket diferentes. Garantimos processo e qualidade: mensagem clara, páginas bem estruturadas e rastreamento para otimizar com segurança.",
  },
  {
    question: "Já tenho um site ou identidade. Vocês conseguem melhorar?",
    answer:
      "Sim, e muitas vezes esse é o caminho mais inteligente. Ajustamos posicionamento, estrutura, copy e direção visual para deixar mais claro, mais confiável e mais fácil de converter.",
  },
  {
    question: "Como funciona o diagnóstico?",
    answer:
      "Você explica seu objetivo e momento, analisamos o cenário e devolvemos um plano prático: o que fazer primeiro, por quê e qual próximo passo faz sentido.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "Depende do escopo e do material disponível. No diagnóstico, você recebe o prazo, as etapas e o que precisamos da sua parte.",
  },
];

export const diagnosisItems = [
  "Entendimento do seu objetivo e público",
  "Recomendação do que fazer primeiro",
  "Proposta de escopo com prazo e prioridade",
  "Orientação de conteúdo",
  "Próximo passo claro, sem pressão",
];

export const footerColumns = [
  {
    title: "Mapa do site",
    links: ["Início", "Equipe", "Serviços", "Contato"],
  },
  {
    title: "Legal",
    links: ["Termos de Uso", "Privacidade", "Cookies"],
  },
  {
    title: "Contato Direto",
    links: ["@futuradesign.br", "Suporte via WhatsApp"],
  },
];
