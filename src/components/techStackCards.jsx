import React, {useState} from 'react'
import { ArrowUpRight, X } from "lucide-react";
export default function TechStackCards ({ techStacks,
    Reveal}) {

      const [activeStack, setActiveStack] = useState(null);

    
    return (
        <>
          {activeStack && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          onClick={() => setActiveStack(null)}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[var(--secondary-color)] border border-white/10 rounded-2xl p-8 shadow-2xl animate-[fadeIn_0.2s_ease-out]"
          >
            <button
              onClick={() => setActiveStack(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-[var(--primary-color)] transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 flex items-center justify-center">
                {(() => {
                  const Icon = techStacks[activeStack].icon;
                  return <Icon size={18} className="text-[var(--primary-color)]" />;
                })()}
              </div>
              <h4 className="text-2xl font-bold">
                {techStacks[activeStack].title}
              </h4>
            </div>
            <p className="text-gray-400 text-sm mb-8">
              {techStacks[activeStack].blurb}
            </p>

            <div className="space-y-5">
              {techStacks[activeStack].skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--primary-color)] transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(techStacks).map(([key, stack], i) => {
                const Icon = stack.icon;
                return (
                  <Reveal key={key} delay={i * 100}>
                    <button
                      onClick={() => setActiveStack(key)}
                      className="group w-full text-left bg-[var(--secondary-color)]/40 border border-white/5 rounded-2xl p-6 hover:border-[var(--primary-color)]/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 flex items-center justify-center mb-5 group-hover:bg-[var(--primary-color)]/20 transition-colors">
                        <Icon size={22} className="text-[var(--primary-color)]" />
                      </div>
                      <h4 className="text-lg font-bold mb-1">{stack.title}</h4>
                      <p className="text-gray-400 text-sm mb-4">{stack.blurb}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-[var(--primary-color)] transition-colors">
                        View skills <ArrowUpRight size={14} />
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
        </>
    )
}