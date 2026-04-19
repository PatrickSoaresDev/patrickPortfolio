import ContactUs from '@/components/main/ContactUs'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import { fetchPortfolioRepos } from '@/lib/github-repos'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
import CertificationsSection from '@/components/main/Certifications'
import { AnalyticsDebug } from '@/components/analytics/AnalyticsDebug'
import InteractiveWrapper from '@/components/main/InteractiveWrapper'

import { site, siteUrl } from '@/config/site'
import { translations } from '@/config/translations'

const seo = translations.pt.site

export const metadata: Metadata = {
  title: `${site.name} — ${seo.role} | ${seo.portfolioSuffix}`,
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

      <InteractiveWrapper>
        <Hero />
        <Skills />
        <Timeline />
        {/* <CertificationsSection /> */}
        <Projects repos={repos} hasGithubToken={hasGithubToken} />
        <ContactUs />
        <Toaster position="bottom-right" />
      </InteractiveWrapper>
      
      {/* Temporary test components for analytics - remove in production */}
      {/* <AnalyticsDebug /> */}
    </div>
  )
}
