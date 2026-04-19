import { Analytics } from '@vercel/analytics/next'
import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/contexts/LocaleContext'
import { site, siteUrl } from '@/config/site'
import { translations } from '@/config/translations'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const seo = translations.pt.site

export const metadata: Metadata = {
  title: `${site.name} — ${seo.role} | ${seo.portfolioSuffix}`,
  description: seo.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    title: `${site.name} — ${seo.role}`,
    description: seo.description,
    siteName: `${site.name} — ${seo.portfolioSuffix}`,
    images: [
      {
        url: `${siteUrl}/profile-pic.png`,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${seo.role}`,
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: seo.role,
    description: seo.description,
    url: siteUrl,
    image: `${siteUrl}/profile-pic.jpg`,
    sameAs: [site.githubUrl, site.linkedinUrl],
    knowsAbout: [
      'Backend development',
      'REST APIs',
      'Java',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Domain-driven design',
    ],
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f766e" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#115e59" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <AnalyticsProvider>
              <Navbar />
              <main role="main">{children}</main>
              <Footer />
            </AnalyticsProvider>
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
