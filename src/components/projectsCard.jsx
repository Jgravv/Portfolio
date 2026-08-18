
import React, {useState} from 'react'
import { ArrowUpRight } from "lucide-react";

export default function ProjectsCards({projects, Reveal}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                      <Reveal key={project.title} delay={i * 120}>
                        <div className="group bg-[var(--secondary-color)]/40 border border-white/5 rounded-2xl overflow-hidden hover:border-[var(--primary-color)]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                          <div className="aspect-video bg-[var(--secondary-color)] flex items-center justify-center border-b border-white/5">
                            <span className="text-gray-500 text-sm">
                              <img src={project.image} alt="" />
                            </span>
                          </div>
        
                          <div className="p-6 flex flex-col flex-1">
                            <span className="text-xs tracking-widest text-[var(--primary-color)] mb-2">
                              {project.tag}
                            </span>
                            <h3 className="text-xl font-bold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                              {project.description}
                            </p>
        
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
        
                            <a
                              href="#"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[var(--primary-color)] transition-colors"
                            >
                              View Project <ArrowUpRight size={16} />
                            </a>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
    )
}