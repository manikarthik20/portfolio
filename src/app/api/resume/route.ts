import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import { createElement } from "react";
import { ResumePdfDocument } from "@/lib/resume-pdf";
import { getResumeDownloadFilename } from "@/lib/site-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const buffer = await renderToBuffer(createElement(ResumePdfDocument));
    const filename = getResumeDownloadFilename();

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (err) {
    console.error("[api/resume] PDF generation failed:", err);
    return new NextResponse(
      "Resume could not be generated. Check server logs (e.g. missing font files on the deployment bundle).",
      { status: 500 },
    );
  }
}
