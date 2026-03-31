import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-red-900/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-red-600 neon-text mb-4">Eucrasia 2026</h3>
            <p className="text-gray-400 mb-4">
              Experience the most thrilling tech and cultural event of the year. Step into the
              Upside Down and unlock your potential.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
                <Mail size={20} />
                <span>event@upsidedown.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
                <Phone size={20} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
                <MapPin size={20} />
                <span>College Campus, City, State</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 hover:neon-border"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:neon-border-blue"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:neon-border-blue"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-400 mb-2">Event Duration</h5>
              <p className="text-white font-bold">4 Days of Excellence</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Upside Down Experience. All rights reserved. | Designed with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
