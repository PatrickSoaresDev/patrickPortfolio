"use client";

import { getProjectCoverImageUrl } from "@/config/project-cover-images";
import { useLocale } from "@/contexts/LocaleContext";
import type { PortfolioRepo } from "@/lib/github-repos";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const LiveIndicator = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
);

function repoHeaderGradient(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++)
    h = (h + name.charCodeAt(i) * (i + 1)) % 360;
  return `linear-gradient(135deg, oklch(0.45 0.12 ${h}) 0%, oklch(0.35 0.08 ${(h + 40) % 360}) 100%)`;
}

type ProjectsProps = {
  repos: PortfolioRepo[];
  hasGithubToken: boolean;
};

const Projects = ({ repos, hasGithubToken }: ProjectsProps) => {
  const { t } = useLocale();
  let lastColSpan2Index = 0;
  const isColSpan2 = (index: number) => {
    if (index === lastColSpan2Index + 3) {
      lastColSpan2Index = index;
      return true;
    }
    return false;
  };

  const total = repos.length;

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-16 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-80 right-24 w-20 h-20 bg-teal-500/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-60 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-teal-400/10 rounded-lg rotate-12 float-animation"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-teal-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-teal-400/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-teal-500 bg-clip-text text-transparent mb-4">
            {t.projects.title}
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            {t.projects.total}: {total}
          </p>
        </motion.div>
      </div>

      {total === 0 ? (
        <div className="container max-w-xl mx-auto px-4 text-center text-muted-foreground py-8 text-sm leading-relaxed">
          {!hasGithubToken ? (
            <>{t.projects.emptyNoToken}</>
          ) : (
            <>{t.projects.emptyWithToken}</>
          )}
        </div>
      ) : (
        <BentoGrid className="max-w-6xl mx-auto [@media(max-width:425px)]:grid-cols-1">
          {repos.map((project, i) => {
            const cover = getProjectCoverImageUrl(project.github);
            return (
              <div
                key={project.github}
                className={`relative ${isColSpan2(i) ? "md:col-span-2" : ""}`}
              >
                <BentoGridItem
                  title={project.title}
                  description={
                    <div className="space-y-2 text-sm text-foreground">
                      <p>{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] px-2 py-0 rounded-full"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 pt-1">
                        <Badge
                          asChild
                          variant="secondary"
                          className="gap-1 rounded-full"
                        >
                          <a
                            title={`${t.projects.github} — ${project.title}`}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <FaGithub className="size-3" />
                            {t.projects.github}
                          </a>
                        </Badge>
                        {project.live && (
                          <a
                            title={`${t.projects.site} — ${project.title}`}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-0.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            <LiveIndicator />
                            {t.projects.site}
                          </a>
                        )}
                      </div>
                    </div>
                  }
                  header={
                    <div
                      className="relative w-full [@media(max-width:425px)]:min-h-[9rem] min-h-[6rem] rounded-xl overflow-hidden flex items-center justify-center"
                      style={
                        cover
                          ? undefined
                          : { background: repoHeaderGradient(project.title) }
                      }
                    >
                      {cover ? (
                        <Image
                          src={cover}
                          alt={t.projects.coverAlt(project.title)}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          fill
                          priority={i < 2}
                        />
                      ) : (
                        <FaGithub
                          className="size-14 text-white/90 drop-shadow-md relative z-[1]"
                          aria-hidden
                        />
                      )}
                    </div>
                  }
                />
              </div>
            );
          })}
        </BentoGrid>
      )}
    </section>
  );
};

export default Projects;
