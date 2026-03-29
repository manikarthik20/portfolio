/** Update email, LinkedIn, phone, and resume path as needed. */
export const siteConfig = {
  name: "Manikarthik Chandankeri",
  role: "Full-Stack Developer",
  /** Shown on generated PDF header (portfolio role may differ). */
  resumeHeadlineRole: "Backend Developer",
  resumeHeadlineStack: "Java | Spring Boot | Node.js | NestJS",
  /** Set your number; hidden in PDF / contact if empty. */
  phone: "+91 93981 24090",
  /** Used for tel: links (digits with country code). */
  phoneTel: "+919398124090",
  /** Optional; omit line in PDF if empty (no public GitHub is fine). */
  githubUrl: "",
  tagline:
    "Building RESTful APIs, responsive web apps, and scalable backends—from monoliths to multitenant services and async workloads.",
  techSubtitle: "Java · Spring Boot · React · Node.js · Next.js · NestJS",
  experienceYears: "4.3",
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
      description:
        "College Expert System at Hitachi MGRM—a monolithic Java Spring Boot application using JSP for server-rendered views. Owned end-to-end features across domain logic, persistence, and the presentation layer within a single deployable stack.",
      tech: ["Java", "Spring Boot", "JSP", "Monolith"],
      resumeBullets: [
        "Maintained College Expert System as a monolithic Java Spring Boot app with JSP-based server-rendered views at Hitachi MGRM.",
        "Owned features end-to-end across domain logic, persistence, and presentation within one deployable stack.",
        "Collaborated on a stable release cadence with clear layering between services, data access, and UI templates.",
      ],
    },
    {
      title: "SES (School Expert System)",
      description:
        "School Expert System spanning Java Spring Boot, NestJS, and a Next.js frontend. Built and integrated REST APIs across services; implemented multitenant behavior with tenant filters, tenant context, and a dedicated JAR for tenant resolution. Replaced slow in-browser JasperReports loading with a separate NestJS report server using PG-Boss queues for async report generation.",
      tech: [
        "Spring Boot",
        "NestJS",
        "Next.js",
        "PostgreSQL",
        "PG-Boss",
        "JasperReports",
        "Multitenancy",
      ],
      resumeBullets: [
        "Built School Expert System across Spring Boot, NestJS, and Next.js with REST APIs spanning backend and frontend integration.",
        "Implemented multitenant isolation using tenant filters, tenant context, and a dedicated JAR for tenant resolution.",
        "Designed a queue-based async report pipeline: NestJS + PG-Boss to offload JasperReports and avoid blocking user-facing APIs.",
        "Improved report turnaround for large PDF/Excel outputs versus synchronous in-process Jasper generation in Java.",
      ],
    },
  ],
  jobs: [
    {
      company: "Hitachi MGRM",
      location: "Hyderabad, India",
      role: "Full-Stack Developer",
      period: "Present",
      bullets: [
        "Develop and maintain full-stack applications with Java, Spring Boot, React, Node.js, Next.js, and NestJS.",
        "Design and implement RESTful APIs; use Postman to develop, test, and validate integrations between client and server.",
        "Partner with UI/UX to ship responsive, accessible interfaces.",
        "Take part in code reviews and mentor junior developers.",
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
