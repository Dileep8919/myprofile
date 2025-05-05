export function Footer() {
    return (
      <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gurrapu Karthik. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="https://github.com" target="_blank" className="hover:text-yellow-300 transition">GitHub</a>
            <a href="mailto:gurrapukarthik60@gmail.com" className="hover:text-yellow-300 transition">Email</a>
          </div>
        </div>
      </footer>
    );
  }