"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type DomeGalleryType from "./DomeGallery";

const DomeGallery = dynamic(() => import("@/components/ui/DomeGallery"), { ssr: false });

export default function DomeGalleryClient(props: ComponentProps<typeof DomeGalleryType>) {
  return <DomeGallery {...props} />;
}
