import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          프로젝트
        </h2>
        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col gap-3 rounded-xl border border-black/[.08] p-6 transition-colors hover:border-indigo-400 dark:border-white/[.12] dark:hover:border-indigo-500"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-indigo-500 dark:text-indigo-400">
                  {project.period}
                </p>
              </div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              {project.tags && project.tags.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              {(project.link || project.repo) && (
                <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      사이트 보기 →
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:underline dark:text-zinc-400"
                    >
                      코드 보기 →
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
