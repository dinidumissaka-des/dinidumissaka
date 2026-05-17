import type { Metadata } from "next";
import { Fraunces, Manrope, Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import PageLoader from "@/components/ui/PageLoader";
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

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-serif",
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
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${notoSerifDisplay.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <PageLoader />
          <div style={{ position: "fixed", top: "3rem", left: 0, right: 0, zIndex: 9999, pointerEvents: "none" }}>
            <div style={{ maxWidth: "1016px", margin: "0 auto", display: "flex", justifyContent: "flex-end", pointerEvents: "none" }}>
              <div style={{ pointerEvents: "auto", paddingRight: "2px" }}>
                <ClientNav />
              </div>
            </div>
          </div>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
