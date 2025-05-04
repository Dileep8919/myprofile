import { Github, Linkedin, Mail } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Dileep Kumar Gurrapu
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Frontend Developer | React.js Specialist
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        <SocialLink href="https://github.com/Dileep8919" icon={<Github />} label="GitHub" />
        <SocialLink href="mailto:gurrapudileepkumar7@gmail.com" icon={<Mail />} label="Email" />
        <SocialLink href="https://www.linkedin.com/in/gurrapu-dileep-kumar-39b198178" icon={<Linkedin />} label="LinkedIn" />
      </div>

      <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-lg mb-12">
        Passionate Frontend Developer with 3+ years of experience building scalable, user-friendly web applications using React.js and modern frontend technologies. I love crafting responsive interfaces and solving complex UI challenges.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left text-gray-700 dark:text-gray-300">
          <SkillCategory title="Frontend" skills={["React.js", "JavaScript", "HTML", "CSS", "jQuery"]} />
          <SkillCategory title="Backend" skills={["Node.js", "Java"]} />
          <SkillCategory title="Tools" skills={["Git", "VS Code", "Eclipse", "AWS", "Azure"]} />
        </div>
      </section>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}