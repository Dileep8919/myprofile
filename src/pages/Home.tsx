import { Github, Linkedin, Mail } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
        Dileep Kumar Gurrapu
      </h1>
      {/* --- CHANGE HERE: Removed " | React.js Specialist" --- */}
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Frontend Developer
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        <SocialLink href="https://github.com/Dileep8919" icon={<Github size={28} />} label="GitHub" />
        <SocialLink href="mailto:gurrapudileepkumar7@gmail.com" icon={<Mail size={28} />} label="Email" />
        <SocialLink href="https://www.linkedin.com/in/gurrapu-dileep-kumar-39b198178" icon={<Linkedin size={28} />} label="LinkedIn" />
      </div>

      {/* Updated Professional Summary Text */}
      <p className="max-w-xl mx-auto text-gray-800 dark:text-gray-300 text-lg mb-12">
        Frontend developer with nearly 5 years of experience building scalable applications and optimizing performance for high-impact enterprise platforms. Proficient in React.js, TypeScript, and JavaScript, I've contributed to systems serving 100K+ users, focusing on user experience and reusable component architecture. Proven ability to collaborate cross-functionally in Agile environments.
      </p>

      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
          Technical Skills
        </h2>
        {/* Updated and Expanded Technical Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left text-gray-700 dark:text-gray-300">
          <SkillCategory
            title="Frontend"
            skills={["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive Design", "Context API", "React Hooks", "Redux"]}
          />
          <SkillCategory
            title="Backend & Deployment"
            skills={["REST APIs", "Maven (WAR)", "Tomcat", "Internal CI/CD Tools"]}
          />
          <SkillCategory
            title="Tools & IDEs"
            skills={["VS Code", "Eclipse", "FileZilla", "GitHub Desktop", "mRemoteNG", "Postman", "Chrome DevTools"]}
          />
          <SkillCategory
            title="Version Control & Workflow"
            skills={["Git", "GitHub", "Bitbucket", "Jira"]}
          />
        </div>
      </section>
    </div>
  );
}

// SocialLink component remains the same
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

// SkillCategory component remains the same
function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{title}</h3>
      <ul className="list-disc pl-5 text-left -mt-1">
        {skills.map((skill) => (
          <li key={skill} className="mb-1 text-gray-700 dark:text-gray-300">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}