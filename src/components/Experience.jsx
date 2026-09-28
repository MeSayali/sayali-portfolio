import React from "react";
import { Briefcase } from "lucide-react";
import { Reveal, Card, Tag } from "./ui";
import { EXPERIENCE } from "../data/content";

export default function Experience({ reduceMotion }) {
  return (
    <section id="experience" className="px-4 sm:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <Reveal reduceMotion={reduceMotion}>
          <h2 className="text-3xl font-semibold mb-10 font-display text-ink">Experience</h2>
        </Reveal>
        <div className="relative pl-6 sm:pl-8">
          <div className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={exp.role + exp.org} delay={i * 90} reduceMotion={reduceMotion} className="relative">
                <div
                  className="absolute -left-6 sm:-left-8 top-2 w-3 h-3 rounded-full ring-4 ring-bg"
                  style={{ background: i === 0 ? "#D4A657" : "#6C7BD1" }}
                />
                <Card className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-indigo" />
                      <h3 className="font-medium text-ink">{exp.role}</h3>
                    </div>
                    <span className="text-xs font-mono text-gold">{exp.period}</span>
                  </div>
                  <p className="text-sm mb-3 text-muted">
                    {exp.org} · {exp.mode}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {exp.points.map((p) => (
                      <li key={p} className="text-sm flex gap-2 text-[#B8C2E0]">
                        <span className="text-blue">›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
