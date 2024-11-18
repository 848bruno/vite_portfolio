import { Code, Database, Layout, Smartphone } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Frontend', icon: <Layout />, items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: <Database />, items: ['Node.js', 'Python', 'GraphQL'] },
    { name: 'Mobile', icon: <Smartphone />, items: ['React Native', 'Flutter'] },
    { name: 'Other', icon: <Code />, items: ['Git', 'Docker', 'AWS'] }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-lg text-gray-200">
                I'm a passionate Full Stack Developer with 5 years of experience in building
                beautiful, functional, and user-friendly websites and applications.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((category) => (
                <div key={category.name} className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                  <div className="flex items-center gap-2 mb-3 text-purple-400">
                    {category.icon}
                    <h3 className="font-semibold">{category.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.items.map((skill) => (
                      <div key={skill} className="text-gray-300 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80"
              alt="Working on laptop"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl -z-10 blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}