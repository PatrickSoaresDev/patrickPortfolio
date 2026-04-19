export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const site = {
  name: "Patrick Soares",
  email: "contato@patricksoares.dev",
  phone: null as string | null,
  location: "Caxias do Sul, RS · Brasil",
  githubUser: "PatrickSoaresDev",
  githubUrl: "https://github.com/PatrickSoaresDev",
  linkedinUrl: "https://www.linkedin.com/in/patricksoaresdev/",
  keywords: [
    "backend engineer",
    "Patrick Soares",
    "portfolio",
    "APIs",
    "Java",
    "Node.js",
    "PostgreSQL",
    "cloud",
    "CI/CD",
    "Caxias do Sul",
  ],
} as const;
