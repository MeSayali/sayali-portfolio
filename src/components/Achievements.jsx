import React from "react";
import { Award, Star, Code2, Zap } from "lucide-react";
import { Reveal } from "./ui";
import { ACHIEVEMENTS } from "../data/content";

const ICONS = [Award, Award, Award, Star, Code2, Zap];

export default function Achievements({ reduceMotion }) {
  return (
    <section className="px-4 sm:px-8 py-24 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <Reveal reduceMotion={reduceMotion}>
          <h2 className="text-3xl font-semibold mb-10 font-display text-ink">Achievements</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((label, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={label} delay={i * 60} reduceMotion={reduceMotion}>
                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10">
                  <Icon size={17} className="text-blue" />
                  <span className="text-sm text-[#B8C2E0]">{label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
