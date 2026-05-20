"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false} scriptProps={{ suppressHydrationWarning: true }}>
      {children}
    </NextThemesProvider>
  );
}
