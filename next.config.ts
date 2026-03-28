import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Always the folder that contains this file (portfolio root), not `process.cwd()`. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
