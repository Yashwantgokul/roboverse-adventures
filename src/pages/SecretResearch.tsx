import { FlaskConical, Brain, Thermometer, Navigation, StickyNote } from "lucide-react";

const ResearchRobot = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 160" className={`w-32 h-40 ${className}`}>
    {/* Body */}
    <rect x="30" y="60" width="60" height="55" rx="8" fill="url(#researchGrad)" stroke="#06b6d4" strokeWidth="2" />
    
    {/* Head */}
    <rect x="35" y="25" width="50" height="38" rx="6" fill="url(#researchGrad)" stroke="#06b6d4" strokeWidth="2" />
    
    {/* Eyes - looking at hologram */}
    <ellipse cx="48" cy="42" rx="6" ry="7" fill="#0f172a" />
    <ellipse cx="72" cy="42" rx="6" ry="7" fill="#0f172a" />
    <circle cx="50" cy="40" r="2" fill="#22d3ee" className="animate-blink" />
    <circle cx="74" cy="40" r="2" fill="#22d3ee" className="animate-blink" />
    
    {/* Lab coat effect */}
    <rect x="35" y="70" width="50" height="40" rx="4" fill="white" fillOpacity="0.9" />
    <line x1="60" y1="70" x2="60" y2="110" stroke="#e2e8f0" strokeWidth="1" />
    
    {/* Pocket */}
    <rect x="40" y="80" width="15" height="12" rx="2" fill="#f1f5f9" stroke="#cbd5e1" />
    
    {/* Arms */}
    <rect x="15" y="65" width="15" height="35" rx="4" fill="url(#researchGrad)" stroke="#06b6d4" strokeWidth="2" />
    <rect x="90" y="65" width="15" height="35" rx="4" fill="url(#researchGrad)" stroke="#06b6d4" strokeWidth="2" />
    
    {/* Legs */}
    <rect x="38" y="115" width="16" height="25" rx="4" fill="url(#researchGrad)" stroke="#06b6d4" strokeWidth="2" />
    <rect x="66" y="115" width="16" height="25" rx="4" fill="url(#researchGrad)" stroke="#06b6d4" strokeWidth="2" />
    
    {/* Antenna */}
    <line x1="60" y1="25" x2="60" y2="12" stroke="#06b6d4" strokeWidth="2" />
    <circle cx="60" cy="8" r="5" fill="#f472b6" className="animate-pulse-glow" />
    
    <defs>
      <linearGradient id="researchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#99f6e4" />
        <stop offset="100%" stopColor="#a5f3fc" />
      </linearGradient>
    </defs>
  </svg>
);

const Hologram = () => (
  <div className="relative">
    {/* Hologram base */}
    <div className="w-32 h-4 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full mx-auto" />
    
    {/* Hologram content */}
    <div className="relative -mt-2">
      <div className="w-24 h-32 mx-auto bg-gradient-to-t from-cyan-400/40 via-cyan-300/20 to-transparent rounded-lg animate-pulse-glow border border-cyan-400/30">
        <div className="p-3 space-y-2">
          <div className="h-2 bg-cyan-300/50 rounded w-full" />
          <div className="h-2 bg-cyan-300/30 rounded w-3/4" />
          <div className="h-2 bg-cyan-300/50 rounded w-5/6" />
          <div className="h-2 bg-cyan-300/30 rounded w-2/3" />
          <div className="h-8 w-8 mx-auto mt-2 border-2 border-cyan-300/50 rounded-full flex items-center justify-center">
            <Brain className="w-4 h-4 text-cyan-300/70" />
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full animate-pulse" />
    </div>
  </div>
);

const SecretResearch = () => {
  const researchPoints = [
    { icon: Navigation, text: "Studying safe navigation protocols" },
    { icon: Brain, text: "Understanding human-robot interaction" },
    { icon: Thermometer, text: "Preventing overheating issues" },
    { icon: FlaskConical, text: "Testing new power cell formulas" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-teal-900 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
          Robot Behavior Research Notes
        </h1>
        <p className="text-xl text-cyan-200/60 text-center mb-16 font-body">
          d035n7_m34n_
        </p>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
          {/* Left robot */}
          <ResearchRobot className="animate-float" />
          
          {/* Hologram */}
          <Hologram />
          
          {/* Right robot */}
          <ResearchRobot className="animate-float-slow -scale-x-100" />
        </div>

        {/* Research card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-cyan-400/20">
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <FlaskConical className="w-7 h-7 text-cyan-400" />
              Current Research Areas
            </h2>
            
            <ul className="space-y-4">
              {researchPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4 text-cyan-100 font-body">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-400/30">
                    <point.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky note warning */}
        <div className="max-w-xs mx-auto mt-8">
          <div className="bg-yellow-200 p-6 rounded-lg shadow-lg transform rotate-2 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-yellow-300/80 rounded-sm" />
            <div className="flex items-start gap-2">
              <StickyNote className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 font-body font-medium text-sm">
                Do not share externally — drafts only!
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-cyan-400/40 text-sm font-body mt-12">
          Research Division • Internal Documentation
        </p>
      </div>

      {/* d035n7_m34n_ */}
    </div>
  );
};

export default SecretResearch;
