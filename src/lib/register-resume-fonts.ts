import fs from "fs";
import path from "path";
import { Font } from "@react-pdf/renderer";

let didRegister = false;

/**
 * Prefer committed fonts under /fonts/inter so Vercel’s serverless bundle always
 * includes them. Fall back to @fontsource/inter in node_modules for local dev.
 */
function resolveInterDir(): string {
  const committed = path.join(process.cwd(), "fonts", "inter");
  if (
    fs.existsSync(path.join(committed, "inter-latin-400-normal.woff"))
  ) {
    return committed;
  }
  return path.join(process.cwd(), "node_modules/@fontsource/inter/files");
}

/** Register Inter (.woff) for @react-pdf/renderer. */
export function registerResumeFonts(): void {
  if (didRegister) return;
  didRegister = true;

  const dir = resolveInterDir();

  Font.register({
    family: "Inter",
    fonts: [
      { src: path.join(dir, "inter-latin-400-normal.woff"), fontWeight: 400 },
      { src: path.join(dir, "inter-latin-500-normal.woff"), fontWeight: 500 },
      { src: path.join(dir, "inter-latin-600-normal.woff"), fontWeight: 600 },
      { src: path.join(dir, "inter-latin-700-normal.woff"), fontWeight: 700 },
    ],
  });
}

registerResumeFonts();
