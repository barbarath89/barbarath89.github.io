/**
 * Closing CTA with a slow-drifting glow blob behind the button.
 * Reuses the blob-move keyframe from hero-gradient-mesh.
 */

import { MagneticButton } from "@/components/patterns/interactions/magnetic-button"

export function CtaGradientGlow() {
  return (
    <section className="relative overflow-hidden py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]"
        style={{ animation: "blob-move 14s ease-in-out infinite" }}
      />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Klaar om te beginnen?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-lg text-muted-foreground">
          Plan een gratis kennismaking van 20 minuten — geen verplichtingen.
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticButton>Plan een gesprek</MagneticButton>
        </div>
      </div>
    </section>
  )
}
