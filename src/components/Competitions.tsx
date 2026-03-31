import { Trophy, MapPin, Instagram } from 'lucide-react';

export default function Competitions() {
  const physicalCompetitions = [
    {
      title: 'Code Hunt',
      description: 'Navigate through mysterious coding challenges in real-time',
      prize: '₹10,000',
    },
    {
      title: 'Tech Quiz Battle',
      description: 'Test your knowledge in this intense technology quiz competition',
      prize: '₹5,000',
    },
    {
      title: 'Hackathon',
      description: '24-hour coding marathon to build innovative solutions',
      prize: '₹25,000',
    },
    {
      title: 'Robotics Challenge',
      description: 'Build and program robots to complete challenging tasks',
      prize: '₹15,000',
    },
  ];

  const onlineCompetitions = [
    {
      title: 'Design Contest',
      description: 'Create stunning Stranger Things themed designs',
      platform: '@upsidedown_event',
    },
    {
      title: 'Meme Challenge',
      description: 'Showcase your creativity with event-themed memes',
      platform: '@upsidedown_event',
    },
    {
      title: 'Photography Contest',
      description: 'Capture the essence of the event in your photos',
      platform: '@upsidedown_event',
    },
    {
      title: 'Reels Competition',
      description: 'Create viral reels featuring event highlights',
      platform: '@upsidedown_event',
    },
  ];

  return (
    <section id="competitions" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-5xl sm:text-6xl font-bold text-red-600  mb-4"
            data-text="COMPETITIONS"
          >
            COMPETITIONS
          </h2>
          <p className="text-gray-400 text-lg">Compete, Win, and Conquer the Upside Down</p>
        </div>

        {/* Physical Competitions */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-red-500" size={32} />
            <h3 className="text-4xl font-bold text-red-500 neon-text">Physical Competitions</h3>
          </div>
          <p className="text-gray-400 mb-8">Hosted at college campus</p>

          <div className="grid md:grid-cols-2 gap-6">
            {physicalCompetitions.map((comp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md p-6 rounded-lg border border-red-800/50 hover:border-red-500 transition-all duration-300 hover:neon-border group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {comp.title}
                    </h4>
                    <p className="text-gray-400">{comp.description}</p>
                  </div>
                  <Trophy className="text-red-500 flex-shrink-0" size={32} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-red-500">{comp.prize}</span>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Competitions */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Instagram className="text-blue-500" size={32} />
            <h3 className="text-4xl font-bold text-blue-500 neon-text-blue">Online Competitions</h3>
          </div>
          <p className="text-gray-400 mb-8">Participate via Instagram</p>

          <div className="grid md:grid-cols-2 gap-6">
            {onlineCompetitions.map((comp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md p-6 rounded-lg border border-blue-800/50 hover:border-blue-500 transition-all duration-300 hover:neon-border-blue group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {comp.title}
                    </h4>
                    <p className="text-gray-400 mb-3">{comp.description}</p>
                    <div className="flex items-center gap-2 text-blue-400">
                      <Instagram size={16} />
                      <span className="text-sm">{comp.platform}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Participate Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
