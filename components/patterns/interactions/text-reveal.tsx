"use client"

/**
 * Word-by-word clip-reveal on scroll into view. The signature
 * "editorial" text animation used across most award-winning sites.
 */

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

export function TextReveal({
  text,
  className,
  as: Tag = "p",
  delay = 0,
}: {
  text: string
  className?: string
  as?: React.ElementType
  delay?: number
}) {
  const words = text.split(" ")
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <Tag className={cn(className)}>{text}</Tag>
  }

  return (
    <Tag className={cn(className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-1">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
