import React, { useState } from 'react'
import { PROJECTS } from '../data'
import ProjectCard from './ProjectCard'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="container mx-auto py-20 px-4 fade-in">
      <h2 className="w-full text-center font-bold translate-y-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight slide-up">
        Our{' '}
        <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
          latest projects
        </span>
      </h2>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
            <div
              className="project-modal bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
            <button
              onClick={() => setSelectedProject(null)}
              className="project-back-btn mb-4 text-foreground bg-muted/10 px-4 py-2 rounded-lg text-lg font-semibold shadow-sm hover:shadow-md transition flex items-center gap-2"
            >
              ← Back
            </button>
            
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.description}</p>
            
              <div className="mb-6">
              <h4 className="font-semibold mb-3 text-foreground">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.backend && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Backend</h4>
                <p className="text-muted-foreground mb-3 leading-relaxed">{selectedProject.backend.description}</p>

                <div className="mb-3">
                  <h5 className="font-medium mb-2">Backend Tech Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.backend.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">Entry file: {selectedProject.backend.entry}</p>
                {selectedProject.backend.localPath && (
                  <p className="text-sm text-muted-foreground">Local path: <a href={selectedProject.backend.localPath} className="underline">{selectedProject.backend.localPath}</a></p>
                )}
              </div>
            )}

            <div className="flex gap-4 pt-4 border-t border-muted">
              {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-lg font-medium transition bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                >
                  View Code
                </a>
              )}
              {selectedProject.previewUrl && selectedProject.previewUrl !== '#' && (
                <a
                  href={selectedProject.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-lg font-medium transition bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                >
                  Preview
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
