import { Code, Palette, Server, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with great user experience.'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Developing robust and scalable server-side applications and APIs.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications using React Native.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}