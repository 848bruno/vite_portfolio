import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mldjwdjz"); // Replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <div className="text-center py-8 text-green-400">
        <p className="text-xl">Message sent successfully!</p>
        <p className="mt-2">I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-[#1a1a2e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-200">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-purple-400" size={24} />
                <span className="text-gray-300">brunoambale@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-purple-400" size={24} />
                <span className="text-gray-300">+254114939391</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-purple-400" size={24} />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-200"
                required
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-200"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-200"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}