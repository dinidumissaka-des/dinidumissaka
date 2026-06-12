import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";
import DomeGallery from "@/components/ui/DomeGalleryClient";

export const metadata: Metadata = {
  title: "Visual Journal — Dinidu Missaka",
  description: "A visual journal of photography and moments.",
};

const images = [
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6833435ccf8336021d703657_DSC_6492.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6871e2f3ff24406af92519ce_DSC_5664.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755abaf1bc9bc995403c1dd_348FFAAB-5BBA-42CA-94E2-B6157A24F6B2_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755abf58ffe48f18fa2a0c7_30517FCA-DE29-4C2B-A4AC-71E1F5EED90E.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/675595e776accbd14f6d5941_DSC_5037.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755ad921a56371c861604f4_67D30D0B-C56A-4FAA-B7AA-F6B551874CCF_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755884f2e4ac26bf6196142_08d04786729559.5da29f8dd12f1.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755aedbc56fd887721393ca_F760C981-1C41-49D5-9AD0-AF779696E95C_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755b051969ac796cf9587ee_8D9AF512-40BE-4902-BAD2-A8BE154A08AE_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6833437a06c894a933d30eed_DSC_6173.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6871e30b2cc4265e10db8fd1_DSC_5942.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755abc51bc9bc995403cf77_26751611-EB67-4B23-930A-0E3DB8BD51A2_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755ac122d0bca00efaf5232_EBE8331F-6958-41E5-B556-57DB8D850ABC_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755ad5a2eca5a31b7e92e75_6EFC93F8-E839-477F-A04D-92960D7FDC95.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755adb3a87b494f2b5ecfe5_1298A8A0-9D82-4D23-B396-6358A4226DB7_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755ae3042d0c9f23a257bb5_B6F7C23B-CA79-4DBE-91E5-4B740F636BC4_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755af35eb8b323ce44cf959_72E9163F-EB22-452D-AAB9-5C67CE7B54FA.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755b0304267b422b5cbe0bf_05f53b86729559.5da29f8dd1985.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/68334391fdbaa709e042b4f5_DSC_6483.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6871e31ddcbecd54d7f89244_DSC_5668.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755ae7ceb8b323ce44c7a0b_8E41ED47-02F3-4462-8B18-82C3857A005E.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755ac717fa59365e2f89da0_92b05486681181.5da0a1ab46fb7.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755ad7caeed909574e29303_071DCE1E-9B0C-4266-BFC1-5368F87A8667_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755ae0f1a56371c86165fd4_F65E2CE1-2BD8-4A2B-A2E0-69B99D887BDF_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755abe4f76301d1e7cc7307_A6638397-2A67-4DD2-9D31-EC49DE569FD7_1_105_c.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755af795a063a791ce7add2_8f850286681181.5da0a1abe7ffe.avif", alt: "" },
  { src: "https://cdn.prod.website-files.com/661685703798b803e4b90e1a/6755b063969ac796cf9591f5_4E6E3424-1C6C-4A4A-816A-5D6A5362AF72_1_105_c.avif", alt: "" },
];

export default function VisualJournalPage() {
  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100dvh", background: "#101010" }}>
      {/* Warm up CDN connection before images start loading */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
      <BackButton
        href="/"
        color="#f8f8f8"
        style={{ position: "absolute", top: "1.5rem", left: "max(1.5rem, calc(50% - 508px))", zIndex: 50 }}
      />
      <ExternalLinkButton
        href="https://www.pexels.com/@dinidumissaka/"
        label="Pexels"
        color="#f8f8f8"
        style={{ position: "absolute", top: "1.5rem", right: "max(1.5rem, calc(50% - 508px))", zIndex: 50 }}
      />
      <DomeGallery
        images={images}
        fit={0.75}
        minRadius={850}
        maxVerticalRotationDeg={0}
        segments={26}
        dragDampening={2.6}
        grayscale={false}
        overlayBlurColor="#101010"
        openedImageWidth="420px"
        openedImageHeight="560px"
        imageBorderRadius="16px"
        openedImageBorderRadius="20px"
      />
    </div>
  );
}
