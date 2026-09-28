import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import PageLoader from "@/components/ui/PageLoader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ClientNav } from "@/components/ui/ClientNav";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import SkipLink from "@/components/ui/SkipLink";

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
  title: "Dinidu Missaka — Product Designer who builds",
  description:
    "Product designer in Dubai with 5+ years in fintech and web. Design systems, spec-driven design and products built with Claude Code.",
  keywords: ["Product Designer", "UX Designer", "Design Engineer", "Design Systems", "Fintech", "Dubai", "Claude Code", "AI Design"],
  authors: [{ name: "Dinidu Missaka" }],
  openGraph: {
    title: "Dinidu Missaka — Product Designer who builds",
    description: "AI makes options cheap. Choosing the right one is the job.",
    url: "https://www.dinidumissaka.com",
    siteName: "Dinidu Missaka",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinidu Missaka — Product Designer who builds",
    description: "AI makes options cheap. Choosing the right one is the job.",
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
          <SkipLink />
          <SmoothScroll />
          <PageLoader />
          <ClientNav />
          <ScrollIndicator />
          <div id="content-scale-wrapper" style={{ transformOrigin: "top center" }}>
            <main id="main-content" style={{ paddingTop: "3rem" }}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
