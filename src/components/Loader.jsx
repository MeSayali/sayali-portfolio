import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../data/content";

export default function Loader({ onDone, reduceMotion }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      onDone();
      return;
    }
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setTimeout(onDone, 300);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 140);
    return () => clearInterval(id);
  }, [onDone, reduceMotion]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 bg-bg"
    >
      <div className="mb-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 font-display bg-gradient-to-r from-blue to-gold bg-clip-text text-transparent">
          {PROFILE.name}
        </h1>
        <p className="text-xs uppercase text-muted tracking-[0.16em]">Software Engineer</p>
      </div>
      <div className="w-full max-w-xs h-1 rounded-full overflow-hidden bg-surfaceAlt">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue to-gold"
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.15 }}
        />
      </div>
      <p className="mt-3 text-xs text-muted">{Math.min(Math.round(progress), 100)}%</p>
    </motion.div>
  );
}
