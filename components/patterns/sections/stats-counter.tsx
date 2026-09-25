"use client"

/**
 * Numbers count up once when scrolled into view. Uses motion's
 * "motion value as children" trick so the DOM text updates without
 * a React re-render per frame.
 */

import * as React from "react"
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString("nl-NL"))

  React.useEffect(() => {
    if (!isInView) return
    const controls = animate(count, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [isInView, value, count])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

const STATS = [
  { value: 240, suffix: "+", label: "Projecten opgeleverd" },
  { value: 98, suffix: "%", label: "Klanttevredenheid" },
  { value: 12, suffix: "", label: "Landen actief" },
  { value: 6, suffix: "jr", label: "Gem. samenwerking" },
]

export function StatsCounter() {
  return (
    <section className="border-y border-border bg-muted/30 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
