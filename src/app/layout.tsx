import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { getNameInitials, siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.classList.toggle('dark', t === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "Manikarthik Chandankeri | Full-Stack Developer",
  description:
    "Full-stack developer in Hyderabad. Java, Spring Boot, React, Next.js, NestJS. REST APIs, multitenant systems, async reporting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>
          <Header
            brandInitials={getNameInitials(siteConfig.name)}
            brandName={siteConfig.name}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
