import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Experience</h1>

      <div className="space-y-8">
        <ExperienceCard
          title="React JS Developer"
          company="ITalent Applications Pvt. Ltd., Hyderabad"
          period="April 2022 – Present"
          description="Working as a React JS Developer focusing on building scalable and secure web applications with responsive user interfaces."
          responsibilities={[
            "Developed and maintained web applications using JavaScript and React JS",
            "Collaborated with UI/UX designers to implement responsive and user-friendly interfaces",
            "Ensured data security with robust security protocol implementations",
            "Deployed applications on AWS and Azure cloud platforms",
            "Conducted code reviews and performance optimizations for scalability"
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
          <Briefcase className="text-green-600 dark:text-green-300" size={24} />
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {title}
          </h2>
          <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            {company}
          </h3>
          
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Calendar size={16} />
            <span>{period}</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Key Responsibilities:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}