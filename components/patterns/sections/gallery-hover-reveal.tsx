/**
 * Grid tiles that zoom their image and slide a caption up on hover.
 * Swap the gradient divs for real images/Next <Image> in production.
 */

const ITEMS = [
  { title: "Havenlicht", tag: "Branding", gradient: "from-orange-400/40 to-rose-500/30" },
  { title: "Norrland", tag: "Product", gradient: "from-sky-400/40 to-indigo-500/30" },
  { title: "Duinpost", tag: "Web", gradient: "from-emerald-400/40 to-teal-500/30" },
  { title: "Kaimuur", tag: "Identity", gradient: "from-fuchsia-400/40 to-purple-500/30" },
]

export function GalleryHoverReveal() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <a
            key={item.title}
            href="#"
            data-cursor="hover"
            className="group relative aspect-4/3 overflow-hidden rounded-2xl"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 ease-out group-hover:scale-110`}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 text-white transition-transform duration-500 ease-out group-hover:translate-y-0">
              <p className="text-xs tracking-widest text-white/70 uppercase">{item.tag}</p>
              <p className="text-2xl font-semibold">{item.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
