import { Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Nebula Headphones', price: 199, rating: 4.8, color: 'from-fuchsia-500/30 to-violet-700/20' },
  { id: 2, name: 'Aurora Smartwatch', price: 249, rating: 4.7, color: 'from-cyan-400/30 to-blue-700/20' },
  { id: 3, name: 'Quasar Keyboard', price: 159, rating: 4.9, color: 'from-emerald-400/30 to-teal-700/20' },
  { id: 4, name: 'Photon Speaker', price: 129, rating: 4.6, color: 'from-amber-400/30 to-pink-700/20' },
  { id: 5, name: 'Ion Backpack', price: 139, rating: 4.5, color: 'from-indigo-400/30 to-purple-700/20' },
  { id: 6, name: 'Pulse Mouse', price: 79, rating: 4.7, color: 'from-rose-400/30 to-purple-700/20' },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trending products</h2>
            <p className="mt-3 text-zinc-400">Curated picks designed to shine in your setup.</p>
          </div>
          <a href="#shop" className="hidden rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15 md:inline-block">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 transition hover:border-white/20">
              <div className={`relative h-56 w-full bg-gradient-to-br ${p.color}`}>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium text-white">{p.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-amber-400">
                      <Star className="h-4 w-4 fill-amber-400" />
                      <span className="text-sm text-amber-300">{p.rating}</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/5 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/10">${p.price}</div>
                </div>
                <button className="mt-4 w-full rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
