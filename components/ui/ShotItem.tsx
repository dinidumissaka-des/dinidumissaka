export function ShotItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="shot-scale-item" style={{ transformOrigin: "center" }}>
      {children}
    </div>
  );
}
