import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-muted">© 2026 {PROFILE.name} — built with intent, not templates.</p>
        <div className="flex gap-3">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-muted">
            <Github size={16} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="text-muted">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
