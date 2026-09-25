/**
 * Infinite horizontal marquee via a duplicated track + CSS keyframe
 * (see `marquee` keyframes in globals.css). Pauses on hover by default.
 */

import { cn } from "@/lib/utils"

export function Marquee({
  children,
  className,
  durationSeconds = 30,
  reverse = false,
  pauseOnHover = true,
}: {
  children: React.ReactNode
  className?: string
  durationSeconds?: number
  reverse?: boolean
  pauseOnHover?: boolean
}) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center gap-8 pr-8",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `marquee ${durationSeconds}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
