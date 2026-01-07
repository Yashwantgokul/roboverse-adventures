import { Cog, Wrench, Zap } from "lucide-react";

const ProtoLabRobot = () => (
  <svg viewBox="0 0 200 200" className="w-64 h-64 animate-float">
    {/* Robot Body */}
    <rect x="60" y="80" width="80" height="70" rx="10" fill="url(#protoGradient)" stroke="#6366f1" strokeWidth="2" />
    
    {/* Head */}
    <rect x="70" y="40" width="60" height="45" rx="8" fill="url(#protoGradient)" stroke="#6366f1" strokeWidth="2" />
    
    {/* Eyes */}
    <circle cx="85" cy="60" r="8" fill="#1e1b4b" />
    <circle cx="115" cy="60" r="8" fill="#1e1b4b" />
    <circle cx="87" cy="58" r="3" fill="#22d3ee" className="animate-pulse-glow" />
    <circle cx="117" cy="58" r="3" fill="#22d3ee" className="animate-pulse-glow" />
    
    {/* Antenna */}
    <line x1="100" y1="40" x2="100" y2="25" stroke="#6366f1" strokeWidth="3" />
    <circle cx="100" cy="20" r="6" fill="#f472b6" className="animate-pulse-glow" />
    
    {/* Beta Badge on chest */}
    <rect x="80" y="95" width="40" height="18" rx="4" fill="#f472b6" />
    <text x="100" y="108" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">BETA</text>
    
    {/* Arms with tools */}
    <rect x="40" y="90" width="20" height="40" rx="5" fill="url(#protoGradient)" stroke="#6366f1" strokeWidth="2" />
    <rect x="140" y="90" width="20" height="40" rx="5" fill="url(#protoGradient)" stroke="#6366f1" strokeWidth="2" />
    
    {/* Wrench in hand */}
    <rect x="145" y="130" width="8" height="25" rx="2" fill="#a5b4fc" />
    
    {/* Legs */}
    <rect x="70" y="150" width="20" height="30" rx="5" fill="url(#protoGradient)" stroke="#6366f1" strokeWidth="2" />
    <rect x="110" y="150" width="20" height="30" rx="5" fill="url(#protoGradient)" stroke="#6366f1" strokeWidth="2" />
    
    {/* Gradient definition */}
    <defs>
      <linearGradient id="protoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c4b5fd" />
        <stop offset="100%" stopColor="#a5b4fc" />
      </linearGradient>
    </defs>
  </svg>
);

const ProtoLab = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-indigo-400/20">
          <Cog className="w-32 h-32 animate-spin-slow" />
        </div>
        <div className="absolute top-40 right-20 text-purple-400/20">
          <Cog className="w-24 h-24 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
        <div className="absolute bottom-20 left-1/4 text-pink-400/20">
          <Cog className="w-20 h-20 animate-spin-slow" />
        </div>
        <div className="absolute bottom-40 right-1/3 text-cyan-400/20">
          <Wrench className="w-16 h-16 animate-wiggle" />
        </div>
        <div className="absolute top-1/3 left-1/3 text-yellow-400/20">
          <Zap className="w-12 h-12 animate-pulse-glow" />
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Beta badge */}
        <div className="absolute top-8 right-8">
          <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-display font-bold rounded-full text-sm animate-pulse shadow-lg shadow-pink-500/30">
            ✨ BETA
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Prototype Lab
        </h1>
        <p className="text-xl text-indigo-200/80 text-center mb-12 font-body">
          VV{'{'}d154ll0w_
        </p>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Robot illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <ProtoLabRobot />
          </div>

          {/* Info card */}
          <div className="max-w-md">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Cog className="w-8 h-8 text-cyan-400 animate-spin-slow" />
                <h2 className="text-2xl font-display font-bold text-white">
                  Experimental Designs
                </h2>
              </div>
              
              <p className="text-indigo-200 font-body leading-relaxed mb-6">
                Experimental designs for friendly helper robots. These prototypes aren't ready yet!
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-indigo-300">
                  <Wrench className="w-5 h-5 text-pink-400" />
                  <span className="font-body">New servo systems in testing</span>
                </div>
                <div className="flex items-center gap-3 text-indigo-300">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="font-body">Enhanced power modules</span>
                </div>
                <div className="flex items-center gap-3 text-indigo-300">
                  <Cog className="w-5 h-5 text-cyan-400" />
                  <span className="font-body">Improved motion controllers</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-indigo-400/60 font-body italic">
                  Internal development notes • Not for public distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VV{d154ll0w_ */}
    </div>
  );
};

export default ProtoLab;
