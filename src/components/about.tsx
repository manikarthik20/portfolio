import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-200/80 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          About me
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Building reliable backends that scale
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I&apos;m <strong className="text-slate-900 dark:text-white">{siteConfig.name}</strong>, a{" "}
              {siteConfig.role.toLowerCase()} with{" "}
              <strong className="text-slate-900 dark:text-white">
                {siteConfig.experienceYears} years
              </strong>{" "}
              of experience shipping production systems. I focus on{" "}
              <strong className="text-slate-900 dark:text-white">Java</strong> and{" "}
              <strong className="text-slate-900 dark:text-white">Spring Boot</strong>,{" "}
              <strong className="text-slate-900 dark:text-white">NestJS</strong> and{" "}
              <strong className="text-slate-900 dark:text-white">Node.js</strong> on the server, and{" "}
              <strong className="text-slate-900 dark:text-white">React</strong> and{" "}
              <strong className="text-slate-900 dark:text-white">Next.js</strong> on the UI—so APIs and front ends stay
              maintainable as teams and traffic grow.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Most of my day goes into{" "}
              <strong className="text-slate-900 dark:text-white">REST API design and delivery</strong>—clear contracts,
              validation, and Postman-driven testing so clients and services integrate cleanly. I also lean on{" "}
              <strong className="text-slate-900 dark:text-white">async processing</strong> and queues where work should
              not block the user,{" "}
              <strong className="text-slate-900 dark:text-white">report generation</strong> pipelines when exports are
              heavy, and{" "}
              <strong className="text-slate-900 dark:text-white">backend architecture</strong>—domains, observability,
              and data integrity—so features ship safely and quickly.
            </p>
          </div>
          <aside className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">Role</dt>
                <dd className="mt-1 font-semibold text-slate-900 dark:text-white">{siteConfig.role}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">Focus</dt>
                <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
                  REST APIs, full-stack delivery, data layer
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">Location</dt>
                <dd className="mt-1 font-semibold text-slate-900 dark:text-white">{siteConfig.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
