"use client"

/**
 * Monthly/annual toggle where the price digit animates out/in on
 * switch instead of snapping — small detail, disproportionate effect.
 */

import * as React from "react"
import { AnimatePresence, motion } from "motion/react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { MagneticButton } from "@/components/patterns/interactions/magnetic-button"

const PLANS = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 24,
    features: ["1 workspace", "Tot 3 teamleden", "Community support"],
  },
  {
    name: "Pro",
    monthly: 79,
    yearly: 63,
    features: ["Onbeperkt workspaces", "Tot 20 teamleden", "Prioriteit support", "Custom domeinen"],
    featured: true,
  },
  {
    name: "Scale",
    monthly: 199,
    yearly: 159,
    features: ["Alles in Pro", "SSO & audit logs", "Dedicated support", "SLA"],
  },
]

export function PricingToggle() {
  const [yearly, setYearly] = React.useState(false)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simpele prijzen</h2>
          <p className="mt-3 text-muted-foreground">Geen verborgen kosten. Elk moment opzegbaar.</p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 p-1">
            <button
              onClick={() => setYearly(false)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                !yearly ? "bg-background shadow-sm" : "text-muted-foreground"
              )}
            >
              Maandelijks
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                yearly ? "bg-background shadow-sm" : "text-muted-foreground"
              )}
            >
              Jaarlijks <span className="text-emerald-600 dark:text-emerald-400">−20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-3xl border p-8",
                plan.featured
                  ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/10"
                  : "border-border"
              )}
            >
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1 overflow-hidden">
                <span className="text-4xl font-semibold tracking-tight">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={yearly ? "y" : "m"}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-block"
                    >
                      €{yearly ? plan.yearly : plan.monthly}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="text-sm text-muted-foreground">/maand</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <MagneticButton
                className={cn(
                  "mt-8 w-full",
                  !plan.featured && "bg-foreground text-background hover:bg-foreground/90"
                )}
              >
                Kies {plan.name}
              </MagneticButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
