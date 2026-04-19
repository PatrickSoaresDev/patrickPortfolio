'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { FC, JSX, useMemo } from 'react'
import Image from 'next/image'
import { Timeline as TimelineComponent } from '@/components/ui/timeline'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

/** Ordem fixa: 1º emprego = AB InBev, 2º = act digital, 3º = LOHR (mais fiável que `job.id`). */
const JOB_LOGOS = [
  '/experience/ab-inbev.svg',
  '/experience/act-digital.webp',
  '/experience/lohr.jpg',
] as const

function ExperienceLogo({ src, title }: { src: string; title: string }) {
  const lightTile = src.includes('ab-inbev') || src.includes('lohr')
  return (
    <span
      className={cn(
        'inline-flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/60 p-2 shadow-sm',
        lightTile
          ? 'bg-white dark:bg-white'
          : 'bg-muted/40 dark:bg-muted/30',
      )}
    >
      <img
        src={src}
        alt=""
        title={title}
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full object-contain"
      />
    </span>
  )
}

export interface TimelineItem {
  id: number
  type: 'work' | 'project'
  title: string
  company: string
  location: string
  date: string
  imageURL: string
  description: string
  achievements: string[]
  icon: JSX.Element
  companyIcon: JSX.Element
}

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="space-y-6" key={index}>
    <div className="flex items-center gap-4">
      {item.type === 'work' && (
        <ExperienceLogo key={item.imageURL} src={item.imageURL} title={item.company} />
      )}
      <div>
        <h3 title={item.title} className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.company} • {item.location}
        </p>
        <p className="text-sm text-muted-foreground">{item.date}</p>
      </div>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach) => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>

    {item.type === 'project' && (
      <div className="w-full mt-4">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
          <Image
            src={item.imageURL}
            alt=""
            className="object-contain"
            loading="lazy"
            fill
          />
        </div>
      </div>
    )}
  </div>
)

const Timeline: FC = () => {
  const { t } = useLocale()

  const timelineData: TimelineItem[] = useMemo(
    () =>
      t.timeline.jobs.map((job, index) => ({
        id: job.id,
        type: 'work' as const,
        title: job.title,
        company: job.company,
        location: job.location,
        date: job.date,
        imageURL: JOB_LOGOS[index] ?? JOB_LOGOS[0],
        description: job.description,
        achievements: job.achievements,
        icon: <FaCode className="w-6 h-6 text-primary" />,
        companyIcon: <FaLaptopCode className="w-8 h-8 text-teal-500" />,
      })),
    [t],
  )

  const timelineContent = timelineData.map((item, index) => ({
    title: item.date,
    content: (
      <TimelineElement key={`${item.id}-${index}`} item={item} index={index} />
    ),
  }))

  return (
    <section id="experience" className="relative py-20 text-foreground transition-colors overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-teal-500 bg-clip-text text-transparent mb-4">
            {t.timeline.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.timeline.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          <TimelineComponent data={timelineContent} />
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
