import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background gradient accents that don't block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/30 via-fuchsia-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-cyan-400/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Elevate your store with a futuristic glow
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Premium products presented with an immersive 3D experience. Built for performance, crafted for conversion, and styled for the dark.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 px-5 py-3 text-sm font-medium transition hover:bg-zinc-100">
              Explore products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15">
              Why choose us
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              Live 3D interaction
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-violet-400" />
              Ultra-fast checkout
            </div>
          </div>
        </div>

        {/* 3D Scene */}
        <div className="relative z-0 h-[55vh] w-full rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl shadow-violet-900/40 md:h-[70vh]">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
