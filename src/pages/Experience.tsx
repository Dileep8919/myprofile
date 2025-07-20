import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Experience
      </h1>

      <div className="space-y-8">
        {/* Italent Applications Pvt. Ltd. Experience */}
        <ExperienceCard
          title="Software Engineer"
          company="Italent Applications Pvt Ltd"
          period="April 2022 – Sep 2025"
          description="As a Software Engineer, I focus on building scalable and secure web applications with responsive user interfaces for enterprise platforms."
          responsibilities={[
            "Contributed to enterprise-scale frontend development using React.js and TypeScript, building robust and scalable user interfaces.",
            "Collaborated effectively in cross-functional Agile teams, actively participating in code reviews, pull requests, stand-ups, and sprint planning to ensure timely delivery.",
            "Supported deployment workflows using Git, internal CI/CD tools, and manual deployment tools (e.g., FileZilla, mRemoteNG, Tomcat) to ensure seamless application delivery."
          ]}
        />

        {/* Kuncham Software Solutions Pvt Ltd. Experience */}
        <ExperienceCard
          title="Associate Software Engineer"
          company="Kuncham Software Solutions Pvt Ltd."
          period="July 2019 – Feb 2021"
          description="As an Associate Software Engineer, I was responsible for building responsive web UIs and delivering client-facing features in an agile environment."
          responsibilities={[
            "Built responsive web UIs using React.js, JavaScript, and Bootstrap in a small agile team, ensuring optimal user experience across devices.",
            "Delivered features for client-facing applications with a focus on cross-device usability and performance.",
            "Practiced collaborative development using Git and regular sprint planning, ensuring efficient project workflows."
          ]}
        />
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

function ExperienceCard({ title, company, period, description, responsibilities }: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow text-gray-600 dark:text-gray-300">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
          <Briefcase className="text-white" size={24} />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {title}
          </h2>
          <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            {company}
          </h3>

          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="text-indigo-500 dark:text-indigo-400" size={16} />
            <span>{period}</span>
          </div>

          <p className="mb-4">
            {description}
          </p>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Key Responsibilities:
            </h4>
            {/* CHANGES ARE HERE: */}
            <ul className="list-disc pl-5 text-left -mt-2"> {/* Removed list-inside, added pl-5 and text-left, adjusted margin-top */}
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="mb-1 text-gray-700 dark:text-gray-300"> {/* Added mb-1 for slight spacing, adjusted text color */}
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}