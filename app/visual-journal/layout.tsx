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
      {children}
    </>
  );
}
