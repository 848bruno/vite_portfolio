import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 glass-effect mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bruno Ambale
            </h3>
            <p className="text-gray-300">
              Full Stack Developer & UI/UX Designer based in San Francisco, CA.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Blog', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bruno Ambale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}