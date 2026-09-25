/**
 * Testimonial cards riding the shared Marquee primitive. Reads as
 * "always full" regardless of how many quotes you actually have.
 */

import { Marquee } from "@/components/patterns/interactions/marquee"

const TESTIMONIALS = [
  { quote: "Ze begrijpen product net zo goed als design.", author: "Lotte de Vries", role: "CEO, Norrland" },
  { quote: "Sneller en scherper dan elk bureau dat we eerder hadden.", author: "Milan Bakker", role: "Founder, Havenlicht" },
  { quote: "De details maken het verschil — dit voelt premium.", author: "Sanne Kroon", role: "Head of Design, Duinpost" },
  { quote: "Van concept tot livegang in drie weken.", author: "Rik Jansen", role: "CTO, Kaimuur" },
]

export function TestimonialMarquee() {
  return (
    <section className="py-20">
      <Marquee durationSeconds={40}>
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.author}
            className="w-[380px] shrink-0 rounded-2xl border border-border bg-card p-6"
          >
            <blockquote className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{t.author}</span> — {t.role}
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  )
}
