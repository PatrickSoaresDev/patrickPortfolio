import { MetadataRoute } from 'next'
import { siteUrl } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/cloud-engineer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/devops-engineer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/devops-best-practices`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}