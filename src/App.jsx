import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Background texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black" />

      <Navbar />

      <main className="relative z-0">
        <Hero3D />
        <Features />
        <ProductGrid />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-zinc-400 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Nebula Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
