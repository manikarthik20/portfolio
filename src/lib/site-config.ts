/** Update email, LinkedIn, phone, and resume path as needed. */
export const siteConfig = {
  name: "Manikarthik Chandankeri",
  role: "Full-Stack Developer",
  /** Shown on generated PDF header (portfolio role may differ). */
  resumeHeadlineRole: "Full-Stack Developer",
  resumeHeadlineStack: "Java | Spring Boot | NestJS | React | Next.js | React Native",
  /** Set your number; hidden in PDF / contact if empty. */
  phone: "+91 93981 24090",
  /** Used for tel: links (digits with country code). */
  phoneTel: "+919398124090",
  /** Optional; omit line in PDF if empty (no public GitHub is fine). */
  githubUrl: "",
  /** Public portfolio site URL (e.g. "https://yourname.dev"). Shown on resume + contact if set. */
  portfolioUrl: "https://portfolio-yqtr.vercel.app/",
  tagline:
    "Building RESTful APIs, responsive web apps, and scalable backends—from monoliths to multitenant services and async workloads.",
  techSubtitle: "Java · Spring Boot · NestJS · Node.js · React · Next.js · React Native",
  experienceYears: "4.8",
  location: "Hyderabad, India",
  email: "manikarthik9902@gmail.com",
  linkedin: "https://www.linkedin.com/in/mani-karthik-ab3428211/",
  /** Generated PDF download (see /api/resume). Legacy static file path if you host a manual PDF. */
  resumeUrl: "/api/resume",
  /**
   * PDF download filename suffix. Empty = derive from `role` (e.g. Manikarthik-Chandankeri-Full-Stack-Developer.pdf).
   * Set e.g. "Backend-Developer" to force that suffix while keeping a different `role` on the site.
   */
  resumeDownloadFilenameRole: "",
  education: {
    degree: "B.Sc — MPCS (Mathematics, Physics, Computer Science)",
    institution: "Osmania University — Sindhu Degree College, Tandur, Telangana",
    period: "Aug 2017 – Jan 2021",
  },
  projects: [
    {
      title: "CES (College Expert System)",
      /** Optional screenshot in /public (e.g. "/projects/ces.png"); card hides the image if empty. */
      image: "",
      description:
        "College Expert System at Hitachi MGRM—a monolithic Java Spring Boot application using JSP for server-rendered views. Owned end-to-end features across domain logic, persistence, and the presentation layer within a single deployable stack. Recently integrated KOHA, an open-source integrated library system (ILS), over its REST API—syncing students and staff as library patrons and driving catalog, circulation, and fines/overdue reporting from within CES.",
      tech: ["Java", "Spring Boot", "JSP", "Monolith", "KOHA", "REST API"],
      resumeBullets: [
        "Maintained College Expert System as a monolithic Java Spring Boot app with JSP-based server-rendered views at Hitachi MGRM.",
        "Owned features across domain logic, persistence, and presentation within one deployable stack.",
        "Integrated KOHA (open-source ILS) over its REST API—syncing students and staff as library patrons and surfacing catalog, circulation, and fines/overdue reporting inside CES.",
        "Collaborated on a stable release cadence with clear layering between services, data access, and UI templates.",
      ],
    },
    {
      title: "SES (School Expert System)",
      image: "",
      description:
        "School Expert System spanning Java Spring Boot, NestJS, and a Next.js frontend. Built and integrated REST APIs across services; implemented multitenant behavior with tenant filters, tenant context, and a dedicated JAR for tenant resolution. Delivered the student Scholarship module end-to-end, owning both the REST APIs (Spring Boot/NestJS) and the SES UI (Next.js + Mantine, Redux/redux-saga, React Query, React Hook Form). Moved report generation off the slow synchronous in-process JasperReports (Java) path onto a separate async NestJS report server—first on pg-boss, later migrated to BullMQ (Redis)—that streams query results straight to file and renders the PDF documents with PDFKit instead of blocking user-facing APIs.",
      tech: [
        "Spring Boot",
        "NestJS",
        "Next.js",
        "Mantine",
        "React Query",
        "PostgreSQL",
        "PG-Boss",
        "BullMQ",
        "JasperReports",
        "PDFKit",
        "Multitenancy",
      ],
      resumeBullets: [
        "Built School Expert System across Spring Boot, NestJS, and Next.js with REST APIs spanning backend and frontend integration.",
        "Implemented multitenant isolation using tenant filters, tenant context, and a dedicated JAR for tenant resolution.",
        "Owned the student Scholarship module across the Spring Boot/NestJS backend and the SES UI (Next.js, Mantine, Redux/redux-saga, React Query, React Hook Form).",
        "Re-architected reporting off the synchronous in-process JasperReports (Java) path onto an async NestJS queue—first pg-boss, then migrated to BullMQ (Redis)—to keep user-facing APIs responsive.",
        "Streamed large exports row-by-row from Postgres to file with a concurrency-limited worker, rendering the PDF reports with PDFKit and eliminating the whole-result in-memory buffering and request-thread blocking of the legacy Jasper path.",
      ],
    },
    {
      title: "HES — Pharmacy Module (Hospital Enterprise System)",
      image: "",
      description:
        "Pharmacy module within MStar HES, an AI-native Hospital Enterprise System (HIS/EMR), owned end-to-end across backend and frontend. Built RPC APIs on a Fastify + ConnectRPC (protobuf) backend with Drizzle ORM over PostgreSQL, authentication via better-auth, and fine-grained authorization with CASL. Offloaded long-running work to background jobs on graphile-worker. Delivered the pharmacy web experience on TanStack Router/Query/Form with Tailwind, sharing type-safe RPC contracts consumed by both web and mobile clients.",
      tech: [
        "Fastify",
        "ConnectRPC",
        "Protobuf",
        "Drizzle ORM",
        "PostgreSQL",
        "better-auth",
        "CASL",
        "TanStack Router",
        "Tailwind CSS",
      ],
      resumeBullets: [
        "Built the Pharmacy module for MStar HES, an AI-native Hospital Enterprise System, across backend and web frontend.",
        "Developed RPC APIs on a Fastify + ConnectRPC (protobuf) backend with Drizzle ORM over PostgreSQL.",
        "Implemented authentication with better-auth and fine-grained, role-based authorization using CASL abilities across pharmacy handlers.",
        "Delivered the pharmacy web UI on TanStack Router/Query/Form with Tailwind, sharing type-safe RPC contracts across web and mobile clients.",
        "Offloaded long-running work to background jobs via graphile-worker to keep user-facing APIs responsive.",
      ],
    },
    {
      title: "Patient Portal — Assam Patient Experience Portal",
      image: "",
      description:
        "Patient-facing application for MStar HES—the Assam Patient Experience Portal—giving patients one account across seven medical-college hospitals for appointment booking, live queue tokens, results, prescriptions, payments, and family profiles. Owned it end-to-end: UI/UX, the Expo / React Native mobile app (Expo Router) and web PWA, and the patient-scoped backend APIs (Fastify + ConnectRPC, Drizzle ORM, better-auth). Includes UHID + OTP login.",
      tech: [
        "UI/UX",
        "Expo",
        "React Native",
        "Expo Router",
        "PWA",
        "Fastify",
        "ConnectRPC",
        "Drizzle ORM",
        "better-auth",
        "TanStack Query",
      ],
      resumeBullets: [
        "Owned the Assam Patient Experience Portal end-to-end—UI/UX, the Expo / React Native mobile app and web PWA, and the patient-scoped backend APIs.",
        "Built the mobile app (Expo / React Native, Expo Router) covering booking, live queue tokens, results, prescriptions, payments, and family profiles across seven hospitals.",
        "Developed patient-scoped RPC APIs (Fastify + ConnectRPC, Drizzle ORM) and UHID + OTP authentication with better-auth.",
      ],
    },
  ],
  jobs: [
    {
      company: "Hitachi MGRM",
      location: "Hyderabad, India",
      role: "Full-Stack Developer",
      period: "Feb 2023 – Present",
      /** Optional clarifying line under the company; omitted if empty. */
      note: "On client engagement via OJAS Innovative Technology Pvt. Ltd. (Feb 2023 – Apr 2025); joined Hitachi MGRM permanently in Apr 2025.",
      bullets: [
        "Delivered the HES pharmacy module and the Assam patient portal—one account across 7 hospitals—end-to-end: backend APIs, web, and React Native mobile.",
        "Built the multitenant School Expert System (SES) and its student Scholarship module across Spring Boot, NestJS, and Next.js, including an async NestJS report pipeline migrated from pg-boss to BullMQ (Redis).",
        "Build and maintain full-stack applications across Java/Spring Boot, NestJS, React, Next.js, and React Native.",
        "Design REST/RPC APIs with clear contracts and Postman-validated client–server integrations.",
        "Use AI-assisted tooling (Cursor, Claude) day-to-day for scaffolding, refactoring, and test coverage on the HES modules; mentor junior developers through code reviews.",
      ],
    },
    {
      company: "OJAS Innovative Technology Pvt. Ltd.",
      location: "Hyderabad, India",
      role: "Java Developer",
      period: "Nov 2021 – Feb 2023",
      note: "",
      bullets: [
        "Contributed to a Client Relationship Management (CRM) system using Core Java, JDBC, Spring Data JPA, Hibernate, and MySQL.",
        "Built and consumed RESTful APIs for client–server integration and tuned JPA/Hibernate data access.",
        "Worked across the SDLC: design, development, testing, and deployment.",
      ],
    },
  ],
} as const;

/** First letters of the first two name parts (e.g. "Manikarthik Chandankeri" → "MC"). */
export function getNameInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

/** Safe ASCII filename for Content-Disposition when downloading the generated resume PDF. */
export function getResumeDownloadFilename(): string {
  const nameSlug = siteConfig.name.replace(/\s+/g, "-");
  const custom = siteConfig.resumeDownloadFilenameRole.trim();
  const roleSlug = custom
    ? custom.replace(/\s+/g, "-")
    : siteConfig.role.replace(/\s+/g, "-");
  return `${nameSlug}-${roleSlug}.pdf`;
}
