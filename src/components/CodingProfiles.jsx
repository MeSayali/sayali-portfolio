import React from "react";
import { Github, Terminal, Linkedin } from "lucide-react";
import { Reveal } from "./ui";
import { CODING_PROFILES } from "../data/content";

const ICONS = { GitHub: Github, LeetCode: Terminal, LinkedIn: Linkedin };

export default function CodingProfiles({ reduceMotion }) {
  return (
    <section className="px-4 sm:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal reduceMotion={reduceMotion}>
          <h2 className="text-3xl font-semibold mb-10 font-display text-ink">Find me online</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {CODING_PROFILES.map((c, i) => {
            const Icon = ICONS[c.name] || Github;
            return (
              <Reveal key={c.name} delay={i * 70} reduceMotion={reduceMotion}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-gradient-to-b from-surfaceAlt to-surface border border-white/10"
                >
                  <Icon size={20} className="text-gold mb-3" />
                  <h4 className="font-medium mb-1 text-ink">{c.name}</h4>
                  <p className="text-xs text-muted">{c.note}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
