import { Archive, Clock, Trash2, History } from "lucide-react";

const VintageRobot = ({ version, className = "" }: { version: string; className?: string }) => (
  <svg viewBox="0 0 100 140" className={`w-24 h-32 ${className}`}>
    {/* Apply sepia filter */}
    <defs>
      <filter id={`sepia-${version}`}>
        <feColorMatrix type="matrix" values="0.393 0.769 0.189 0 0 0.349 0.686 0.168 0 0 0.272 0.534 0.131 0 0 0 0 0 1 0" />
      </filter>
      <linearGradient id={`vintageGrad-${version}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a574" />
        <stop offset="100%" stopColor="#b8956e" />
      </linearGradient>
    </defs>
    
    <g filter={`url(#sepia-${version})`} opacity="0.8">
      {/* Body */}
      <rect x="25" y="50" width="50" height="45" rx="5" fill={`url(#vintageGrad-${version})`} stroke="#8b7355" strokeWidth="2" />
      
      {/* Head */}
      <rect x="30" y="20" width="40" height="32" rx="4" fill={`url(#vintageGrad-${version})`} stroke="#8b7355" strokeWidth="2" />
      
      {/* Eyes */}
      <circle cx="42" cy="35" r="6" fill="#5c4a3a" />
      <circle cx="58" cy="35" r="6" fill="#5c4a3a" />
      <circle cx="42" cy="33" r="2" fill="#a89070" />
      <circle cx="58" cy="33" r="2" fill="#a89070" />
      
      {/* Antenna */}
      <line x1="50" y1="20" x2="50" y2="10" stroke="#8b7355" strokeWidth="2" />
      <circle cx="50" cy="7" r="4" fill="#c9a66b" />
      
      {/* Arms */}
      <rect x="10" y="55" width="15" height="30" rx="4" fill={`url(#vintageGrad-${version})`} stroke="#8b7355" strokeWidth="2" />
      <rect x="75" y="55" width="15" height="30" rx="4" fill={`url(#vintageGrad-${version})`} stroke="#8b7355" strokeWidth="2" />
      
      {/* Legs */}
      <rect x="30" y="95" width="14" height="25" rx="4" fill={`url(#vintageGrad-${version})`} stroke="#8b7355" strokeWidth="2" />
      <rect x="56" y="95" width="14" height="25" rx="4" fill={`url(#vintageGrad-${version})`} stroke="#8b7355" strokeWidth="2" />
      
      {/* Version badge */}
      <rect x="35" y="60" width="30" height="12" rx="2" fill="#5c4a3a" />
      <text x="50" y="69" textAnchor="middle" fill="#d4a574" fontSize="8" fontWeight="bold">{version}</text>
    </g>
  </svg>
);

const DustParticle = ({ delay, left, duration }: { delay: number; left: string; duration: number }) => (
  <div
    className="absolute w-1 h-1 bg-amber-200/30 rounded-full"
    style={{
      left,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      top: '-10px',
    }}
  />
);

const LegacyFiles = () => {
  const archiveItems = [
    { version: "v1.0", title: "Version 1.0", desc: "Original prototype designs", icon: Clock },
    { version: "v0.5", title: "Retired Models", desc: "Discontinued robot series", icon: Archive },
    { version: "v0.1", title: "Scrapped Designs", desc: "Early concept sketches", icon: Trash2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950 relative overflow-hidden">
      {/* Dust particles */}
      {[...Array(15)].map((_, i) => (
        <DustParticle
          key={i}
          delay={i * 0.7}
          left={`${5 + i * 6.5}%`}
          duration={4 + (i % 3)}
        />
      ))}

      {/* Vintage paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm glow spots */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <History className="w-10 h-10 text-amber-400" />
            <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
              Legacy Archive
            </h1>
          </div>
          <p className="text-xl text-amber-200/60 font-body">
            Older Robot Concepts
          </p>
        </div>

        {/* Archive banner */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-amber-900/40 backdrop-blur border-2 border-amber-600/30 rounded-xl p-4 text-center">
            <p className="text-amber-200 font-body flex items-center justify-center gap-2">
              <Archive className="w-5 h-5" />
              These designs are kept only for historical reference.
            </p>
          </div>
        </div>

        {/* Robot showcase */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          <VintageRobot version="v1.0" className="animate-float opacity-70" />
          <VintageRobot version="v0.5" className="animate-float-slow opacity-60" />
          <VintageRobot version="v0.1" className="animate-float-reverse opacity-50" />
        </div>

        {/* Archive cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {archiveItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-900/30 to-stone-900/50 backdrop-blur rounded-2xl p-6 border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300"
              style={{ opacity: 0.7 + (0.1 * (2 - index)) }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-amber-800/50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-amber-100">{item.title}</h3>
                  <span className="text-xs text-amber-500 font-body">{item.version}</span>
                </div>
              </div>
              <p className="text-amber-200/70 font-body text-sm">{item.desc}</p>
              
              <div className="mt-4 pt-4 border-t border-amber-700/30">
                <span className="text-xs text-amber-600/60 font-body italic">
                  Archived • Read-only
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-amber-500/40 text-sm font-body mt-16">
          Historical Archives • Internal Reference Only
        </p>
      </div>

      {/* 53cur3} */}
    </div>
  );
};

export default LegacyFiles;
