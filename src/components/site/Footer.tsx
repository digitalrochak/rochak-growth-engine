const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-lg font-extrabold">Rochak Regmi</p>
          <p className="text-sm text-primary">Digital Marketer</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Digital marketing strategies designed to help businesses grow.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 sm:justify-items-end">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-5 pt-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rochak Regmi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
