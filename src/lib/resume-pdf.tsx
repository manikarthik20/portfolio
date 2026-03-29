import "./register-resume-fonts";

import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { siteConfig } from "@/lib/site-config";

const FONT = "Inter";

const PAGE_MARGIN_H = 28;
const GAP_SECTION = 8;

const colors = {
  text: "#111827",
  muted: "#4b5563",
  accent: "#1e40af",
  rule: "#E5E7EB",
  projectBg: "#F9FAFB",
  projectBorder: "#64748b",
  projectsSectionBg: "#F3F4F6",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 22,
    paddingBottom: 24,
    paddingHorizontal: PAGE_MARGIN_H,
    fontFamily: FONT,
    fontSize: 10,
    fontWeight: 400,
    color: colors.text,
    lineHeight: 1.48,
  },
  headerBlock: {
    marginBottom: GAP_SECTION,
  },
  headerDivider: {
    height: 1,
    backgroundColor: colors.rule,
    marginTop: 5,
    width: "100%",
  },
  name: {
    fontSize: 19,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.text,
    marginBottom: 9,
    letterSpacing: 0.12,
  },
  headlineTitle: {
    fontSize: 11,
    fontFamily: FONT,
    fontWeight: 600,
    color: colors.accent,
    lineHeight: 1.4,
  },
  columns: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  colLeft: {
    width: "35%",
    paddingRight: 8,
    paddingLeft: 0,
    borderRightWidth: 1,
    borderRightColor: colors.rule,
  },
  colRight: {
    width: "65%",
    paddingLeft: 8,
    paddingRight: 0,
  },
  /** Page 2: no repeated sidebar — projects + education use full content width */
  colFull: {
    width: "100%",
    paddingLeft: 0,
    paddingRight: 0,
  },
  contactLabel: {
    fontSize: 8.5,
    fontFamily: FONT,
    fontWeight: 600,
    color: colors.muted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 9.5,
    color: colors.muted,
  },
  contactLink: {
    fontSize: 9.5,
    fontFamily: FONT,
    fontWeight: 500,
    color: colors.accent,
  },
  contactBlock: {
    marginBottom: 5,
  },
  sideSectionTitle: {
    fontSize: 9.5,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.85,
    marginBottom: 4,
    marginTop: GAP_SECTION,
  },
  sideSectionTitleFirst: {
    fontSize: 9.5,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.85,
    marginBottom: 4,
    marginTop: 0,
  },
  skillCategory: {
    marginBottom: 4,
  },
  skillCatLabel: {
    fontSize: 9.5,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.text,
    marginBottom: 2,
  },
  skillCatValue: {
    fontSize: 9.5,
    fontFamily: FONT,
    fontWeight: 400,
    color: colors.muted,
    lineHeight: 1.45,
  },
  locationText: {
    fontSize: 9.5,
    fontFamily: FONT,
    fontWeight: 400,
    color: colors.muted,
    lineHeight: 1.45,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.85,
    marginTop: GAP_SECTION + 1,
    marginBottom: 6,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
  },
  sectionTitleFirst: {
    fontSize: 12,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.85,
    marginTop: 0,
    marginBottom: 6,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
  },
  summaryLine: {
    fontSize: 10,
    fontFamily: FONT,
    fontWeight: 400,
    color: colors.muted,
    marginBottom: 6,
    textAlign: "justify",
    lineHeight: 1.5,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 7,
  },
  jobRole: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: 11,
    maxWidth: "70%",
    lineHeight: 1.35,
  },
  jobPeriod: {
    fontSize: 9.5,
    color: colors.muted,
    fontFamily: FONT,
    fontWeight: 600,
  },
  jobMeta: {
    fontSize: 9.5,
    color: colors.muted,
    marginBottom: 2,
    fontFamily: FONT,
    fontWeight: 400,
    lineHeight: 1.4,
  },
  bullet: {
    flexDirection: "row",
    marginTop: 2,
    paddingRight: 2,
  },
  bulletChar: {
    width: 11,
    fontSize: 10,
    color: colors.muted,
    fontFamily: FONT,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    fontFamily: FONT,
    fontWeight: 400,
    color: colors.muted,
    textAlign: "justify",
    lineHeight: 1.5,
  },
  projectBulletText: {
    flex: 1,
    fontSize: 10,
    fontFamily: FONT,
    fontWeight: 400,
    color: colors.muted,
    textAlign: "justify",
    lineHeight: 1.52,
  },
  projectBulletChar: {
    width: 12,
    fontSize: 10,
    color: colors.muted,
    fontFamily: FONT,
    fontWeight: 400,
    lineHeight: 1.52,
  },
  /** Projects block (page 2) — type sizes align with page 1 body (10pt) */
  projectsSectionUnbroken: {
    marginTop: 0,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.projectsSectionBg,
    borderWidth: 1,
    borderColor: colors.rule,
    borderRadius: 3,
  },
  projectsSectionTitle: {
    fontSize: 12.5,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.text,
    textTransform: "uppercase",
    letterSpacing: 0.9,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
  },
  projectCard: {
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.projectBorder,
    backgroundColor: colors.projectBg,
    borderRadius: 3,
  },
  projectCardFirst: {
    marginTop: 0,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.projectBorder,
    backgroundColor: colors.projectBg,
    borderRadius: 3,
  },
  projectTitle: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: 12,
    color: colors.text,
    marginBottom: 3,
    lineHeight: 1.3,
  },
  projectTech: {
    fontSize: 10,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.accent,
    marginBottom: 5,
    lineHeight: 1.4,
  },
  /** Page 2 only — matches larger project text */
  educationSectionTitle: {
    fontSize: 12,
    fontFamily: FONT,
    fontWeight: 700,
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.85,
    marginTop: GAP_SECTION + 4,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
  },
  eduDegree: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: 11,
    marginTop: 3,
    color: colors.text,
    lineHeight: 1.35,
  },
  eduMeta: {
    fontSize: 10,
    fontFamily: FONT,
    fontWeight: 400,
    color: colors.muted,
    marginTop: 3,
    lineHeight: 1.48,
  },
  footer: {
    position: "absolute",
    bottom: 16,
    left: PAGE_MARGIN_H,
    right: PAGE_MARGIN_H,
    fontSize: 7.5,
    fontFamily: FONT,
    fontWeight: 400,
    color: colors.muted,
    textAlign: "center",
  },
});

const pdfSkillCategories: { label: string; value: string }[] = [
  { label: "Languages", value: "Java, JavaScript, SQL" },
  { label: "Backend", value: "Spring Boot, Node.js (NestJS)" },
  { label: "Frontend", value: "React (Basics), TanStack Query" },
  { label: "Database", value: "PostgreSQL, MySQL" },
  { label: "Tools", value: "Docker, Redis, Git, PG-Boss, JasperReports" },
];

const MAX_PROJECT_BULLETS = 4;

function Bullet({
  children,
  compact,
}: {
  children: string;
  compact?: boolean;
}) {
  return (
    <View style={styles.bullet}>
      <Text style={compact ? styles.projectBulletChar : styles.bulletChar}>
        •
      </Text>
      <Text style={compact ? styles.projectBulletText : styles.bulletText}>
        {children}
      </Text>
    </View>
  );
}

function JobBlock({ job }: { job: (typeof siteConfig.jobs)[number] }) {
  return (
    <View>
      <View style={styles.jobHeader}>
        <View>
          <Text style={styles.jobRole}>{job.role}</Text>
          <Text style={styles.jobMeta}>
            {job.company} — {job.location}
          </Text>
        </View>
        <Text style={styles.jobPeriod}>{job.period}</Text>
      </View>
      {job.bullets.map((b) => (
        <Bullet key={b}>{b}</Bullet>
      ))}
    </View>
  );
}

/** Single project: must not split across pages (wrap={false}). */
function ProjectCard({
  first,
  title,
  tech,
  bullets,
}: {
  first: boolean;
  title: string;
  tech: string;
  bullets: readonly string[];
}) {
  const lines = bullets.slice(0, MAX_PROJECT_BULLETS);
  return (
    <View wrap={false} style={first ? styles.projectCardFirst : styles.projectCard}>
      <Text style={styles.projectTitle}>{title}</Text>
      <Text style={styles.projectTech}>{tech}</Text>
      {lines.map((line, i) => (
        <Bullet key={`${title}-b-${i}`} compact>
          {line}
        </Bullet>
      ))}
    </View>
  );
}

/**
 * Full Projects panel: title + all cards stay together; equivalent to page-break-inside: avoid.
 * Lives on page 2 only so it never straddles page 1 / page 2 boundary.
 */
function ProjectsSectionUnbroken() {
  return (
    <View wrap={false} style={styles.projectsSectionUnbroken}>
      <Text style={styles.projectsSectionTitle}>Projects</Text>
      {siteConfig.projects.map((p, idx) => (
        <ProjectCard
          key={p.title}
          first={idx === 0}
          title={p.title}
          tech={`Tech stack: ${p.tech.join(", ")}`}
          bullets={p.resumeBullets}
        />
      ))}
    </View>
  );
}

function ContactLeftColumn() {
  const phone = siteConfig.phone?.trim();
  const gh = siteConfig.githubUrl?.trim();

  return (
    <View>
      <Text style={styles.sideSectionTitleFirst}>Contact</Text>

      {phone ? (
        <View style={styles.contactBlock}>
          <Text style={styles.contactLabel}>Phone</Text>
          <Text style={styles.contactValue}>{phone}</Text>
        </View>
      ) : null}

      <View style={styles.contactBlock}>
        <Text style={styles.contactLabel}>Email</Text>
        <Link src={`mailto:${siteConfig.email}`}>
          <Text style={styles.contactLink}>{siteConfig.email}</Text>
        </Link>
      </View>

      <View style={styles.contactBlock}>
        <Text style={styles.contactLabel}>LinkedIn</Text>
        <Link src={siteConfig.linkedin}>
          <Text style={styles.contactLink}>Profile</Text>
        </Link>
      </View>

      {gh ? (
        <View style={styles.contactBlock}>
          <Text style={styles.contactLabel}>GitHub</Text>
          <Link src={gh}>
            <Text style={styles.contactLink}>Profile</Text>
          </Link>
        </View>
      ) : null}

      <Text style={styles.sideSectionTitle}>Location</Text>
      <Text style={styles.locationText}>{siteConfig.location}</Text>

      <Text style={styles.sideSectionTitle}>Skills</Text>
      {pdfSkillCategories.map((cat) => (
        <View key={cat.label} style={styles.skillCategory}>
          <Text style={styles.skillCatLabel}>{cat.label}</Text>
          <Text style={styles.skillCatValue}>{cat.value}</Text>
        </View>
      ))}
    </View>
  );
}

function buildSummaryLines(): string[] {
  const y = siteConfig.experienceYears;
  const loc = siteConfig.location;
  return [
    `Backend-focused software developer with ${y}+ years of experience in ${loc}, delivering production services with Java, Spring Boot, and NestJS.`,
    "Design and implement REST APIs with clear contracts, validation, and integration testing; experienced with async processing, queues, and long-running workloads.",
    "Built async report pipelines using NestJS and PG-Boss, integrated JasperReports for PDF/Excel outputs, and tuned persistence and queries for performance.",
    "Pragmatic about architecture, observability, and data integrity so systems scale safely with team and traffic growth.",
  ];
}

function PageFooter() {
  return (
    <Text
      style={styles.footer}
      fixed
      render={({ pageNumber, totalPages }) =>
        `${siteConfig.name} · Page ${pageNumber} of ${totalPages}`
      }
    />
  );
}

export function ResumePdfDocument() {
  const docTitle = `${siteConfig.name} — ${siteConfig.resumeHeadlineRole}`;
  const summaryLines = buildSummaryLines();

  return (
    <Document title={docTitle} author={siteConfig.name} subject="Resume">
      {/* Page 1 — Summary + Experience (projects never appear here) */}
      <Page size="A4" style={styles.page}>
        <View style={styles.headerBlock}>
          <Text style={styles.name}>{siteConfig.name}</Text>
          <Text style={styles.headlineTitle}>
            {siteConfig.resumeHeadlineRole} ({siteConfig.resumeHeadlineStack})
          </Text>
          <View style={styles.headerDivider} />
        </View>

        <View style={styles.columns}>
          <View style={styles.colLeft}>
            <ContactLeftColumn />
          </View>

          <View style={styles.colRight}>
            <Text style={styles.sectionTitleFirst}>Professional summary</Text>
            {summaryLines.map((line, i) => (
              <Text key={`s-${i}`} style={styles.summaryLine}>
                {line}
              </Text>
            ))}

            <Text style={styles.sectionTitle}>Experience</Text>
            {siteConfig.jobs.map((job) => (
              <JobBlock key={`${job.company}-${job.period}`} job={job} />
            ))}
          </View>
        </View>

        <PageFooter />
      </Page>

      {/* Page 2 — Projects + Education only (no repeated name/title) */}
      <Page size="A4" style={styles.page}>
        <View style={styles.colFull}>
          <ProjectsSectionUnbroken />

          <Text style={styles.educationSectionTitle}>Education</Text>
          <Text style={styles.eduDegree}>{siteConfig.education.degree}</Text>
          <Text style={styles.eduMeta}>{siteConfig.education.institution}</Text>
          <Text style={styles.eduMeta}>{siteConfig.education.period}</Text>
        </View>

        <PageFooter />
      </Page>
    </Document>
  );
}
