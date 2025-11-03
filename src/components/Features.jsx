import { Shield, Truck, Star } from 'lucide-react';

const features = [
  {
    title: 'Secure & Trusted',
    desc: 'Encrypted payments and verified vendors keep every purchase safe.',
    icon: Shield,
    color: 'from-emerald-400/30 to-emerald-600/20',
  },
  {
    title: 'Fast Worldwide Shipping',
    desc: 'Global logistics with real‑time tracking for seamless delivery.',
    icon: Truck,
    color: 'from-cyan-400/30 to-blue-600/20',
  },
  {
    title: 'Top‑Rated Quality',
    desc: 'Thousands of 5‑star reviews from customers who love our products.',
    icon: Star,
    color: 'from-amber-400/30 to-pink-600/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built for modern commerce</h2>
          <p className="mt-3 text-zinc-400">
            A refined shopping experience that blends performance, security, and style.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition hover:border-white/20">
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${f.color} blur-2xl`} />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
