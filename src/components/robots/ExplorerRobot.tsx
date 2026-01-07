const ExplorerRobot = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Backpack */}
      <rect x="125" y="70" width="30" height="50" rx="8" fill="hsl(45, 90%, 50%)" />
      <circle cx="140" cy="80" r="5" fill="hsl(45, 90%, 40%)" />
      
      {/* Body */}
      <rect x="55" y="75" width="75" height="80" rx="18" fill="hsl(200, 100%, 55%)" />
      <rect x="65" y="85" width="55" height="35" rx="10" fill="hsl(200, 100%, 65%)" />
      
      {/* Explorer hat */}
      <ellipse cx="95" cy="35" rx="50" ry="8" fill="hsl(30, 50%, 45%)" />
      <rect x="70" y="15" width="50" height="22" rx="8" fill="hsl(30, 50%, 50%)" />
      
      {/* Head */}
      <rect x="60" y="35" width="70" height="45" rx="12" fill="hsl(200, 100%, 60%)" />
      
      {/* Goggles */}
      <ellipse cx="80" cy="52" rx="14" ry="10" fill="hsl(150, 80%, 50%)" stroke="hsl(30, 50%, 40%)" strokeWidth="3" />
      <ellipse cx="110" cy="52" rx="14" ry="10" fill="hsl(150, 80%, 50%)" stroke="hsl(30, 50%, 40%)" strokeWidth="3" />
      <rect x="92" y="48" width="8" height="8" fill="hsl(30, 50%, 40%)" />
      
      {/* Eyes through goggles */}
      <circle cx="80" cy="52" r="5" fill="hsl(260, 30%, 20%)" className="animate-blink" />
      <circle cx="110" cy="52" r="5" fill="hsl(260, 30%, 20%)" className="animate-blink delay-100" />
      <circle cx="82" cy="50" r="2" fill="hsl(150, 80%, 70%)" />
      <circle cx="112" cy="50" r="2" fill="hsl(150, 80%, 70%)" />
      
      {/* Compass on chest */}
      <circle cx="92" cy="105" r="12" fill="hsl(45, 90%, 55%)" />
      <circle cx="92" cy="105" r="8" fill="white" />
      <polygon points="92,98 94,105 92,107 90,105" fill="hsl(0, 80%, 50%)" className="animate-wiggle" />
      <polygon points="92,112 94,105 92,103 90,105" fill="hsl(200, 80%, 40%)" className="animate-wiggle" />
      
      {/* Arms */}
      <rect x="30" y="85" width="28" height="14" rx="7" fill="hsl(200, 100%, 55%)" />
      <rect x="128" y="85" width="28" height="14" rx="7" fill="hsl(200, 100%, 55%)" />
      <circle cx="26" cy="92" r="10" fill="hsl(200, 100%, 65%)" />
      <circle cx="160" cy="92" r="10" fill="hsl(200, 100%, 65%)" />
      
      {/* Legs with boots */}
      <rect x="68" y="155" width="20" height="30" rx="6" fill="hsl(200, 100%, 50%)" />
      <rect x="98" y="155" width="20" height="30" rx="6" fill="hsl(200, 100%, 50%)" />
      <rect x="65" y="175" width="26" height="18" rx="8" fill="hsl(30, 50%, 45%)" />
      <rect x="95" y="175" width="26" height="18" rx="8" fill="hsl(30, 50%, 45%)" />
      
      {/* Smile */}
      <path
        d="M82 68 Q95 75 108 68"
        stroke="hsl(260, 30%, 20%)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ExplorerRobot;
