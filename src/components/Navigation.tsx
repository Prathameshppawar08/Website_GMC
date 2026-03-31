import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'registration', label: 'Registration' },
    { id: 'tshirts', label: 'T-Shirts' },
    { id: 'competitions', label: 'Competitions' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1
              className="text-2xl font-bold text-red-600 neon-text cursor-pointer"
              onClick={() => handleClick('home')}
            >
              Eucrasia 2026
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-text"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
