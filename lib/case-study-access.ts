import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Server-side gate for password-protected case-study content.
 *
 * The password lives only in the CASE_STUDY_PASSWORD environment variable. The cookie
 * never holds the password itself — it holds an HMAC derived from it, so changing the
 * password signs everyone out. With no password configured, content stays locked.
 */
export const ACCESS_COOKIE = "case-study-access";
export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function secret(): string | null {
  return process.env.CASE_STUDY_PASSWORD || null;
}

function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function accessToken(): string | null {
  const s = secret();
  return s ? createHmac("sha256", s).update("case-study-access:v1").digest("hex") : null;
}

export function passwordMatches(input: string): boolean {
  const s = secret();
  return s !== null && safeEqual(input, s);
}

export async function hasCaseStudyAccess(): Promise<boolean> {
  // Read the cookie before anything else: this is what marks the page as rendered per
  // request. Returning early would let Next.js prerender the locked state at build time.
  const cookie = (await cookies()).get(ACCESS_COOKIE)?.value;
  const token = accessToken();
  return token !== null && cookie !== undefined && safeEqual(cookie, token);
}
