import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Reveal } from "./ui";
import { PROFILE } from "../data/content";

export default function Contact({ reduceMotion }) {
  const items = [
    { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: PROFILE.phone, href: `tel:${PROFILE.phoneHref}` },
    { icon: MapPin, label: PROFILE.location, href: null },
    { icon: Github, label: "github.com/MeSayali", href: PROFILE.github },
    { icon: Linkedin, label: "linkedin.com/in/sayali-pawar", href: PROFILE.linkedin },
  ];

  return (
    <section id="contact" className="px-4 sm:px-8 py-24 bg-white/[0.015]">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal reduceMotion={reduceMotion}>
          <h2 className="text-3xl font-semibold mb-3 font-display text-ink">Let's build something</h2>
          <p className="mb-10 text-sm text-muted">Open to Software Development Engineer opportunities — reach out any time.</p>
        </Reveal>

        <Reveal reduceMotion={reduceMotion} className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
          {items.map((c) => (
            <div key={c.label} className="flex items-center gap-3 p-3 rounded-xl border border-white/10">
              <div className="p-2.5 rounded-lg shrink-0 border border-white/10">
                <c.icon size={15} className="text-gold" />
              </div>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm text-left text-[#B8C2E0]">
                  {c.label}
                </a>
              ) : (
                <span className="text-sm text-left text-[#B8C2E0]">{c.label}</span>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
