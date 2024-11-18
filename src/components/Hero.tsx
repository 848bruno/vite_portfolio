import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/90 to-[#4a148c]/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="glass-effect p-8 rounded-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Hello, I'm Bruno Ambale
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fade-in-delay">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
            <a
              href="#contact"
              className="bg-purple-600/80 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border-2 border-purple-400/50 text-purple-200 px-8 py-3 rounded-full hover:bg-purple-600/20 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-400" size={32} />
        </div>
      </div>
    </section>
  );
}