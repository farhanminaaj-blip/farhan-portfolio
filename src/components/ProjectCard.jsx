import React from 'react'

function ProjectCard({ project, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="project-card group cursor-pointer rounded-lg overflow-hidden border border-muted hover:border-foreground/30 dark:hover:border-white/60 transition bg-muted/30 dark:bg-muted/10 hover:bg-muted/50 hover:shadow-md fade-in break-words"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        {/* overlay to make hover visible over images */}
        <div className="absolute inset-0 pointer-events-none bg-transparent group-hover:bg-black/20 dark:group-hover:bg-white/30 transition" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-foreground/80 dark:group-hover:text-black transition break-words">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 break-words">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-background rounded border border-muted/50 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
