"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData, coreStack, domainExpertise } from "../data";
import { ChevronRight, Zap } from "lucide-react";

const levelColors: Record<string, string> = {
  Expert: "bg-primary-500/15 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 border-primary-500/30",
  Advanced: "bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/25",
  Intermediate: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
  Beginner: "bg-slate-500/5 text-slate-500 dark:text-slate-400 border-slate-500/15",
};

const levelBarWidth: Record<string, string> = {
  Expert: "100%",
  Advanced: "85%",
  Intermediate: "65%",
  Beginner: "40%",
};

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [activeCategory, setActiveCategory] = useState(0);
  const category = skillsData[activeCategory];

  return (
    <section id="skills" className="py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary-500 font-medium mb-3">
            Tech stack
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="gradient-text">Skills &amp; Expertise</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Backend-first with strong foundations across databases, messaging, and observability.
          </p>
        </motion.div>

        {/* Core stack – at a glance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.5 }}
          className="mb-10 md:mb-12"
        >
          <p className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3 font-medium">
            Core stack
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {coreStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.05 + i * 0.02, duration: 0.3 }}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600/60 hover:border-primary-500/40 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* What I do – domain expertise */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="mb-10 md:mb-12"
        >
          <p className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4 font-medium flex items-center gap-2">
            <Zap size={12} className="text-primary-500" />
            What I do
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domainExpertise.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.14 + i * 0.04, duration: 0.4 }}
                className="rounded-xl border border-slate-200 dark:border-slate-600/50 bg-white dark:bg-slate-700/30 p-4 hover:border-primary-500/25 transition-colors shadow-sm dark:shadow-none"
              >
                <span className="text-xl mb-2 block" aria-hidden>{domain.icon}</span>
                <h3 className="font-semibold text-slate-800 dark:text-white text-sm mb-1.5">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {domain.short}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech & tools – category filter + grid */}
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3 font-medium">
            By category
          </p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-thin"
            style={{ scrollbarWidth: "thin" }}
          >
            {skillsData.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === i
                    ? "bg-primary-500/20 text-primary-300 border border-primary-500/40"
                    : "bg-slate-100 dark:bg-slate-700/40 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                <span aria-hidden>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Skills grid with level bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.3 }}
                  className="group rounded-xl border border-slate-200 dark:border-slate-600/50 bg-white dark:bg-slate-700/30 hover:border-primary-500/30 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200 p-4 shadow-sm dark:shadow-none"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-semibold text-slate-800 dark:text-white truncate">
                      {skill.name}
                    </p>
                    <span
                      className={`flex-shrink-0 px-2.5 py-0.5 rounded-md text-xs font-medium border ${levelColors[skill.level] ?? levelColors.Intermediate}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-slate-200 dark:bg-slate-600/70 overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: levelBarWidth[skill.level] ?? "65%" }}
                      transition={{ delay: 0.1 + idx * 0.02, duration: 0.5, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-500"
                    />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6 flex items-center justify-center gap-1"
        >
          <ChevronRight size={14} className="rotate-90" />
          Tap a category to filter skills
        </motion.p>
      </div>
    </section>
  );
}
