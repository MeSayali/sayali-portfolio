import React, { useEffect, useState } from "react";
import { Download, Contrast, Zap, Menu, X } from "lucide-react";
import { PROFILE } from "../data/content";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ reduceMotion, setReduceMotion, highContrast, setHighContrast }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav
      className="sticky top-0 z-40 px-4 sm:px-8 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(14px)" : "none",
        background: scrolled ? "rgba(10,14,20,0.75)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white font-display bg-gradient-to-br from-blue to-indigo">
            SP
          </div>
          <span className="hidden sm:block text-sm font-medium text-ink font-display">Sayali Pawar</span>
        </div>

        <div className="hidden md:flex items-center gap-1 rounded-lg p-1 border border-white/10 bg-white/[0.03]">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                active === s.id ? "text-ink bg-indigo/20" : "text-muted"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHighContrast((v) => !v)}
            title="Toggle high contrast"
            aria-pressed={highContrast}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs border border-white/10 ${
              highContrast ? "text-gold" : "text-muted"
            }`}
          >
            <Contrast size={14} /> Contrast
          </button>
          <button
            onClick={() => setReduceMotion((v) => !v)}
            title="Toggle reduced motion"
            aria-pressed={reduceMotion}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs border border-white/10 ${
              reduceMotion ? "text-gold" : "text-muted"
            }`}
          >
            <Zap size={14} /> Motion
          </button>
          <a
            href={PROFILE.resumeFile}
            download="Sayali_Pawar_Resume.pdf"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-bg bg-gradient-to-r from-blue to-gold"
          >
            <Download size={14} /> Resume
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={20} color="#F0F2F7" /> : <Menu size={20} color="#F0F2F7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 pb-4">
          {SECTIONS.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="text-left px-3 py-2 rounded-md text-sm text-ink">
              {s.label}
            </button>
          ))}
          <a
            href={PROFILE.resumeFile}
            download="Sayali_Pawar_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-bg bg-gradient-to-r from-blue to-gold w-fit mt-1"
          >
            <Download size={14} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
}
