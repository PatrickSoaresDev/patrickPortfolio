/**
 * Repositórios **pinados** no perfil GitHub (GraphQL). A REST API não expõe pins.
 *
 * Define `GITHUB_TOKEN` no ambiente (PAT clássico ou fine-grained com acesso de leitura
 * a repositórios públicos). Sem token, devolve lista vazia.
 *
 * https://docs.github.com/en/graphql/reference/objects#repository
 */

export type PortfolioRepo = {
  title: string
  description: string
  github: string
  live: string | null
  tags: string[]
  language: string | null
}

const PINNED_QUERY = `
  query PinnedRepos($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            isArchived
            primaryLanguage {
              name
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

type GraphQLRepoNode = {
  name: string
  description: string | null
  url: string
  homepageUrl: string | null
  isArchived: boolean
  primaryLanguage: { name: string } | null
  repositoryTopics: {
    nodes: Array<{ topic: { name: string } }>
  }
}

function formatRepoTitle(name: string): string {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

function normalizeHomepage(h: string | null): string | null {
  if (!h || !h.trim()) return null
  const t = h.trim()
  if (t.startsWith('http://') || t.startsWith('https://')) return t
  return `https://${t}`
}

async function fetchPinnedReposGraphQL(
  githubUsername: string,
  token: string,
): Promise<PortfolioRepo[]> {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'patrick-portfolio',
    },
    body: JSON.stringify({
      query: PINNED_QUERY,
      variables: { login: githubUsername },
    }),
    next: { revalidate: 3600 },
  })

  const json = (await res.json()) as {
    data?: {
      user: {
        pinnedItems: { nodes: (GraphQLRepoNode | null)[] }
      } | null
    }
    errors?: { message: string }[]
  }

  if (json.errors?.length) {
    throw new Error(`GitHub GraphQL: ${json.errors.map((e) => e.message).join('; ')}`)
  }

  const nodes = json.data?.user?.pinnedItems?.nodes ?? []
  const repos = nodes.filter((n): n is GraphQLRepoNode => n != null && !n.isArchived)

  return repos.map((r) => {
    const topicNames = r.repositoryTopics.nodes.map((n) => n.topic.name).filter(Boolean)
    const lang = r.primaryLanguage?.name ?? null
    const tags =
      topicNames.length > 0 ? topicNames.slice(0, 8) : lang ? [lang] : ['GitHub']

    return {
      title: formatRepoTitle(r.name),
      description: r.description?.trim() || 'Repositório público no GitHub.',
      github: r.url,
      live: normalizeHomepage(r.homepageUrl),
      tags,
      language: lang,
    }
  })
}

/**
 * Só repositórios **pinados** no perfil. Requer `GITHUB_TOKEN`.
 */
export async function fetchPortfolioRepos(githubUsername: string): Promise<PortfolioRepo[]> {
  const token = process.env.GITHUB_TOKEN?.trim()
  if (!token) {
    return []
  }
  return fetchPinnedReposGraphQL(githubUsername, token)
}
