"use client"

/**
 * List of project rows where a floating preview image tracks the
 * cursor while a row is hovered. Signature agency-site move — swap
 * the gradient preview for a real thumbnail per item.
 */

import * as React from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

const ITEMS = [
  { title: "Havenlicht", year: "2025", gradient: "from-orange-400 to-rose-500" },
  { title: "Norrland", year: "2025", gradient: "from-sky-400 to-indigo-500" },
  { title: "Duinpost", year: "2024", gradient: "from-emerald-400 to-teal-500" },
  { title: "Kaimuur", year: "2024", gradient: "from-fuchsia-400 to-purple-500" },
]

export function GalleryCursorFollow() {
  const [active, setActive] = React.useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 })

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReducedMotion) return
    x.set(e.clientX)
    y.set(e.clientY)
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative py-20">
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className={cn(
            "pointer-events-none fixed z-50 h-56 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl transition-opacity duration-300",
            active !== null ? "opacity-100" : "opacity-0"
          )}
          style={{ left: springX, top: springY }}
        >
          {active !== null && (
            <div className={`h-full w-full bg-gradient-to-br ${ITEMS[active].gradient}`} />
          )}
        </motion.div>
      )}

      <div className="mx-auto max-w-3xl divide-y divide-border px-6">
        {ITEMS.map((item, i) => (
          <a
            key={item.title}
            href="#"
            data-cursor="hover"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="flex items-center justify-between py-6 text-3xl font-medium tracking-tight transition-colors hover:text-primary sm:text-4xl"
          >
            {item.title}
            <span className="text-sm text-muted-foreground">{item.year}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
