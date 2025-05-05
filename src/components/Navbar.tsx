import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import profileImage from '../assets/dileep.jpeg'; // Import the image

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center text-xl font-bold text-white">
            <img
              src={profileImage}
              alt="Dileep Kumar"
              className="h-14 w-14 rounded-full mr-2"
            />
            {/* Dileep Kumar */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/certificate">Certifications</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
              <MobileNavLink to="/education" onClick={toggleMenu}>Education</MobileNavLink>
              <MobileNavLink to="/experience" onClick={toggleMenu}>Experience</MobileNavLink>
              <MobileNavLink to="/resume" onClick={toggleMenu}>Resume</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to}
      className="text-white hover:text-yellow-300 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      className="text-white hover:text-yellow-300 transition-colors block"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
