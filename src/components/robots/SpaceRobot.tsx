const SpaceRobot = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rocket pack flames */}
      <ellipse cx="72" cy="185" rx="8" ry="12" fill="hsl(25, 95%, 55%)" className="animate-wiggle" />
      <ellipse cx="72" cy="182" rx="5" ry="8" fill="hsl(50, 95%, 60%)" className="animate-wiggle delay-100" />
      <ellipse cx="128" cy="185" rx="8" ry="12" fill="hsl(25, 95%, 55%)" className="animate-wiggle delay-200" />
      <ellipse cx="128" cy="182" rx="5" ry="8" fill="hsl(50, 95%, 60%)" className="animate-wiggle delay-300" />
      
      {/* Rocket pack */}
      <rect x="60" y="155" width="25" height="35" rx="6" fill="hsl(0, 0%, 70%)" />
      <rect x="115" y="155" width="25" height="35" rx="6" fill="hsl(0, 0%, 70%)" />
      <rect x="63" y="155" width="19" height="8" fill="hsl(0, 75%, 55%)" rx="2" />
      <rect x="118" y="155" width="19" height="8" fill="hsl(0, 75%, 55%)" rx="2" />
      
      {/* Body - spacesuit style */}
      <ellipse cx="100" cy="115" rx="45" ry="50" fill="hsl(280, 85%, 60%)" />
      <ellipse cx="100" cy="115" rx="38" ry="42" fill="hsl(280, 85%, 70%)" />
      
      {/* Chest panel */}
      <rect x="80" y="100" width="40" height="25" rx="6" fill="hsl(200, 100%, 55%)" />
      <circle cx="90" cy="110" r="4" fill="hsl(150, 80%, 50%)" className="animate-pulse-glow" />
      <circle cx="100" cy="110" r="4" fill="hsl(50, 95%, 60%)" className="animate-pulse-glow delay-200" />
      <circle cx="110" cy="110" r="4" fill="hsl(0, 75%, 55%)" className="animate-pulse-glow delay-500" />
      
      {/* Helmet */}
      <circle cx="100" cy="45" r="38" fill="hsl(280, 85%, 55%)" />
      <circle cx="100" cy="45" r="30" fill="hsl(200, 60%, 15%)" />
      <ellipse cx="100" cy="45" rx="28" ry="26" fill="hsl(200, 80%, 25%)" />
      
      {/* Helmet reflection */}
      <ellipse cx="88" cy="38" rx="12" ry="8" fill="hsl(200, 80%, 40%)" opacity="0.5" />
      
      {/* Eyes in helmet */}
      <circle cx="88" cy="48" r="8" fill="hsl(150, 80%, 60%)" className="animate-blink" />
      <circle cx="112" cy="48" r="8" fill="hsl(150, 80%, 60%)" className="animate-blink delay-100" />
      <circle cx="90" cy="50" r="4" fill="hsl(260, 30%, 20%)" />
      <circle cx="114" cy="50" r="4" fill="hsl(260, 30%, 20%)" />
      <circle cx="92" cy="48" r="1.5" fill="hsl(150, 80%, 80%)" />
      <circle cx="116" cy="48" r="1.5" fill="hsl(150, 80%, 80%)" />
      
      {/* Smile */}
      <path
        d="M92 60 Q100 68 108 60"
        stroke="hsl(150, 80%, 60%)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Antenna */}
      <line x1="100" y1="7" x2="100" y2="0" stroke="hsl(280, 85%, 50%)" strokeWidth="3" />
      <circle cx="100" cy="0" r="5" fill="hsl(50, 95%, 60%)" className="animate-pulse-glow" />
      
      {/* Arms */}
      <ellipse cx="48" cy="100" rx="12" ry="18" fill="hsl(280, 85%, 60%)" />
      <ellipse cx="48" cy="100" rx="8" ry="12" fill="hsl(280, 85%, 70%)" />
      <ellipse cx="152" cy="100" rx="12" ry="18" fill="hsl(280, 85%, 60%)" />
      <ellipse cx="152" cy="100" rx="8" ry="12" fill="hsl(280, 85%, 70%)" />
      
      {/* Gloves */}
      <circle cx="42" cy="115" r="10" fill="white" />
      <circle cx="158" cy="115" r="10" fill="white" />
      
      {/* Boots */}
      <ellipse cx="80" cy="165" rx="15" ry="10" fill="white" />
      <ellipse cx="120" cy="165" rx="15" ry="10" fill="white" />
      
      {/* Stars around */}
      <polygon points="30,30 32,36 38,36 33,40 35,46 30,42 25,46 27,40 22,36 28,36" fill="hsl(50, 95%, 70%)" className="animate-pulse-glow" />
      <polygon points="170,50 171,54 175,54 172,56 173,60 170,58 167,60 168,56 165,54 169,54" fill="hsl(50, 95%, 70%)" className="animate-pulse-glow delay-300" />
      <polygon points="25,80 26,83 29,83 27,85 28,88 25,86 22,88 23,85 21,83 24,83" fill="hsl(50, 95%, 70%)" className="animate-pulse-glow delay-700" />
    </svg>
  );
};

export default SpaceRobot;
