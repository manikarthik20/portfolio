import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-200/80 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          Projects
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Selected work at Hitachi MGRM
        </p>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
          Two production systems I contributed to—one classic Spring monolith, and one polyglot stack with REST APIs,
          multitenant Java services, and async report generation.
        </p>
        <ul className="mt-12 grid gap-8 lg:grid-cols-2">
          {siteConfig.projects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 transition hover:border-violet-200/80 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:border-violet-500/30"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-violet-400 hover:text-violet-700 dark:border-slate-600 dark:text-slate-200 dark:hover:border-violet-500 dark:hover:text-violet-300"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Discuss this project
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
