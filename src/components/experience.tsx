import { Gauge, Network, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  {
    icon: Network,
    title: "REST APIs & integration",
    body: "Designing RESTful services, validating contracts, and using Postman so clients and backends exchange data reliably.",
  },
  {
    icon: Zap,
    title: "Async & reporting",
    body: "Queue-backed workloads and dedicated report services when synchronous exports or Jasper-heavy paths hurt UX.",
  },
  {
    icon: Gauge,
    title: "Full-stack delivery",
    body: "Spring and Nest backends with React or Next.js UIs—auth, persistence tuning, and performance-aware features.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          Experience
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {siteConfig.experienceYears} years in software engineering
        </p>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          I&apos;ve worked across the stack in Hyderabad—from Java CRM systems to full-stack product work at Hitachi MGRM.
          Recent focus includes{" "}
          <strong className="text-slate-900 dark:text-white">REST API development</strong>,{" "}
          <strong className="text-slate-900 dark:text-white">Spring Boot and NestJS</strong> services,{" "}
          <strong className="text-slate-900 dark:text-white">React and Next.js</strong> front ends, plus{" "}
          <strong className="text-slate-900 dark:text-white">async report pipelines</strong> and{" "}
          <strong className="text-slate-900 dark:text-white">multitenant</strong> Java backends.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <li
                key={h.title}
                className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-md dark:border-slate-700 dark:from-slate-900 dark:to-slate-950"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{h.body}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 space-y-10">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Roles</h3>
          <ol className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-700">
            {siteConfig.jobs.map((job) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute -left-[39px] mt-1.5 h-3 w-3 rounded-full border-2 border-violet-600 bg-white dark:border-violet-400 dark:bg-slate-950" />
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{job.role}</p>
                    <p className="text-sm text-violet-600 dark:text-violet-400">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{job.period}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
