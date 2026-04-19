'use client'

import { motion } from 'framer-motion'
import { useLocale } from '@/contexts/LocaleContext'

export function About() {
  const { t } = useLocale()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-16 border-t border-border/40"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-teal-500 bg-clip-text text-transparent mb-8 text-center sm:text-left"
        >
          {t.about.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty text-center sm:text-left"
        >
          {t.about.body}
        </motion.p>
      </div>
    </section>
  )
}

export default About
