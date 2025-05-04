import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h1>
      
      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Cisco TechZone",
    description: "An internal platform for Cisco employees to write, review, and publish technical articles. Integrated content management, user roles, and responsive design.",
    technologies: ["React", "JavaScript", "jQuery", "FreeMarker"],
    github: "", // Add link if available
    demo: ""
  },
  {
    title: "SAP Public Community",
    description: "A public platform for users to create documents, post questions, and engage in product-related discussions. Focused on UI, accessibility, and responsive design.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    github: "", // Add link if available
    demo: ""
  },
  {
    title: "Security Publish (Migration Project)",
    description: "Migrated a legacy JSP-based module to a modern React + TypeScript stack. Focused on publishing translated Japanese articles under TechZone.",
    technologies: ["React", "TypeScript", "JSP (legacy)"],
    github: "", // Add link if available
    demo: ""
  },
  {
    title: "Label Manager (TechZone Module)",
    description: "A self-contained module for managing community labels within TechZone. Includes label creation, editing, and seamless platform integration.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "", // Add link if available
    demo: ""
  }
];

function ProjectCard({ title, description, technologies, github, demo, image }: Project) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}