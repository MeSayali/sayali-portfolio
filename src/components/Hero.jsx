import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, Github, Linkedin, FileText, Search, GitBranch, Play, Blocks } from "lucide-react";
import { PROFILE, ROLES, TECH_ICONS } from "../data/content";

function useTypewriter(reduceMotion) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(ROLES[roleIdx]);
      return;
    }
    const current = ROLES[roleIdx];
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < current.length) setDisplay(current.slice(0, display.length + 1));
        else setTimeout(() => setDeleting(true), 1100);
      } else {
        if (display.length > 0) setDisplay(display.slice(0, -1));
        else {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, roleIdx, reduceMotion]);

  return display;
}

const CODE_LINES = [
  [["const ", "text-indigo"], ["developer", "text-blue"], [" = {", "text-[#9AA4BC]"]],
  [["  name", "text-blue"], [": ", "text-[#9AA4BC]"], ['"Sayali Pawar"', "text-gold"], [",", "text-[#9AA4BC]"]],
  [["  role", "text-blue"], [": ", "text-[#9AA4BC]"], ['"AI-Powered Full', "text-gold"]],
  [['    Stack Developer"', "text-gold"], [",", "text-[#9AA4BC]"]],
  [["  skills", "text-blue"], [": [", "text-[#9AA4BC]"]],
  [['    "React", "Node.js",', "text-gold"]],
  [['    "MongoDB", "Python"', "text-gold"]],
  [["  ],", "text-[#9AA4BC]"]],
  [["  mindset", "text-blue"], [": ", "text-[#9AA4BC]"], ['"accessibility-first"', "text-gold"], [",", "text-[#9AA4BC]"]],
  [["  alwaysLearning", "text-blue"], [": ", "text-[#9AA4BC]"], ["true", "text-indigo"], [",", "text-[#9AA4BC]"]],
  [["};", "text-[#9AA4BC]"]],
];

function CodeEditorIllustration({ reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="absolute inset-0 m-auto rounded-2xl overflow-hidden flex flex-col shadow-2xl"
      style={{ width: "300px", height: "340px", top: "10%", background: "#12161F", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#181D28] border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
      </div>

      <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-ink bg-surface border-b border-white/10">
        <span className="flex items-center gap-1.5 px-2 py-1 rounded-t-md bg-[#181D28]" style={{ borderTop: "2px solid #D4A657" }}>
          <span className="px-1 rounded text-[9px] font-bold text-[#12161F] bg-[#F0DB4F]">JS</span>
          developer.js
        </span>
      </div>

      <div className="flex flex-1 min-h-0">
        <div className="flex flex-col items-center gap-4 py-4 bg-[#181D28] border-r border-white/10" style={{ width: "36px" }}>
          <FileText size={15} color="#F0F2F7" />
          <Search size={15} color="#8991A6" />
          <GitBranch size={15} color="#8991A6" />
          <Play size={15} color="#8991A6" />
          <Blocks size={15} color="#8991A6" />
        </div>

        <div className="flex-1 px-3 py-3 text-xs leading-relaxed overflow-hidden font-mono">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-muted opacity-50 text-right" style={{ width: "14px", flexShrink: 0 }}>
                {i + 1}
              </span>
              <span>
                {line.map(([txt, cls], j) => (
                  <span key={j} className={cls}>
                    {txt}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-1.5 text-[10px] text-white font-mono bg-blue">
        <span>Ln 11, Col 2 · Spaces: 2 · UTF-8</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
          JavaScript
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero({ reduceMotion }) {
  const display = useTypewriter(reduceMotion);

  return (
    <section id="hero" className="relative overflow-hidden px-4 sm:px-8 pt-16 pb-28 min-h-[92vh] flex items-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at 15% 20%, rgba(64,98,232,0.14), transparent 60%), radial-gradient(560px circle at 85% 75%, rgba(108,123,209,0.10), transparent 60%), radial-gradient(480px circle at 90% 10%, rgba(212,166,87,0.08), transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 border border-white/10 text-gold bg-gold/10">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Open to Software Engineer roles
          </div>
          <h1 className="text-4xl sm:text-6xl leading-[1.05] font-semibold mb-4 font-display text-ink">
            {PROFILE.name}
          </h1>
          <div className="h-8 mb-3">
            <span className="text-lg sm:text-xl font-medium bg-gradient-to-r from-blue to-gold bg-clip-text text-transparent">
              {display}
            </span>
            {!reduceMotion && <span className="ml-0.5 text-gold opacity-70">|</span>}
          </div>
          <p className="text-sm mb-2 text-muted">{PROFILE.title}</p>
          <p className="max-w-md mb-8 text-[#AAB3C9]">{PROFILE.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={PROFILE.resumeFile}
              download="Sayali_Pawar_Resume.pdf"
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-bg bg-gradient-to-r from-blue to-gold"
            >
              <Download size={16} /> Download Resume
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm text-ink border border-white/10"
            >
              View Projects <ChevronRight size={16} />
            </button>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-white/10">
              <Github size={18} color="#F0F2F7" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-white/10">
              <Linkedin size={18} color="#F0F2F7" />
            </a>
          </div>
        </motion.div>

        <div className="relative h-80 hidden md:block">
          <CodeEditorIllustration reduceMotion={reduceMotion} />
          {TECH_ICONS.map((f, i) => (
            <motion.div
              key={f.label}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="absolute w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 shadow-lg border border-white/10 bg-surfaceAlt"
              style={{ top: f.top, left: f.left }}
            >
              <motion.img
                src={f.icon}
                alt={f.label}
                className="w-full h-full object-contain"
                animate={reduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
