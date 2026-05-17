"use client";

import { useState, useEffect } from "react";
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import type { ThemeTogglerButtonProps } from "@/components/animate-ui/components/buttons/theme-toggler";

export function ClientThemeToggler(props: ThemeTogglerButtonProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div style={{ width: 28, height: 28 }} />;
  return <ThemeTogglerButton {...props} />;
}
