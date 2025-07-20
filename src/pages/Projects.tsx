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
  title: string; // This will now be a generic descriptor, not a product name
  description: string;
  technologies: string[];
  github?: string; // These will likely remain empty if projects are internal/confidential
  demo?: string;   // These will likely remain empty if projects are internal/confidential
  image?: string;
}

const projects: Project[] = [
  {
    // Original Title: "Cisco TechZone"
    title: "Internal Enterprise Content Management Platform", // More generic, descriptive title
    description: "Developed and maintained a large-scale internal platform for over 100K enterprise employees to create, review, and publish technical articles and knowledge base content. Integrated complex content management workflows, role-based access control, and ensured responsive design for diverse devices.",
    technologies: ["React", "JavaScript", "jQuery", "FreeMarker"],
    github: "", // Likely remains empty
    demo: ""    // Likely remains empty
  },
  {
    // Original Title: "SAP Public Community"
    title: "Public Knowledge Sharing & Community Portal", // More generic, descriptive title
    description: "Contributed significantly to the UI development of a public-facing platform designed for users to collaborate, create documents, post questions, and engage in product-related discussions. Focused on enhancing user interface, ensuring high accessibility standards (WCAG 2.1), and implementing robust responsive design principles.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    github: "", // Likely remains empty
    demo: ""    // Likely remains empty
  },
  {
    // Original Title: "Security Publish (Migration Project)"
    title: "Legacy System Modernization (JSP to React/TypeScript)", // Emphasizes the migration and tech stack
    description: "Led the migration of a critical legacy JSP-based publishing module to a modern React and TypeScript stack. This involved refactoring existing functionalities to improve maintainability, performance, and scalability for publishing multilingual technical articles (e.g., Japanese to English) within a large enterprise knowledge platform.",
    technologies: ["React", "TypeScript", "JSP (legacy)"],
    github: "", // Likely remains empty
    demo: ""    // Likely remains empty
  },
  {
    // Original Title: "Label Manager (TechZone Module)"
    title: "Internal Taxonomy & Content Categorization Tool", // Describes the function
    description: "Designed and implemented a self-contained React module for managing enterprise-wide content labels and taxonomies. This tool facilitated efficient keyword-based content categorization, significantly reducing manual tagging overhead and improving internal content discoverability and searchability across various teams.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "", // Likely remains empty
    demo: ""    // Likely remains empty
  },
  // Adding the e-commerce project from your resume as an example
  {
    title: "E-commerce Platform UI Development",
    description: "Contributed to the frontend development of a high-traffic e-commerce platform. Developed core homepage layouts and various reusable components to enhance mobile responsiveness, optimize user engagement, and integrate seamlessly with backend RESTful APIs for dynamic content.",
    technologies: ["React.js", "JavaScript", "Bootstrap", "HTML5", "CSS3", "REST APIs"],
    github: "",
    demo: ""
  },
  // Adding the deployment management from your resume as an example (could be a project or part of one)
  {
    title: "Automated & Manual Deployment Workflow Setup",
    description: "Engineered and managed deployment processes for web applications, utilizing both automated pipelines (triggered by Git repository updates) and manual procedures. Handled the deployment of Maven-built WAR files to Tomcat servers using tools like FileZilla and mRemoteNG, ensuring smooth and consistent application delivery across different environments.",
    technologies: ["Git", "Maven", "Tomcat", "FileZilla", "mRemoteNG", "CI/CD"],
    github: "",
    demo: ""
  }
];

// ... (ProjectCard component remains the same)
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