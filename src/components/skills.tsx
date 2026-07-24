import { Code2, Database, Layers, Monitor, Smartphone, Sparkles, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Layers,
    items: ["Spring Boot", "NestJS", "Node.js", "Fastify", "ConnectRPC"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: ["React", "Next.js", "TanStack Query", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Expo Router"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["PostgreSQL", "Drizzle ORM", "MySQL", "Oracle"],
  },
  {
    title: "Tools & Auth",
    icon: Wrench,
    items: ["Git", "GitLab", "Postman", "better-auth", "PG-Boss"],
  },
  {
    title: "AI-assisted dev",
    icon: Sparkles,
    items: ["Cursor", "Claude"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          Skills
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Stack I use in production
        </p>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
          Languages, frameworks, data stores, and tooling from recent full-stack and Java roles.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <li
                key={cat.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/40 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:border-violet-500/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 text-violet-700 dark:text-violet-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cat.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
