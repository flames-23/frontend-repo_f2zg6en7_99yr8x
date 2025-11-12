import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Capabilities, CaseStudies, Process, Contact } from './components/Sections';

function App() {
  return (
    <div className="bg-[#0B0F14] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <CaseStudies />
        <Process />
        <Contact />
        <footer className="border-t border-white/10 bg-[#0B0F14] text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Ahmad — Built with care.</p>
            <nav className="flex items-center gap-4 text-sm">
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#process" className="hover:text-white">Process</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
