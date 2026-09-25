/**
 * Soft animated gradient blobs behind a centered headline. Cheap to
 * build, reads as premium — good default hero when there's no
 * product shot or photography to lean on.
 */

import { TextReveal } from "@/components/patterns/interactions/text-reveal"
import { MagneticButton } from "@/components/patterns/interactions/magnetic-button"

export function HeroGradientMesh() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-1/4 top-0 h-[60vw] w-[60vw] rounded-full bg-primary/30 blur-[120px]"
          style={{ animation: "blob-move 18s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-1/4 bottom-0 h-[50vw] w-[50vw] rounded-full bg-chart-3/25 blur-[120px]"
          style={{ animation: "blob-move-reverse 22s ease-in-out infinite" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Nieuw · 2026 collectie
        </p>
        <TextReveal
          as="h1"
          text="Bouw producten die aanvoelen alsof ze uit de toekomst komen."
          className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        />
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          Een startpunt voor merken die niet nog een generieke SaaS-landingspagina willen.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <MagneticButton>Aan de slag</MagneticButton>
        </div>
      </div>
    </section>
  )
}
