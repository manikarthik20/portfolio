import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { LinkedInIcon } from "@/components/brand-icons";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-violet-400/30 blur-3xl dark:bg-violet-600/20" />
        <div className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-fuchsia-400/25 blur-3xl dark:bg-fuchsia-600/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(248,250,252,0.9))] dark:bg-[linear-gradient(to_bottom,transparent,rgb(2,6,23,0.92))]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50/80 px-4 py-1.5 text-sm font-medium text-violet-800 shadow-sm dark:border-violet-500/30 dark:bg-violet-950/50 dark:text-violet-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
            </span>
            {siteConfig.experienceYears}+ years · {siteConfig.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-violet-400">
              {siteConfig.name}
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
            {siteConfig.role}{" "}
            <span className="font-normal text-slate-500 dark:text-slate-400">
              ({siteConfig.techSubtitle})
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {siteConfig.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:shadow-xl hover:shadow-violet-500/40"
            >
              View Projects
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:border-violet-300 hover:bg-white dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-violet-500"
            >
              <Mail className="h-5 w-5" aria-hidden />
              Contact
            </a>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
