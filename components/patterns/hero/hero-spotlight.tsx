"use client"

/**
 * Dark hero with a radial glow that tracks the cursor, over a faint
 * grid. High-contrast, technical feel — good for dev tools / AI products.
 */

import * as React from "react"
import { motion, useMotionValue } from "motion/react"
import { TextReveal } from "@/components/patterns/interactions/text-reveal"
import { MagneticButton } from "@/components/patterns/interactions/magnetic-button"

export function HeroSpotlight() {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-neutral-950 text-white"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <TextReveal
          as="h1"
          text="Interfaces die reageren op elke beweging."
          className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        />
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/60">
          Beweeg je muis. Elk detail leeft.
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticButton>Ontdek meer</MagneticButton>
        </div>
      </div>
    </section>
  )
}
