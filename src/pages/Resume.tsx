import { Download } from 'lucide-react';

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Resume
        </h1>
        <a
          href="/resume.pdf" // Suggest clearer filename
          download
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg hover:translate-y-1 transition"
        >
          <Download size={20} />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

        {/* Contact Information / Header */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dileep Kumar Gurrapu
          </h2>
          <div className="text-gray-600 dark:text-gray-300">
            <p>Hyderabad, India</p>
            <p>📞 +91-8919523533</p>
            <p>📧 gurrapudileepkumar7@gmail.com</p>
            <p>🔗 <a href="https://www.linkedin.com/in/gurrapu-dileep-kumar-39b198178" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a> | <a href="https://github.com/Dileep8919" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a></p>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Frontend developer with nearly 5 years of experience building scalable applications and optimizing performance for high-impact enterprise platforms. Proficient in React.js, TypeScript, and JavaScript, I've contributed to systems serving 100K+ users, focusing on user experience and reusable component architecture. Proven ability to collaborate cross-functionally in Agile environments.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 dark:text-gray-300">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <ul className="list-disc pl-5 text-left -mt-1">
                <li className="mb-1">React.js</li>
                <li className="mb-1">TypeScript</li>
                <li className="mb-1">JavaScript (ES6+)</li>
                <li className="mb-1">HTML5</li>
                <li className="mb-1">CSS3</li>
                <li className="mb-1">Bootstrap</li>
                <li className="mb-1">Responsive Design</li>
                <li className="mb-1">Context API</li>
                <li className="mb-1">React Hooks</li>
                <li className="mb-1">Redux</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend & Deployment</h4>
              <ul className="list-disc pl-5 text-left -mt-1">
                <li className="mb-1">REST APIs</li>
                <li className="mb-1">Maven (WAR)</li>
                <li className="mb-1">Tomcat</li>
                <li className="mb-1">Internal CI/CD Tools</li>
                <li className="mb-1">AWS</li> {/* Added AWS as it's in your experience descriptions */}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools & IDEs</h4>
              <ul className="list-disc pl-5 text-left -mt-1">
                <li className="mb-1">VS Code</li>
                <li className="mb-1">Eclipse</li>
                <li className="mb-1">FileZilla</li>
                <li className="mb-1">GitHub Desktop</li>
                <li className="mb-1">mRemoteNG</li>
                <li className="mb-1">Postman</li>
                <li className="mb-1">Chrome DevTools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Version Control & Workflow</h4>
              <ul className="list-disc pl-5 text-left -mt-1">
                <li className="mb-1">Git</li>
                <li className="mb-1">GitHub</li>
                <li className="mb-1">Bitbucket</li>
                <li className="mb-1">Jira</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Other</h4>
              <ul className="list-disc pl-5 text-left -mt-1">
                <li className="mb-1">Performance Optimization</li>
                <li className="mb-1">Code Splitting</li>
                <li className="mb-1">React.memo</li>
                <li className="mb-1">Component Reusability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Experience</h3>
          <div className="space-y-6">
            {/* Italent Applications Pvt. Ltd. Experience */}
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Software Engineer</p>
              <p className="text-gray-700 dark:text-gray-300">Italent Applications Pvt Ltd, Hyderabad</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">April 2022 – Sep 2025</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">As a Software Engineer, I focus on building scalable and secure web applications with responsive user interfaces for enterprise platforms.</p>
              <ul className="list-disc pl-5 text-left -mt-1"> {/* Applied list formatting */}
                <li className="mb-1 text-gray-700 dark:text-gray-300">Contributed to enterprise-scale frontend development using React.js and TypeScript, building robust and scalable user interfaces.</li>
                <li className="mb-1 text-gray-700 dark:text-gray-300">Collaborated effectively in cross-functional Agile teams, actively participating in code reviews, pull requests, stand-ups, and sprint planning to ensure timely delivery.</li>
                <li className="mb-1 text-gray-700 dark:text-gray-300">Supported deployment workflows using Git, internal CI/CD tools, and manual deployment tools (e.g., FileZilla, mRemoteNG, Tomcat) to ensure seamless application delivery.</li>
              </ul>
            </div>

            {/* Kuncham Software Solutions Pvt Ltd. Experience */}
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Associate Software Engineer</p>
              <p className="text-gray-700 dark:text-gray-300">Kuncham Software Solutions Pvt Ltd., Hyderabad</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">July 2019 – Feb 2021</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">As an Associate Software Engineer, I was responsible for building responsive web UIs and delivering client-facing features in an agile environment.</p>
              <ul className="list-disc pl-5 text-left -mt-1"> {/* Applied list formatting */}
                <li className="mb-1 text-gray-700 dark:text-gray-300">Built responsive web UIs using React.js, JavaScript, and Bootstrap in a small agile team, ensuring optimal user experience across devices.</li>
                <li className="mb-1 text-gray-700 dark:text-gray-300">Delivered features for client-facing applications with a focus on cross-device usability and performance.</li>
                <li className="mb-1 text-gray-700 dark:text-gray-300">Practiced collaborative development using Git and regular sprint planning, ensuring efficient project workflows.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Projects</h3>
          <div className="text-gray-600 dark:text-gray-300 space-y-6">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Internal Enterprise Content Management Platform</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Developed and maintained a large-scale internal platform for over 100K enterprise employees to create, review, and publish technical articles and knowledge base content. Integrated complex content management workflows, role-based access control, and ensured responsive design for diverse devices.</p>
              <ul className="list-disc pl-5 text-left -mt-1"> {/* Applied list formatting */}
                <li className="mb-1 text-gray-700 dark:text-gray-300">Technologies: React, JavaScript, jQuery, FreeMarker.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Public Knowledge Sharing & Community Portal</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Contributed significantly to the UI development of a public-facing platform designed for users to collaborate, create documents, post questions, and engage in product-related discussions. Focused on enhancing user interface, ensuring high accessibility standards (WCAG 2.1), and implementing robust responsive design principles.</p>
              <ul className="list-disc pl-5 text-left -mt-1"> {/* Applied list formatting */}
                <li className="mb-1 text-gray-700 dark:text-gray-300">Technologies: React, HTML, CSS, JavaScript.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Legacy System Modernization (JSP to React/TypeScript)</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Led the migration of a critical legacy JSP-based publishing module to a modern React and TypeScript stack. This involved refactoring existing functionalities to improve maintainability, performance, and scalability for publishing multilingual technical articles (e.g., Japanese to English) within a large enterprise knowledge platform.</p>
              <ul className="list-disc pl-5 text-left -mt-1"> {/* Applied list formatting */}
                <li className="mb-1 text-gray-700 dark:text-gray-300">Technologies: React, TypeScript, JSP (legacy).</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Internal Taxonomy & Content Categorization Tool</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Designed and implemented a self-contained React module for managing enterprise-wide content labels and taxonomies. This tool facilitated efficient keyword-based content categorization, significantly reducing manual tagging overhead and improving internal content discoverability and searchability across various teams.</p>
              <ul className="list-disc pl-5 text-left -mt-1"> {/* Applied list formatting */}
                <li className="mb-1 text-gray-700 dark:text-gray-300">Technologies: React, JavaScript, CSS.</li>
              </ul>
            </div>

            {/* Added E-commerce and Deployment projects */}
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">E-commerce Platform UI Development</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Contributed to the frontend development of a high-traffic e-commerce platform. Developed core homepage layouts and various reusable components to enhance mobile responsiveness, optimize user engagement, and integrate seamlessly with backend RESTful APIs for dynamic content.</p>
              <ul className="list-disc pl-5 text-left -mt-1"> {/* Applied list formatting */}
                <li className="mb-1 text-gray-700 dark:text-gray-300">Technologies: React.js, JavaScript, Bootstrap, HTML5, CSS3, REST APIs.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Automated & Manual Deployment Workflow Setup</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Engineered and managed deployment processes for web applications, utilizing both automated pipelines (triggered by Git repository updates) and manual procedures. Handled the deployment of Maven-built WAR files to Tomcat servers using tools like FileZilla and mRemoteNG, ensuring smooth and consistent application delivery across different environments.</p>
              <ul className="list-disc pl-5 text-left -mt-1"> {/* Applied list formatting */}
                <li className="mb-1 text-gray-700 dark:text-gray-300">Technologies: Git, Maven, Tomcat, FileZilla, mRemoteNG, CI/CD.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
          <div className="text-gray-600 dark:text-gray-300">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Bachelor of Technology (B.Tech) – Electrical & Electronics Engineering</p>
              <p className="text-gray-700 dark:text-gray-300">Vaagdevi Engineering College, JNTUH</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Warangal, India | Aug 2014 – May 2018</p>
            </div>
          </div>
        </section>

        {/* Hobbies section removed as per recommendation for professional resumes */}

      </div>
    </div>
  );
}