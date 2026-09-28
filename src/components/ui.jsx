import React from "react";
import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "", reduceMotion }) {
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Card({ children, className = "", ...rest }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-gradient-to-b from-surfaceAlt to-surface shadow-[0_8px_24px_rgba(0,0,0,0.18)] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-md font-mono text-[#B8C2E0] bg-white/[0.04] border border-white/10">
      {children}
    </span>
  );
}

export function GradientText({ children, className = "" }) {
  return (
    <span className={`bg-gradient-to-r from-blue to-gold bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
