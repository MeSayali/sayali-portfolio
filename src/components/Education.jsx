import React from "react";
import { GraduationCap } from "lucide-react";
import { Reveal, Card, Tag } from "./ui";
import { EDUCATION } from "../data/content";

export default function Education({ reduceMotion }) {
  return (
    <section id="education" className="px-4 sm:px-8 py-24 bg-white/[0.015]">
      <div className="max-w-4xl mx-auto">
        <Reveal reduceMotion={reduceMotion}>
          <h2 className="text-3xl font-semibold mb-10 font-display text-ink">Education</h2>
        </Reveal>
        <div className="space-y-6">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.school} delay={i * 100} reduceMotion={reduceMotion}>
              <Card className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl shrink-0 bg-blue/10">
                  <GraduationCap size={20} className="text-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-medium text-ink">{e.school}</h3>
                    {e.current && <Tag>current</Tag>}
                  </div>
                  <p className="text-sm mb-1 text-muted">{e.degree}</p>
                  <p className="text-sm font-mono text-gold">
                    {e.period} · {e.detail}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
