export interface DribbbleShot {
  id: number;
  title: string;
  description: string | null;
  html_url: string;
  published_at: string;
  images: {
    hidpi: string | null;
    normal: string;
    teaser: string;
  };
}

export async function getDribbbleShots(): Promise<DribbbleShot[]> {
  const token = process.env.DRIBBBLE_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      "https://api.dribbble.com/v2/user/shots?per_page=100&sort=recent",
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    return (await res.json()) as DribbbleShot[];
  } catch {
    return [];
  }
}
