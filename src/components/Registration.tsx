import { useState } from 'react';
import { UserPlus, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  collegeName: string;
}

export default function Registration() {
  const [selectedCategory, setSelectedCategory] = useState<'UG' | 'PG' | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    collegeName: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) return;

    setLoading(true);
    setMessage(null);

    try {
      // Save to localStorage
      const registrations = JSON.parse(localStorage.getItem('gmc_registrations') || '[]');
      const newEntry = {
        id: Date.now(),
        ...formData,
        category: selectedCategory,
        amount: selectedCategory === 'UG' ? 400 : 600,
        timestamp: new Date().toISOString(),
      };
      registrations.push(newEntry);
      localStorage.setItem('gmc_registrations', JSON.stringify(registrations));

      setMessage({
        type: 'success',
        text: 'Registration successful! Payment link will be sent to your email.',
      });
      setFormData({ name: '', email: '', phone: '', collegeName: '' });
      setSelectedCategory(null);
    } catch {
      setMessage({
        type: 'error',
        text: 'Registration failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-5xl sm:text-6xl font-bold text-red-600  mb-4 "
            data-text="REGISTRATION"
          >
            REGISTRATION
          </h2>
          <p className="text-gray-400 text-lg">
            Mandatory for all participants and audience • Valid for 4-day event access
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* UG Card */}
          <div
            onClick={() => setSelectedCategory('UG')}
            className={`p-8 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === 'UG'
                ? 'border-red-500 bg-red-950/20 neon-border'
                : 'border-gray-700 bg-gray-900/50 hover:border-red-500'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-red-500">UG Registration</h3>
              <UserPlus className="text-red-500" size={32} />
            </div>
            <p className="text-5xl font-bold text-white mb-4">₹400</p>
            <p className="text-gray-400">For undergraduate students</p>
          </div>

          {/* PG Card */}
          <div
            onClick={() => setSelectedCategory('PG')}
            className={`p-8 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === 'PG'
                ? 'border-blue-500 bg-blue-950/20 neon-border-blue'
                : 'border-gray-700 bg-gray-900/50 hover:border-blue-500'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-blue-500">PG Registration</h3>
              <UserPlus className="text-blue-500" size={32} />
            </div>
            <p className="text-5xl font-bold text-white mb-4">₹600</p>
            <p className="text-gray-400">For postgraduate students</p>
          </div>
        </div>

        {selectedCategory && (
          <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-md p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Complete Your {selectedCategory} Registration
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">College Name</label>
                <input
                  type="text"
                  required
                  value={formData.collegeName}
                  onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Your college name"
                />
              </div>

              {message && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    message.type === 'success'
                      ? 'bg-green-950/50 border border-green-800 text-green-400'
                      : 'bg-red-950/50 border border-red-800 text-red-400'
                  }`}
                >
                  {message.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <p>{message.text}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 neon-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay ₹${selectedCategory === 'UG' ? '400' : '600'} & Register`}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
