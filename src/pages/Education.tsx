import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Education</h1>

      <div className="space-y-8">
        <EducationCard
          degree="Bachelor of Technology in Electrical & Electronics Engineering"
          institution="Vaagdevi Engineering College, Warangal"
          year="2014 - 2018"
          grade="57%"
          description=""
        />

        <EducationCard
          degree="Intermediate (MPC)"
          institution="Ekashila Junior College, Hanmakonda"
          year="2012 - 2014"
          grade="93.5%"
          description=""
        />

        <EducationCard
          degree="Secondary School Certificate (SSC)"
          institution="Sri Saraswathi Shishu Mandir, Elukurthy"
          year="2012"
          grade="8.5 GPA"
          description=""
        />
      </div>
    </div>
  );
}

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  description: string;
}

function EducationCard({ degree, institution, year, grade, description }: EducationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <GraduationCap className="text-blue-600 dark:text-blue-300" size={24} />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {degree}
          </h2>
          <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            {institution}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{year}</span>
            </div>
            <div className="font-medium">
              {grade}
            </div>
          </div>

          {description && (
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}