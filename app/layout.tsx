import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import PageLoader from "@/components/ui/PageLoader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ClientNav } from "@/components/ui/ClientNav";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Dinidu Missaka — Senior UX/UI Designer",
  description:
    "AI-Driven Design | Scalable Systems | Visual Storyteller. Crafting people-friendly digital journeys with over 5 years of experience in fintech and web.",
  keywords: ["UX Designer", "UI Designer", "Fintech", "Dubai", "Design Systems", "AI Design"],
  authors: [{ name: "Dinidu Missaka" }],
  openGraph: {
    title: "Dinidu Missaka — Senior UX/UI Designer",
    description: "Crafting people-friendly digital journeys!",
    url: "https://www.dinidumissaka.com",
    siteName: "Dinidu Missaka",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinidu Missaka — Senior UX/UI Designer",
    description: "Crafting people-friendly digital journeys!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <a
            href="#main-content"
            style={{
              position: "absolute",
              left: "-9999px",
              top: "auto",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              zIndex: 99999,
            }}
            onFocus={(e) => {
              const el = e.currentTarget;
              el.style.left = "16px";
              el.style.top = "16px";
              el.style.width = "auto";
              el.style.height = "auto";
              el.style.overflow = "visible";
              el.style.padding = "8px 16px";
              el.style.background = "var(--color-bg)";
              el.style.color = "var(--color-fg)";
              el.style.borderRadius = "8px";
              el.style.border = "2px solid var(--color-accent)";
              el.style.fontFamily = "var(--font-manrope), sans-serif";
              el.style.fontSize = "14px";
              el.style.fontWeight = "600";
            }}
            onBlur={(e) => {
              const el = e.currentTarget;
              el.style.left = "-9999px";
              el.style.top = "auto";
              el.style.width = "1px";
              el.style.height = "1px";
              el.style.overflow = "hidden";
              el.style.padding = "";
              el.style.background = "";
            }}
          >
            Skip to content
          </a>
          <SmoothScroll />
          <PageLoader />
          <ClientNav />
          <main id="main-content" className="pt-8 md:pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
