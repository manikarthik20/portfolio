import { Download, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { LinkedInIcon } from "@/components/brand-icons";
import { getResumeDownloadFilename, siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200/80 bg-gradient-to-b from-violet-600 via-fuchsia-600 to-violet-700 py-20 text-white dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-100">Contact</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight">Let&apos;s connect</p>
        <p className="mt-3 max-w-xl text-violet-100">
          Reach out for roles, collaborations, or a conversation about backend architecture and delivery.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {"phoneTel" in siteConfig && siteConfig.phoneTel ? (
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {siteConfig.phone}
            </a>
          ) : null}
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-violet-700 shadow-lg transition hover:bg-violet-50"
          >
            <Mail className="h-5 w-5" aria-hidden />
            {siteConfig.email}
          </a>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </Link>
          <a
            href={siteConfig.resumeUrl}
            download={getResumeDownloadFilename()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <Download className="h-5 w-5" aria-hidden />
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
