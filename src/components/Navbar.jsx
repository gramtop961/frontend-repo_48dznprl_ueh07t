import { ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-emerald-500 shadow-lg shadow-violet-500/30">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="font-semibold tracking-wide text-white">Nebula Shop</span>
            </div>

            <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>

            <div className="hidden md:block">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20">
                Shop now
              </a>
            </div>

            <button aria-label="Open menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 text-zinc-200 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-3 text-zinc-300">
                <a href="#products" className="hover:text-white">Products</a>
                <a href="#features" className="hover:text-white">Features</a>
                <a href="#about" className="hover:text-white">About</a>
                <a href="#contact" className="hover:text-white">Contact</a>
                <a href="#shop" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20">
                  Shop now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
