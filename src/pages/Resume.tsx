import { Download } from 'lucide-react';

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg hover:translate-y-1 transition"
        >
          <Download size={20} />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Gurrapu Dileep Kumar
          </h2>
          <div className="text-gray-600 dark:text-gray-300">
            <p>Frontend Developer</p>
            <p>📞 +91 8919523533</p>
            <p>📧 gurrapudileepkumar7@gmail.com</p>
            <p>🔗 <a href="https://github.com/Dileep8919" target="_blank" className="text-blue-500 underline">github.com/Dileep8919</a></p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Career Objective</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Motivated and skilled Frontend Developer with a strong background in designing and implementing responsive, scalable applications. Proficient in JavaScript, React JS with a proven ability to deliver high-quality software solutions. Seeking to apply my technical expertise and passion for software development to contribute to a dynamic team environment.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Profile Summary</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>3+ years of experience as a Frontend Developer in the IT industry.</li>
            <li>Proficient in the Software Development Life Cycle (SDLC), from requirements gathering to deployment.</li>
            <li>Skilled in JavaScript, React JS, HTML, CSS.</li>
            <li>Strong interpersonal skills and experience working in cross-functional teams.</li>
            <li>Focused on scalable solutions, responsive design, and performance optimization.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            <div>
              <h4 className="font-semibold mb-2">Languages & Markup</h4>
              <ul className="list-disc list-inside">
                <li>JavaScript</li>
                <li>HTML, CSS, XML, JSON</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Frameworks & Tools</h4>
              <ul className="list-disc list-inside">
                <li>React JS, Free Marker, jQuery</li>
                <li>Git, Eclipse, VS Code</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Databases</h4>
              <ul className="list-disc list-inside">
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Experience</h3>
          <div className="text-gray-600 dark:text-gray-300">
            <p className="font-semibold">React JS Developer</p>
            <p>ITalent Applications Pvt. Ltd., Hyderabad (April 2022 – Present)</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Developed and maintained web applications using JavaScript and React JS.</li>
              <li>Collaborated with UI/UX designers to create responsive, user-friendly interfaces.</li>
              <li>Ensured data security through robust implementation of security protocols.</li>
              <li>Deployed applications on AWS and Azure cloud platforms.</li>
              <li>Conducted code reviews and optimized application performance for scalability.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Projects</h3>
          <div className="text-gray-600 dark:text-gray-300 space-y-6">
            <div>
              <p className="font-semibold">Cisco TechZone (April 2022 – Present)</p>
              <p>Internal platform for Cisco employees to publish content about Cisco products.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Built frontend with React JS, Free Marker, JavaScript, jQuery.</li>
                <li>Implemented content creation, review, and publishing features.</li>
                <li>Integrated authentication and optimized performance.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">SAP Public Community</p>
              <p>A platform enabling users to post questions, ideas, and documents.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Created responsive UI using modern frontend technologies.</li>
                <li>Implemented logic for user interaction and accessibility improvements.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Security Publish (Migration Project)</p>
              <p>Migrated legacy JSP-based system to React + TypeScript.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Led full frontend migration with multi-language support.</li>
                <li>Improved performance and UI consistency.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Label Manager (TechZone Sub-Module)</p>
              <p>Managed community label creation and updates.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Independently handled design and development using React.</li>
                <li>Integrated seamlessly with the core TechZone platform.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
          <div className="text-gray-600 dark:text-gray-300 space-y-4">
            <div>
              <p className="font-semibold">B.Tech in Electrical & Electronics Engineering</p>
              <p>Vaagdevi Engineering College, Warangal (2014 – 2018)</p>
              <p>Percentage: 57%</p>
            </div>
            <div>
              <p className="font-semibold">Intermediate (MPC)</p>
              <p>Ekashila Junior College, Hanmakonda (2012 – 2014)</p>
              <p>Percentage: 93.5%</p>
            </div>
            <div>
              <p className="font-semibold">Secondary School Certificate (SSC)</p>
              <p>Sri Saraswathi Shishu Mandir, Elukurthy (2012)</p>
              <p>GPA: 8.5</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Hobbies</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Playing Chess – helps improve focus, patience, and strategic thinking.
          </p>
        </section>
      </div>
    </div>
  );
}
