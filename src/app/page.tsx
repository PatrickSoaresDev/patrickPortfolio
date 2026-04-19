import About from '@/components/main/About'
import ContactUs from '@/components/main/ContactUs'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import { fetchPortfolioRepos } from '@/lib/github-repos'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'

import { site, siteUrl } from '@/config/site'
import { translations } from '@/config/translations'

const seo = translations.en.site

export const metadata: Metadata = {
  title: seo.role,
  description: seo.description,
  alternates: {
    canonical: siteUrl,
  },
}

export default async function Home() {
  const hasGithubToken = Boolean(process.env.GITHUB_TOKEN?.trim())
  let repos: Awaited<ReturnType<typeof fetchPortfolioRepos>> = []
  try {
    repos = await fetchPortfolioRepos(site.githubUser)
  } catch {
    repos = []
  }

  return (
    <div className="min-h-screen min-w-screen" >
      {/* Hidden SEO content for better indexing */}
      <div className="sr-only">
        <h1>
          {site.name} — {seo.role} {seo.portfolioSuffix}
        </h1>
        <p>{seo.description}</p>
      </div>

      <Hero />
      <About />
      <Skills />
      <Timeline />
      {/* <CertificationsSection /> */}
      <Projects repos={repos} hasGithubToken={hasGithubToken} />
      <ContactUs />
      <Toaster position="bottom-right" />
    </div>
  )
}
