
import React, {useState} from 'react'
import { ArrowUpRight, X, ExternalLink, Smartphone } from "lucide-react";

export default function ProjectsCards({projects, Reveal}) {
    const [activeProject, setActiveProject] = useState(null);

  const closeModal = () => {
    setActiveProject(null);
  };


    return (
<>
{activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-8"
          onClick={closeModal}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--secondary-color)] border border-white/10 rounded-2xl shadow-2xl animate-[fadeIn_0.2s_ease-out]"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-gray-400 hover:text-[var(--primary-color)] hover:bg-black/60 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Project Image */}
            <div className="h-72 bg-[var(--secondary-color)]/80 flex items-center justify-center border-b border-white/5 overflow-hidden py-4">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="h-full w-auto max-w-full object-contain"
              />
            </div>

            {/* Project Information */}
            <div className="p-7 sm:p-9">
              <span className="text-xs tracking-widest text-[var(--primary-color)]">
                {activeProject.tag}
              </span>

              <h2 className="text-3xl font-bold mt-2 mb-4">
                {activeProject.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-7">
                {activeProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-7">
                <h3 className="text-sm font-semibold text-white mb-3">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {activeProject.features && (
                <div className="mb-7">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Key Features
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--primary-color)] hover:brightness-110 transition-all px-5 py-3 rounded-lg font-semibold text-sm"
                  >
                    View Web App
                    <ExternalLink size={16} />
                  </a>
                )}

                {activeProject.apk && (
                  <a
                    href={activeProject.apk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all px-5 py-3 rounded-lg font-semibold text-sm"
                  >
                    <Smartphone size={16} />
                    Download APK
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                    {projects.map((project, i) => (
                      <Reveal key={project.title} delay={i * 120}>
                        <div className="group bg-[var(--secondary-color)]/40 border border-white/5 rounded-2xl overflow-hidden hover:border-[var(--primary-color)]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                          <div className="aspect-video bg-[var(--secondary-color)] flex items-center justify-center border-b border-white/5">
                            <span className="text-gray-500 text-sm">
                              <img src={project.thumbnailimage} alt="" />
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
        
                          <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[var(--primary-color)] transition-colors text-left"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </button>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  </>
    )
}