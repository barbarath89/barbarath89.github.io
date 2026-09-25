"use client"

/**
 * Floating pill nav that condenses (padding + blur/opacity) once the
 * page scrolls past 40px. Works well over any hero.
 */

import * as React from "react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { cn } from "@/lib/utils"

export function NavGlass({
  links = ["Werk", "Studio", "Diensten", "Contact"],
}: {
  links?: string[]
}) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      animate={{ paddingTop: scrolled ? 12 : 24 }}
    >
      <div
        className={cn(
          "flex w-full max-w-3xl items-center justify-between rounded-full border border-border/50 px-6 py-3 backdrop-blur-xl transition-all duration-300",
          scrolled ? "bg-background/70 shadow-lg shadow-black/5" : "bg-background/30"
        )}
      >
        <span className="text-sm font-semibold tracking-tight">Studio.</span>
        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              data-cursor="hover"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#"
          data-cursor="hover"
          className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
        >
          Contact
        </a>
      </div>
    </motion.header>
  )
}
