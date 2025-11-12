import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-semibold tracking-tight text-lg">Ahmad</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#process" className="hover:text-white transition">Process</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-cyan-400/20 text-cyan-200 hover:text-white hover:bg-cyan-400/30 border border-cyan-300/20 px-4 py-1.5 transition">Book a Strategy Call</a>
        </nav>
        <button className="md:hidden p-2 text-slate-200" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
