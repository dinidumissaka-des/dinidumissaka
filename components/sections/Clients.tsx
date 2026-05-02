import { clients } from "@/lib/data/toolkit";

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section>
      <div className="container section-padding">
        <div className="overflow-hidden relative flex">
          <div className="flex gap-12 animate-marquee shrink-0 items-center">
            {doubled.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex items-center gap-3 shrink-0 opacity-50 hover:opacity-100 transition-opacity"
              >
                <span className="text-lg font-semibold text-muted whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
