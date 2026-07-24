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
        "College Expert System at Hitachi MGRM—a monolithic Java Spring Boot application using JSP for server-rendered views. Owned end-to-end features across domain logic, persistence, and the presentation layer within a single deployable stack.",
      tech: ["Java", "Spring Boot", "JSP", "Monolith"],
      resumeBullets: [
        "Maintained College Expert System as a monolithic Java Spring Boot app with JSP-based server-rendered views at Hitachi MGRM.",
        "Owned features across domain logic, persistence, and presentation within one deployable stack.",
        "Collaborated on a stable release cadence with clear layering between services, data access, and UI templates.",
      ],
    },
    {
      title: "SES (School Expert System)",
      image: "",
      description:
        "School Expert System spanning Java Spring Boot, NestJS, and a Next.js frontend. Built and integrated REST APIs across services; implemented multitenant behavior with tenant filters, tenant context, and a dedicated JAR for tenant resolution. Delivered the student Scholarship module end-to-end, owning both the REST APIs (Spring Boot/NestJS) and the SES UI (Next.js + Mantine, Redux/redux-saga, React Query, React Hook Form). Replaced slow in-browser JasperReports loading with a separate NestJS report server using PG-Boss queues for async report generation.",
      tech: [
        "Spring Boot",
        "NestJS",
        "Next.js",
        "Mantine",
        "React Query",
        "PostgreSQL",
        "PG-Boss",
        "JasperReports",
        "Multitenancy",
      ],
      resumeBullets: [
        "Built School Expert System across Spring Boot, NestJS, and Next.js with REST APIs spanning backend and frontend integration.",
        "Implemented multitenant isolation using tenant filters, tenant context, and a dedicated JAR for tenant resolution.",
        "Owned the student Scholarship module across the Spring Boot/NestJS backend and the SES UI (Next.js, Mantine, Redux/redux-saga, React Query, React Hook Form).",
        "Designed a queue-based async report pipeline: NestJS + PG-Boss to offload JasperReports and avoid blocking user-facing APIs.",
        "Improved report turnaround for large PDF/Excel outputs versus synchronous in-process Jasper generation in Java.",
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
        "Patient-facing application for MStar HES—the Assam Patient Experience Portal—giving patients one account across seven medical-college hospitals for appointment booking, live queue tokens, results, prescriptions, payments, and family profiles. Owned it end-to-end: UI/UX, the Expo / React Native mobile app (Expo Router) and web PWA, and the patient-scoped backend APIs (Fastify + ConnectRPC, Drizzle ORM, better-auth). Includes UHID + OTP login with a biometric app lock, TanStack Query offline persistence, and a hardened security posture (SSL public-key pinning, jailbreak/root detection, screen-capture guards).",
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
        "Implemented a biometric app lock, TanStack Query offline persistence with on-device SQLite, and push notifications; hardened the app with SSL public-key pinning, jailbreak/root detection, and screen-capture protection.",
      ],
    },
  ],
  jobs: [
    {
      company: "Hitachi MGRM",
      location: "Hyderabad, India",
      role: "Full-Stack Developer",
      period: "Aug 2024 – Present",
      bullets: [
        "Delivered the HES pharmacy module and the Assam patient portal—one account across 7 hospitals—end-to-end: backend APIs, web, and React Native mobile.",
        "Build and maintain full-stack applications across Java/Spring Boot, NestJS, React, Next.js, and React Native.",
        "Design REST/RPC APIs with clear contracts and Postman-validated client–server integrations.",
        "Leveraged AI-assisted tooling (Cursor and Claude) to accelerate delivery; mentored juniors through code reviews.",
      ],
    },
    {
      company: "OJAS (client: Hitachi MGRM)",
      location: "Hyderabad, India",
      role: "Full-Stack Developer",
      period: "Feb 2023 – Aug 2024",
      bullets: [
        "Delivered full-stack web applications with Java, Spring MVC, HTML, CSS, and JavaScript.",
        "Managed persistence with JPA/Hibernate and tuned database access.",
        "Worked across the SDLC: design, development, testing, and deployment.",
      ],
    },
    {
      company: "OJAS Innovative Pvt. Ltd.",
      location: "Hyderabad, India",
      role: "Java Developer",
      period: "Jun 2022 – Jan 2023",
      bullets: [
        "Contributed to a Client Relationship Management system using Core Java, JDBC, Spring Data JPA, Hibernate, and MySQL.",
        "Optimized data access with JPA/Hibernate.",
        "Created and consumed RESTful APIs for client–server integration.",
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
