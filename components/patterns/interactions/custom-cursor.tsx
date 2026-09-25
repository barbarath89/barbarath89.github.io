"use client"

/**
 * Awwwards-style custom cursor. Mark any hoverable target with
 * `data-cursor="hover"` to make the cursor grow over it.
 * Hidden automatically on touch devices via `md:block`.
 */

import * as React from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react"

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const [hovering, setHovering] = React.useState(false)
  const [visible, setVisible] = React.useState(false)
  const prefersReducedMotion = useReducedMotion()

  React.useEffect(() => {
    if (prefersReducedMotion) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    document.documentElement.classList.add("custom-cursor-active")

    function handleMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
      const target = e.target as HTMLElement
      setHovering(!!target.closest('[data-cursor="hover"]'))
    }
    function handleLeave() {
      setVisible(false)
    }
    window.addEventListener("mousemove", handleMove)
    document.documentElement.addEventListener("mouseleave", handleLeave)
    return () => {
      document.documentElement.classList.remove("custom-cursor-active")
      window.removeEventListener("mousemove", handleMove)
      document.documentElement.removeEventListener("mouseleave", handleLeave)
    }
  }, [x, y, visible, prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-100 hidden mix-blend-difference md:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={{ width: hovering ? 64 : 10, height: hovering ? 64 : 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </motion.div>
  )
}
