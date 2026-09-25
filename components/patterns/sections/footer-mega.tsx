/**
 * Standard link columns plus a huge outlined wordmark bleeding off
 * the bottom edge — a cheap way to make a footer feel designed.
 */

const COLUMNS = [
  { title: "Product", links: ["Features", "Prijzen", "Changelog", "Roadmap"] },
  { title: "Studio", links: ["Over ons", "Werk", "Carrières", "Contact"] },
  { title: "Resources", links: ["Blog", "Docs", "Support", "Status"] },
]

export function FooterMega({ wordmark = "STUDIO" }: { wordmark?: string }) {
  return (
    <footer className="border-t border-border bg-muted/20 pt-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="text-lg font-semibold tracking-tight">Studio.</span>
            <p className="mt-3 text-sm text-muted-foreground">
              Product, merk en digitale ervaringen sinds 2019.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-cursor="hover"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Studio. Alle rechten voorbehouden.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Voorwaarden
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="overflow-hidden">
        <p
          className="translate-y-[0.1em] text-center text-[16vw] leading-none font-bold tracking-tighter text-transparent select-none"
          style={{ WebkitTextStroke: "1px var(--border)" }}
        >
          {wordmark}
        </p>
      </div>
    </footer>
  )
}
