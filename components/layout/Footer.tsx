const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/dinidumissaka" },
  { label: "Dribbble", href: "https://dribbble.com/dinidumissaka" },
  { label: "Instagram", href: "https://instagram.com/dinidumissaka" },
  { label: "X", href: "https://x.com/dinidumissaka" },
];

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left — Availability */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[--text-small] text-muted">Available for work</span>
            </div>
            <p
              className="font-semibold text-fg"
              style={{ fontSize: "var(--text-h5)" }}
            >
              Let&apos;s build something great.
            </p>
            <a
              href="mailto:dinidumissaka@gmail.com"
              className="inline-block text-accent hover:underline text-[--text-p] font-medium"
            >
              dinidumissaka@gmail.com
            </a>
          </div>

          {/* Middle — Navigation */}
          <div className="space-y-4">
            <p className="text-[--text-small] uppercase tracking-widest text-muted font-medium">
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Cases", href: "#projects" },
                { label: "About", href: "#about" },
                { label: "Resume", href: "/resume.pdf" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[--text-p] text-muted hover:text-fg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right — Socials + Location */}
          <div className="space-y-4">
            <p className="text-[--text-small] uppercase tracking-widest text-muted font-medium">
              Connect
            </p>
            <nav className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--text-p] text-muted hover:text-fg transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </nav>
            <p className="text-[--text-small] text-muted pt-2">
              📍 Dubai, UAE · Remote worldwide
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[--text-small] text-muted">
            © {new Date().getFullYear()} Dinidu Missaka. All rights reserved.
          </p>
          <p className="text-[--text-small] text-muted">
            Designed &amp; built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
