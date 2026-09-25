"use client"

import { ReactLenis } from "lenis/react"

// Read synchronously (not via useState+effect) — this only affects Lenis's
// internal options object, never the rendered JSX, so there's no hydration
// mismatch risk even though the value differs between server (always false)
// and client.
function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const reduced = prefersReducedMotion()

  return (
    <ReactLenis
      root
      options={{
        lerp: reduced ? 1 : 0.1,
        duration: reduced ? 0 : 1.2,
        smoothWheel: !reduced,
      }}
    >
      {children}
    </ReactLenis>
  )
}
