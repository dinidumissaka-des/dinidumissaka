"use server";

import { cookies } from "next/headers";
import { refresh } from "next/cache";
import { ACCESS_COOKIE, ACCESS_MAX_AGE, accessToken, passwordMatches } from "@/lib/case-study-access";

export type UnlockState = { error?: string };

export async function unlockCaseStudy(_prev: UnlockState, formData: FormData): Promise<UnlockState> {
  const password = String(formData.get("password") ?? "");
  const token = accessToken();

  if (!token || !passwordMatches(password)) {
    // A short pause makes guessing slower without bothering someone who mistyped once.
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { error: "That password isn't right. Check it and try again." };
  }

  (await cookies()).set(ACCESS_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ACCESS_MAX_AGE,
  });
  refresh();
  return {};
}
