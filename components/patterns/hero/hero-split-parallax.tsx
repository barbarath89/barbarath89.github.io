"use client"

/**
 * Text left, image right, image drifts on scroll via useScroll +
 * useTransform. Swap the gradient block for a real <Image> in
 * production — keep the parallax wrapper around it.
 */

import * as React from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { TextReveal } from "@/components/patterns/interactions/text-reveal"
import { MagneticButton } from "@/components/patterns/interactions/magnetic-button"

export function HeroSplitParallax() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <section
      ref={ref}
      className="relative grid min-h-[90vh] grid-cols-1 overflow-hidden lg:grid-cols-2"
    >
      <div className="flex flex-col justify-center px-8 py-24 lg:px-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Studio 2026
        </p>
        <TextReveal
          as="h1"
          text="Design dat blijft hangen."
          className="text-5xl font-semibold tracking-tight sm:text-6xl"
        />
        <p className="mt-6 max-w-md text-lg text-muted-foreground">
          Elk detail — van scroll-snelheid tot cursorgedrag — is met opzet ontworpen.
        </p>
        <div className="mt-10">
          <MagneticButton>Bekijk werk</MagneticButton>
        </div>
      </div>

      <div className="relative min-h-[50vh] overflow-hidden lg:min-h-0">
        <motion.div style={{ y }} className="absolute inset-[-10%]">
          <div className="h-full w-full bg-gradient-to-br from-primary/40 via-accent to-chart-2/30" />
        </motion.div>
      </div>
    </section>
  )
}
