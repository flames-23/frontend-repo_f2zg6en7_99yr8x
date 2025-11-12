import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0F14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Available for high‑impact engagements
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Ahmad — Principal AI Engineer, Data Science Leader, and Product Strategist
          </h1>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            I design, build, and ship AI systems that move metrics — from data architecture to executive‑level storytelling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-cyan-400/20 text-cyan-200 hover:text-white hover:bg-cyan-400/30 border border-cyan-300/20 px-5 py-2.5 transition">
              Book a Strategy Call
            </a>
            <a href="#work" className="inline-flex items-center rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 px-5 py-2.5 transition">
              View Case Studies
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F14]/40 via-[#0B0F14]/50 to-[#0B0F14]" />
    </section>
  );
}
