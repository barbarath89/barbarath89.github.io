"use client"

/**
 * Button that pulls toward the cursor within its bounds, then springs
 * back on leave. Pair with CustomCursor (data-cursor="hover" is set
 * automatically) for the full effect.
 */

import * as React from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

export function MagneticButton({
  children,
  className,
  strength = 0.4,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: () => void
}) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (prefersReducedMotion) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      data-cursor="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        className
      )}
    >
      {children}
    </motion.button>
  )
}
