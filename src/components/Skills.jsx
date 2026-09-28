import React from "react";
import { Code2, Globe, Terminal, Database, Sparkles, Cpu } from "lucide-react";
import { Reveal, Card, Tag } from "./ui";
import { SKILLS } from "../data/content";

const ICONS = {
  Languages: Code2,
  Frontend: Globe,
  Backend: Terminal,
  Databases: Database,
  AI: Sparkles,
  Tools: Cpu,
};

export default function Skills({ reduceMotion }) {
  return (
    <section id="skills" className="px-4 sm:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal reduceMotion={reduceMotion}>
          <h2 className="text-3xl font-semibold mb-10 font-display text-ink">Skills</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => {
            const Icon = ICONS[s.cat] || Code2;
            return (
              <Reveal key={s.cat} delay={i * 70} reduceMotion={reduceMotion}>
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={17} className="text-gold" />
                    <h3 className="font-medium text-ink">{s.cat}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <Tag key={it}>{it}</Tag>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
