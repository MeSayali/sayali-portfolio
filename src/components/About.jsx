import React from "react";
import { Reveal, Card } from "./ui";
import { ABOUT } from "../data/content";

export default function About({ reduceMotion }) {
  return (
    <section id="about" className="px-4 sm:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <Reveal reduceMotion={reduceMotion}>
          <h2 className="text-3xl font-semibold mb-6 font-display text-ink">About me</h2>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className={`text-lg leading-relaxed text-[#B8C2E0] ${i === ABOUT.paragraphs.length - 1 ? "mb-10" : "mb-4"}`}>
              {p}
            </p>
          ))}
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {ABOUT.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} reduceMotion={reduceMotion}>
              <Card className="p-5 text-center">
                <p className="text-2xl font-semibold mb-1 font-display text-gold">{s.value}</p>
                <p className="text-xs text-muted">{s.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
