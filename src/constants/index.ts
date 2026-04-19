export interface Skill {
  skill_name: string
  Image: string
  width: number
  height: number
}

/**
 * Ordem: núcleo (TS → Argo), restante da stack, front/utilitários, Java/Go/C# no fim.
 */
export const skills: Skill[] = [
  { skill_name: 'TypeScript', Image: '/ts.png', width: 80, height: 80 },
  { skill_name: 'JavaScript', Image: '/js.png', width: 65, height: 65 },
  { skill_name: 'Node.js', Image: '/node-js.png', width: 80, height: 80 },
  { skill_name: 'NestJS', Image: '/nestjs.svg', width: 40, height: 40 },
  { skill_name: 'Azure', Image: '/azure.svg', width: 70, height: 70 },
  { skill_name: 'GraphQL', Image: '/graphql.png', width: 70, height: 70 },
  { skill_name: 'MongoDB', Image: '/mongodb.svg', width: 70, height: 70 },
  { skill_name: 'Redis', Image: '/redis.svg', width: 70, height: 70 },
  { skill_name: 'Git', Image: '/git.svg', width: 70, height: 70 },
  { skill_name: 'Docker', Image: '/docker.webp', width: 70, height: 70 },
  { skill_name: 'Argo CD', Image: '/argocd.svg', width: 80, height: 80 },

  { skill_name: 'REST / OpenAPI', Image: '/swagger.svg', width: 40, height: 40 },
  { skill_name: 'PostgreSQL', Image: '/postger.png', width: 70, height: 70 },
  { skill_name: 'MySQL', Image: '/mysql.png', width: 70, height: 70 },
  { skill_name: 'SQLite', Image: '/sqlite.svg', width: 40, height: 40 },
  { skill_name: 'RabbitMQ', Image: '/rabbitmq.svg', width: 70, height: 70 },
  { skill_name: 'Kubernetes', Image: '/kubernetes.png', width: 50, height: 50 },
  { skill_name: 'Terraform', Image: '/terraform.png', width: 80, height: 80 },
  { skill_name: 'GitLab', Image: '/gitlab.png', width: 80, height: 80 },
  { skill_name: 'GitHub Actions', Image: '/githubactions.svg', width: 80, height: 80 },
  { skill_name: 'Spring Boot', Image: '/spring-boot.png', width: 70, height: 70 },
  { skill_name: 'Express', Image: '/express.svg', width: 40, height: 40 },

  { skill_name: 'HTML', Image: '/html.png', width: 70, height: 70 },
  { skill_name: 'CSS', Image: '/css3.svg', width: 40, height: 40 },
  { skill_name: 'Tailwind CSS', Image: '/tailwind.png', width: 70, height: 70 },
  { skill_name: 'Python', Image: '/python.svg', width: 70, height: 70 },
  { skill_name: 'New Relic', Image: '/newrelic.svg', width: 40, height: 40 },

  { skill_name: 'Java', Image: '/java.svg', width: 40, height: 40 },
  { skill_name: 'Go', Image: '/go.svg', width: 40, height: 40 },
  { skill_name: 'C#', Image: '/csharp.svg', width: 40, height: 40 },
]
