/**
 * Fixed film-grain texture overlay. Adds tactile depth to flat gradient
 * or dark sections — one of the cheapest ways to stop a site looking
 * "made with a template".
 */

export function GrainOverlay({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-90"
      style={{ opacity }}
    >
      <svg className="h-full w-full">
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={3}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  )
}
