import PageLoader from "@/components/ui/PageLoader";

export default function VisualJournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        html, body {
          background: #101010 !important;
          overflow: hidden;
        }
      `}</style>
      <PageLoader />
      {children}
    </>
  );
}
