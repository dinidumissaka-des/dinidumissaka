import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import PageLoader from "@/components/ui/PageLoader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ClientNav } from "@/components/ui/ClientNav";
import SkipLink from "@/components/ui/SkipLink";
import ColorBends from "@/components/ui/ColorBends";

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
          <ColorBends
            colors={["#1a1a2e", "#16213e", "#0f3460", "#1a1a2e"]}
            rotation={90}
            speed={0.08}
            scale={1.2}
            frequency={0.8}
            warpStrength={0.6}
            mouseInfluence={0.3}
            parallax={0.3}
            noise={0}
            iterations={2}
            intensity={0.6}
            bandWidth={5}
            transparent
          />
          <SkipLink />
          <SmoothScroll />
          <PageLoader />
          <ClientNav />
          <main id="main-content" style={{ paddingTop: "3rem" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
