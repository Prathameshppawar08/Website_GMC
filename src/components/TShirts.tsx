import { useState } from 'react';
import { ShoppingBag, AlertCircle, CheckCircle } from 'lucide-react';

export default function TShirts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    size: 'M',
    quantity: 1,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const pricePerShirt = 499;
  const totalAmount = pricePerShirt * formData.quantity;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Save to localStorage
      const orders = JSON.parse(localStorage.getItem('gmc_tshirt_orders') || '[]');
      const newOrder = {
        id: Date.now(),
        ...formData,
        amount: totalAmount,
        timestamp: new Date().toISOString(),
      };
      orders.push(newOrder);
      localStorage.setItem('gmc_tshirt_orders', JSON.stringify(orders));

      setMessage({
        type: 'success',
        text: 'Order placed successfully! Payment link will be sent to your email.',
      });
      setFormData({ name: '', email: '', phone: '', size: 'M', quantity: 1 });
    } catch {
      setMessage({
        type: 'error',
        text: 'Order failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tshirts" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-5xl sm:text-6xl font-bold text-red-600  mb-4 "
            data-text="EVENT T-SHIRTS"
          >
            EVENT T-SHIRTS
          </h2>
          <p className="text-gray-400 text-lg">Limited edition merchandise</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="aspect-square bg-gradient-to-br from-red-950 to-blue-950 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <ShoppingBag className="text-red-500 mx-auto mb-4" size={80} />
                  <p className="text-4xl font-bold text-white neon-text">UPSIDE DOWN</p>
                  <p className="text-xl text-gray-400 mt-2">2025 Event</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">₹{pricePerShirt}</p>
                <p className="text-gray-400">Premium quality cotton blend</p>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Order Your T-Shirt</h3>

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
                <label className="block text-gray-400 mb-2">Size</label>
                <select
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  required
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })
                  }
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="bg-black/50 p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Amount:</span>
                  <span className="text-3xl font-bold text-red-500">₹{totalAmount}</span>
                </div>
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
                {loading ? 'Processing...' : `Buy Now - ₹${totalAmount}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
