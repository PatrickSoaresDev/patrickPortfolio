/**
 * Dados do teu site — ajusta aqui e os componentes puxam da mesma fonte.
 * URL pública: define NEXT_PUBLIC_SITE_URL no .env (ex.: https://teu-dominio.vercel.app)
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '')

export const site = {
  name: 'Patrick Soares',
  /** Cargo principal no hero */
  role: 'Backend Engineer',
  /** Uma linha abaixo do cargo (opcional) */
  roleSubtitle: 'Arquitetura & integração entre squads',
  /** Parágrafo curto no hero */
  heroDescription:
    'APIs e serviços com domínio e fronteiras claras — contratos, eventos e entrega contínua quando o contexto pede.',
  email: 'contato@patricksoares.dev',
  /** Telefone opcional — se null, a linha de telefone no contacto não aparece */
  phone: null as string | null,
  location: 'Caxias do Sul, RS · Brasil',
  githubUser: 'PatrickSoaresDev',
  githubUrl: 'https://github.com/PatrickSoaresDev',
  linkedinUrl: 'https://www.linkedin.com/in/patricksoaresdev/',
  /** Meta description */
  description:
    'Backend engineer portfolio — APIs, plataforma, integração entre squads. Java, Node.js, cloud e CI/CD.',
  keywords: [
    'backend engineer',
    'Patrick Soares',
    'portfolio',
    'APIs',
    'Java',
    'Node.js',
    'PostgreSQL',
    'cloud',
    'CI/CD',
    'Caxias do Sul',
  ],
} as const
