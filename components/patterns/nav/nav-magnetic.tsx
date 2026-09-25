"use client"

/**
 * Bare nav where every link individually pulls toward the cursor.
 * Subtle strength (0.5) keeps it readable rather than gimmicky.
 */

import * as React from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

function MagneticLink({
  children,
  href = "#",
}: {
  children: React.ReactNode
  href?: string
}) {
  const ref = React.useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.5)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="text-sm font-medium text-foreground"
    >
      {children}
    </motion.a>
  )
}

export function NavMagnetic({
  links = ["Werk", "Studio", "Diensten", "Contact"],
}: {
  links?: string[]
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-6">
      <span className="text-sm font-semibold tracking-tight">Studio.</span>
      <nav className="hidden items-center gap-10 sm:flex">
        {links.map((link) => (
          <MagneticLink key={link}>{link}</MagneticLink>
        ))}
      </nav>
      <MagneticLink>Menu</MagneticLink>
    </header>
  )
}
