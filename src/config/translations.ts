export type Locale = "pt" | "en";

export const defaultLocale: Locale = "en";

export const LOCALE_STORAGE_KEY = "patrick-portfolio-locale";

export type TimelineJob = {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  achievements: string[];
};

export type Translations = {
  site: {
    role: string;
    roleSubtitle: string;
    description: string;
    portfolioSuffix: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    connect: string;
    scroll: string;
    visitGithub: string;
    visitLinkedin: string;
  };
  about: {
    title: string;
    body: string;
  };
  skills: {
    title: string;
    subtitle: string;
    showLess: string;
    showAll: (n: number) => string;
    footer: string;
  };
  timeline: {
    title: string;
    subtitle: string;
    jobs: TimelineJob[];
  };
  projects: {
    title: string;
    total: string;
    introWithToken: string;
    introNoToken: string;
    emptyNoToken: string;
    emptyWithToken: string;
    github: string;
    site: string;
    coverAlt: (title: string) => string;
  };
  contact: {
    title: string;
    intro: string;
    copyEmail: string;
    copyPhone: string;
    phone: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    success: string;
    fail: string;
    error: string;
    copied: (label: string) => string;
  };
  footer: {
    quickLinks: string;
    focus: string;
    connect: string;
    keywords: string;
  };
  footerNav: {
    about: string;
    skills: string;
    projects: string;
  };
  services: {
    backend: string;
    platform: string;
    publicProjects: string;
  };
  theme: {
    toggle: string;
    light: string;
    dark: string;
    system: string;
  };
  language: {
    label: string;
    pt: string;
    en: string;
  };
};

const pt: Translations = {
  site: {
    role: "Engenheiro de Backend",
    roleSubtitle:
      "Especializado em arquitetura de sistemas distribuídos e evolução de plataformas de alta criticidade.",
    description:
      "Engenheiro de backend — sistemas distribuídos, plataformas críticas, Java, TypeScript, Node.js, cloud e CI/CD.",
    portfolioSuffix: "Portfólio",
  },
  nav: {
    home: "Início",
    about: "Sobre",
    skills: "Competências",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    connect: "Vamos conversar",
    scroll: "Rolar para explorar",
    visitGithub: "Ver perfil no GitHub",
    visitLinkedin: "Ver perfil no LinkedIn",
  },
  about: {
    title: "Sobre mim",
    body: "Profissional com mais de 5 anos de experiência no desenvolvimento de aplicações em escala global, com atuação sólida em arquitetura de software, segurança, alta disponibilidade e escalabilidade. Tenho como foco principal a compreensão profunda dos requisitos de negócio, garantindo a entrega de soluções robustas, eficientes e sustentáveis a longo prazo.",
  },
  skills: {
    title: "Competências técnicas",
    subtitle:
      "Seleção das principais tecnologias que uso no dia a dia em backend, plataforma e entrega.",
    showLess: "Ver menos",
    showAll: (n: number) => `Ver todas (${n})`,
    footer:
      "…e muitas outras tecnologias que continuo a explorar e aprofundar.",
  },
  timeline: {
    title: "Experiência profissional",
    subtitle: "Backend, liderança técnica e produtos de grande escala.",
    jobs: [
      {
        id: 1,
        title: "Engenheiro de Backend Sénior | Tech Lead",
        company: "AB InBev · Tempo integral",
        location: "Remoto",
        date: "jan. 2025 – o momento · 1 ano 4 meses",
        description: "Liderança no desenvolvimento backend.",
        achievements: [
          "Liderança do desenvolvimento backend utilizando NestJS e arquitetura de microserviços, garantindo sistemas escaláveis e resilientes.",
          "Arquitetura de serviços orientados a eventos (event-driven), suportando operações globais e equipes distribuídas.",
          "Gestão de deploys e infraestrutura em Azure e Docker, assegurando confiabilidade e eficiência operacional.",
          "Definição de padrões técnicos, arquiteturais e estratégias de integração entre serviços.",
          "Mentoria de desenvolvedores e disseminação de boas práticas em testes, qualidade de código e design de sistemas.",
          "Otimização de performance, redução de custos operacionais e melhoria contínua da manutenibilidade dos sistemas.",
        ],
      },
      {
        id: 2,
        title: "Desenvolvedor Backend (ab-inbev)",
        company: "act digital · Tempo integral",
        location: "Caxias do Sul, Rio Grande do Sul, Brasil · Remoto",
        date: "nov. 2023 – jan. 2025 · 1 ano 3 meses",
        description:
          "Atuação numa plataforma internacional de gestão de cupões, com foco em backend e soluções em nuvem.",
        achievements: [
          "Desenvolvimento de serviços backend com NestJS para uma aplicação internacional de grande escala.",
          "Construção e manutenção de microserviços em arquitetura distribuída, com foco em fiabilidade e performance.",
          "Utilização de serviços na Azure para deploy, monitorização e escalabilidade dos componentes backend.",
          "Integração com múltiplas APIs e serviços externos, a suportar processos de negócio e operações globais.",
          "Colaboração com equipas multidisciplinares em diferentes países e contextos culturais.",
          "Boas práticas em testes, qualidade de código e otimização de performance, garantindo estabilidade e manutenibilidade.",
        ],
      },
      {
        id: 3,
        title: "Desenvolvedor de Software",
        company: "LOHR · Tempo integral",
        location: "Caxias do Sul, Rio Grande do Sul, Brasil",
        date: "nov. 2020 – nov. 2023 · 3 anos 1 mês",
        description:
          "Desenvolvimento e evolução de um ERP industrial, incluindo migração de monólito para microserviços.",
        achievements: [
          "Backend em Java (monólito) e NestJS (microserviços), com maior modularidade e escalabilidade.",
          "Módulos frontend em Vue.js com interfaces intuitivas para operações do ERP.",
          "Modelagem de dados e queries complexas em MySQL, alinhadas a regras e processos de negócio.",
          "Migração de arquitetura monolítica para microserviços, melhorando manutenibilidade, deploy e fiabilidade.",
          "Containerização com Docker, padronizando ambientes e deploys.",
          "Colaboração com stakeholders na análise de requisitos e nas soluções, alinhando o sistema à operação.",
          "Boas práticas em testes, qualidade de código e documentação para evolução sustentável.",
        ],
      },
    ],
  },
  projects: {
    title: "Projetos",
    total: "Total",
    introWithToken: "Repositórios pinados no teu perfil GitHub (até seis).",
    introNoToken:
      "Configura GITHUB_TOKEN no ambiente para sincronizar os repositórios pinados.",
    emptyNoToken:
      "Adiciona GITHUB_TOKEN ao .env.local (Personal Access Token) e reinicia o servidor. Define os pins em github.com → perfil → Customize your pins.",
    emptyWithToken:
      "Nenhum repositório pinado visível (ou a API falhou). Pina pelo menos um repositório no GitHub ou verifica o token.",
    github: "GitHub",
    site: "Site",
    coverAlt: (title: string) => `Capa — ${title}`,
  },
  contact: {
    title: "Contato",
    intro:
      "Tens um projeto ou uma questão? Escreve — podemos transformar ideias em entregas.",
    copyEmail: "Copiar email",
    copyPhone: "Copiar telefone",
    phone: "Telefone",
    name: "Nome",
    email: "Email",
    subject: "Assunto",
    message: "Mensagem",
    messagePlaceholder: "Escreve aqui a tua mensagem…",
    sending: "A enviar…",
    send: "Enviar mensagem",
    success: "Mensagem enviada com sucesso.",
    fail: "Não foi possível enviar. Tenta novamente.",
    error: "Ocorreu um erro. Tenta mais tarde.",
    copied: (label: string) => `${label} copiado!`,
  },
  footer: {
    quickLinks: "Links rápidos",
    focus: "Foco",
    connect: "Contato",
    keywords: "Palavras-chave",
  },
  footerNav: {
    about: "Sobre",
    skills: "Competências",
    projects: "Projetos",
  },
  services: {
    backend: "Backend & APIs",
    platform: "Plataforma & entrega",
    publicProjects: "Projetos públicos",
  },
  theme: {
    toggle: "Alternar tema",
    light: "Claro",
    dark: "Escuro",
    system: "Sistema",
  },
  language: {
    label: "Idioma",
    pt: "Português",
    en: "English",
  },
};

const en: Translations = {
  site: {
    role: "Backend Engineer",
    roleSubtitle:
      "Specializing in distributed systems architecture and high-criticality platforms.",
    description:
      "Backend engineer — distributed systems, high-criticality platforms, Java, TypeScript, Node.js, cloud & CI/CD.",
    portfolioSuffix: "Portfolio",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    connect: "Let's connect",
    scroll: "Scroll to explore",
    visitGithub: "Visit GitHub profile",
    visitLinkedin: "Visit LinkedIn profile",
  },
  about: {
    title: "About me",
    body: "Professional with over 5 years of experience developing applications at global scale, with solid expertise in software architecture, security, high availability, and scalability. I focus on deeply understanding business requirements to deliver robust, efficient, and sustainable solutions over the long term.",
  },
  skills: {
    title: "Technical skills",
    subtitle:
      "A focused snapshot of the stack I use for backend, platform, and delivery.",
    showLess: "Show less",
    showAll: (n: number) => `Show all (${n})`,
    footer: "…and many more technologies I keep exploring and mastering.",
  },
  timeline: {
    title: "Professional experience",
    subtitle: "Backend, technical leadership, and large-scale products.",
    jobs: [
      {
        id: 1,
        title: "Senior Backend Engineer | Tech Lead",
        company: "AB InBev · Full-time",
        location: "Remote",
        date: "Jan 2025 – present · 1 yr 4 mos",
        description: "Leading backend development.",
        achievements: [
          "Leading backend development with NestJS and a microservices architecture, ensuring scalable, resilient systems.",
          "Event-driven service design supporting global operations and distributed teams.",
          "Managing deployments and infrastructure on Azure and Docker for reliability and efficiency.",
          "Defining technical and architectural standards and service integration strategies.",
          "Mentoring developers and promoting testing, code quality, and system design practices.",
          "Performance tuning, cost reduction, and continuous improvement of maintainability.",
        ],
      },
      {
        id: 2,
        title: "Back End Developer (AB InBev)",
        company: "act digital · Full-time",
        location: "Caxias do Sul, Brazil · Remote",
        date: "Nov 2023 – Jan 2025 · 1 yr 3 mos",
        description:
          "International coupon management platform — backend development and cloud solutions.",
        achievements: [
          "Backend services with NestJS for a high-scale international application.",
          "Building and maintaining distributed microservices with a focus on reliability and performance.",
          "Azure for deployment, monitoring, and scaling of backend components.",
          "Integration with multiple APIs and external services for global business operations.",
          "Collaboration with multidisciplinary teams across countries and cultures.",
          "Strong testing and code-quality practices and performance optimization for stability and maintainability.",
        ],
      },
      {
        id: 3,
        title: "Software Developer",
        company: "LOHR · Full-time",
        location: "Caxias do Sul, Brazil",
        date: "Nov 2020 – Nov 2023 · 3 yrs 1 mo",
        description:
          "Industrial ERP development and evolution, including monolith-to-microservices migration.",
        achievements: [
          "Backend in Java (monolith) and NestJS (microservices) for modularity and scale.",
          "Vue.js front-end modules with intuitive interfaces for ERP operations.",
          "Data modeling and complex MySQL queries aligned with business rules.",
          "Leading migration from monolith to microservices — maintainability, deployment flexibility, reliability.",
          "Docker-based containerization for consistent environments and deployments.",
          "Working with stakeholders on requirements and solutions aligned with operations.",
          "Testing, code quality, and documentation for sustainable evolution.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    total: "Total",
    introWithToken: "Pinned repositories from your GitHub profile (up to six).",
    introNoToken:
      "Set GITHUB_TOKEN in the environment to sync pinned repositories.",
    emptyNoToken:
      "Add GITHUB_TOKEN to .env.local (Personal Access Token) and restart the server. Pin repos on github.com → your profile → Customize your pins.",
    emptyWithToken:
      "No pinned repositories visible (or the API failed). Pin at least one repo on GitHub or check your token.",
    github: "GitHub",
    site: "Website",
    coverAlt: (title: string) => `Cover — ${title}`,
  },
  contact: {
    title: "Get in touch",
    intro:
      "Have a project or a question? Reach out — we can turn ideas into delivery.",
    copyEmail: "Copy email",
    copyPhone: "Copy phone",
    phone: "Phone",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    messagePlaceholder: "Your message…",
    sending: "Sending…",
    send: "Send message",
    success: "Message sent successfully.",
    fail: "Failed to send. Please try again.",
    error: "Something went wrong. Try again later.",
    copied: (label: string) => `${label} copied!`,
  },
  footer: {
    quickLinks: "Quick links",
    focus: "Focus",
    connect: "Connect",
    keywords: "Keywords",
  },
  footerNav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
  },
  services: {
    backend: "Backend & APIs",
    platform: "Platform & delivery",
    publicProjects: "Public projects",
  },
  theme: {
    toggle: "Toggle theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  language: {
    label: "Language",
    pt: "Português",
    en: "English",
  },
};

export const translations: Record<Locale, Translations> = { pt, en };

export function getT(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}
