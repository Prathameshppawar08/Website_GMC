import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Registration from './components/Registration';
import TShirts from './components/TShirts';
import Competitions from './components/Competitions';
import Footer from './components/Footer';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-6xl font-bold text-red-600 text-large mb-8  animate-pulse"
            data-text="Eucrasia 2026"
          >
            Eucrasia 2026
          </h1>
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <Countdown />
      <Registration />
      <TShirts />
      <Competitions />
      <Footer />
    </div>
  );
}

export default App;
