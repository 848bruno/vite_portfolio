import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full glass-effect z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bruno Ambale
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Blog', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400">
              <Twitter size={20} />
            </a>
          </div>

          <button
            className="md:hidden text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Projects', 'Blog', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-200 hover:text-purple-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}