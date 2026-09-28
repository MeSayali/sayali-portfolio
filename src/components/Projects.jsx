import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { Reveal, Card, Tag } from "./ui";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../data/content";

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl p-7 bg-surfaceAlt border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs mb-1 font-mono text-gold">{project.tag}</p>
              <h3 className="text-2xl font-semibold font-display text-ink">{project.name}</h3>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg border border-white/10" aria-label="Close">
              <X size={16} color="#F0F2F7" />
            </button>
          </div>
          <p className="text-sm leading-relaxed mb-5 text-[#B8C2E0]">{project.description}</p>
          <p className="text-xs uppercase tracking-wide mb-2 font-mono text-muted">Key features</p>
          <ul className="grid sm:grid-cols-2 gap-1.5 mb-5">
            {project.features.map((f) => (
              <li key={f} className="text-sm flex gap-2 text-[#B8C2E0]">
                <span className="text-blue">›</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <div className="flex gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-ink border border-white/10"
              >
                <Github size={15} /> GitHub
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted border border-dashed border-white/10">
                <Github size={15} /> Repo link coming soon
              </span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-bg bg-gradient-to-r from-blue to-gold"
              >
                <ExternalLink size={15} /> Live demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects({ reduceMotion }) {
  const [active, setActive] = useState(null);
  const colorClass = { blue: "text-blue", indigo: "text-indigo", gold: "text-gold" };

  return (
    <section id="projects" className="px-4 sm:px-8 py-24 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <Reveal reduceMotion={reduceMotion}>
          <h2 className="text-3xl font-semibold mb-2 font-display text-ink">Featured projects</h2>
          <p className="mb-10 text-sm text-muted">Click any project to see the full case study.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} reduceMotion={reduceMotion}>
              <motion.button
                onClick={() => setActive(p)}
                whileHover={reduceMotion ? {} : { y: -4 }}
                className="text-left w-full p-6 rounded-2xl h-full flex flex-col bg-gradient-to-b from-surfaceAlt to-surface border border-white/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-md font-mono bg-white/[0.04] ${colorClass[p.color]}`}>{p.tag}</span>
                  <ExternalLink size={14} className="text-muted" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-display text-ink">{p.name}</h3>
                <p className="text-sm mb-4 flex-1 text-[#AAB3C9]">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>

        <Reveal reduceMotion={reduceMotion}>
          <p className="text-xs uppercase tracking-wide mb-5 font-mono text-muted">Other projects</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OTHER_PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 60} reduceMotion={reduceMotion}>
              <Card className="p-5 h-full flex flex-col">
                <h4 className="font-medium mb-1.5 text-ink">{p.name}</h4>
                <p className="text-sm mb-3 flex-1 text-muted">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <div className="flex gap-3 text-xs font-mono">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gold">
                    <Github size={13} /> code
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gold">
                      <ExternalLink size={13} /> live
                    </a>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
