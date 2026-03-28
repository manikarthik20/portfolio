import path from "path";
import { Font } from "@react-pdf/renderer";

let didRegister = false;

/** Register Inter from @fontsource/inter (latin .woff for broad @react-pdf support). */
export function registerResumeFonts(): void {
  if (didRegister) return;
  didRegister = true;

  const dir = path.join(process.cwd(), "node_modules/@fontsource/inter/files");

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
