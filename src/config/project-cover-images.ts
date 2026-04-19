/**
 * Imagens de capa opcionais por repositório (chave = nome do repo no GitHub).
 * Usado na secção Projetos quando o projeto vem da API sem imagem própria.
 */
export const projectCoverImages: Record<string, string> = {
  'event-driven-order-platform':
    'https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2022/08/29110239/EE_EDA_Confluent-Blog-Asset-1775x760-1-1200x514-1.png',
}

export function getProjectCoverImageUrl(githubRepoUrl: string): string | null {
  try {
    const path = new URL(githubRepoUrl).pathname.replace(/\/$/, '')
    const repoName = path.split('/').pop()
    if (!repoName) return null
    return projectCoverImages[repoName] ?? null
  } catch {
    return null
  }
}
