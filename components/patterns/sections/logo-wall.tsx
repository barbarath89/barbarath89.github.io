/**
 * Grayscale wordmarks that snap to full color + opacity on hover.
 * Swap the text spans for real logo SVGs in production.
 */

const LOGOS = ["Norrland", "Havenlicht", "Duinpost", "Kaimuur", "Zilverbaai", "Wolkendek"]

export function LogoWall() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm text-muted-foreground">Vertrouwd door teams bij</p>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {LOGOS.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center text-lg font-semibold tracking-tight text-muted-foreground opacity-60 grayscale transition-all duration-300 hover:text-foreground hover:opacity-100 hover:grayscale-0"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
