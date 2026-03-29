import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Always the folder that contains this file (portfolio root), not `process.cwd()`. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  /**
   * Vercel serverless bundles omit deep node_modules paths by default.
   * Resume PDF uses Inter .woff files from @fontsource/inter; without this,
   * /api/resume throws at runtime and the browser reports a failed download.
   */
  outputFileTracingIncludes: {
    "/api/resume": ["./node_modules/@fontsource/inter/files/**/*.woff"],
  },
};

export default nextConfig;
