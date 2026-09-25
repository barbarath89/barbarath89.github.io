/**
 * Giant looping type behind a centered pitch, dimmed to near-invisible
 * as texture rather than content. Strong for agency/studio landing pages.
 */

import { Marquee } from "@/components/patterns/interactions/marquee"
import { MagneticButton } from "@/components/patterns/interactions/magnetic-button"

export function HeroMarqueeBg({ word = "CREATIEF" }: { word?: string }) {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-foreground text-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 opacity-[0.08]"
      >
        {[0, 1, 2].map((row) => (
          <Marquee
            key={row}
            durationSeconds={22 + row * 6}
            reverse={row % 2 === 1}
            pauseOnHover={false}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="text-[12vw] leading-none font-bold tracking-tight">
                {word}&nbsp;
              </span>
            ))}
          </Marquee>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          We bouwen merken die niemand vergeet.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-balance text-lg text-background/70">
          Een bureau voor product, merk en digitale ervaringen.
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticButton className="bg-background text-foreground hover:bg-background/90">
            Plan een gesprek
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
