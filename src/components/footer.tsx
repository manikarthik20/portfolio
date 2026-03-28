import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {year} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <Link href="#top" className="text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400">
            Back to top
          </Link>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
