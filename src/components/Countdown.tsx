import { useState, useEffect } from 'react';

export default function Countdown() {
  // Update this date to your actual event date
  const targetDate = new Date('2026-04-24T06:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-red-600 neon-text mb-4">
            EVENT STARTS IN
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-md p-6 rounded-lg border border-red-800/50 hover:border-red-500 transition-all duration-300 hover:neon-border text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-red-500 mb-2 neon-text tabular-nums">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
