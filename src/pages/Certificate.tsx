import { Download, FileText } from 'lucide-react';

export default function Certificate() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        {/* Certification Heading */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Certification
          </h1>
        </div>

        {/* Download Button beside Heading */}
        <a
          href="/certificate.jpg"
          download
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg hover:translate-y-1 transition"
        >
          <Download size={20} />
          <span>Download Certificate</span>
        </a>
      </div>

      <div className="space-y-8">
        {/* Certificate Description Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
              <FileText className="text-white" size={24} />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Freedom with AI Masterclass
              </h2>
              <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                A hands-on program focused on artificial intelligence
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="font-medium text-indigo-500 dark:text-indigo-400">
                  Certification Awarded
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This certificate recognizes the successful completion of the <strong>Freedom with AI Masterclass</strong>, a hands-on program focused on practical applications of artificial intelligence. The course introduced key AI tools and workflows, enabling participants to enhance productivity, automate tasks, and explore real-world use cases of modern AI technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Image at the Bottom */}
      <div className="flex justify-center mt-8">
        <img
          src="/certificate.jpg"
          alt="Certificate"
          className="w-full max-w-4xl rounded shadow-lg"
        />
      </div>
    </div>
  );
}