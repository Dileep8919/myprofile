import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Projects
      </h1>
      
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
    github: "",
    demo: ""
  },
  {
    title: "SAP Public Community",
    description: "A public platform for users to create documents, post questions, and engage in product-related discussions. Focused on UI, accessibility, and responsive design.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    github: "",
    demo: ""
  },
  {
    title: "Security Publish (Migration Project)",
    description: "Migrated a legacy JSP-based module to a modern React + TypeScript stack. Focused on publishing translated Japanese articles under TechZone.",
    technologies: ["React", "TypeScript", "JSP (legacy)"],
    github: "",
    demo: ""
  },
  {
    title: "Label Manager (TechZone Module)",
    description: "A self-contained module for managing community labels within TechZone. Includes label creation, editing, and seamless platform integration.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "",
    demo: ""
  }
];

function ProjectCard({ title, description, technologies, github, demo, image }: Project) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full text-xs font-medium"
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
              className="flex items-center gap-2 text-indigo-500 hover:text-pink-500 dark:text-indigo-400 dark:hover:text-pink-400 transition-colors"
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
              className="flex items-center gap-2 text-indigo-500 hover:text-pink-500 dark:text-indigo-400 dark:hover:text-pink-400 transition-colors"
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
