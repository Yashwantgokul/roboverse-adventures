const HelperRobot = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <rect x="60" y="80" width="80" height="90" rx="20" fill="hsl(175, 70%, 45%)" />
      <rect x="70" y="90" width="60" height="30" rx="8" fill="hsl(175, 70%, 55%)" />
      
      {/* Head */}
      <rect x="55" y="30" width="90" height="55" rx="15" fill="hsl(175, 70%, 50%)" />
      
      {/* Eyes */}
      <circle cx="80" cy="55" r="12" fill="white" className="animate-blink" />
      <circle cx="120" cy="55" r="12" fill="white" className="animate-blink delay-200" />
      <circle cx="82" cy="57" r="6" fill="hsl(260, 30%, 20%)" />
      <circle cx="122" cy="57" r="6" fill="hsl(260, 30%, 20%)" />
      <circle cx="84" cy="55" r="2" fill="white" />
      <circle cx="124" cy="55" r="2" fill="white" />
      
      {/* Antenna */}
      <line x1="100" y1="30" x2="100" y2="15" stroke="hsl(175, 70%, 40%)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="12" r="6" fill="hsl(330, 85%, 60%)" className="animate-pulse-glow" />
      
      {/* Arms */}
      <rect x="35" y="90" width="25" height="12" rx="6" fill="hsl(175, 70%, 45%)" />
      <circle cx="32" cy="96" r="10" fill="hsl(175, 70%, 55%)" />
      <rect x="140" y="90" width="25" height="12" rx="6" fill="hsl(175, 70%, 45%)" />
      <circle cx="168" cy="96" r="10" fill="hsl(175, 70%, 55%)" />
      
      {/* Legs */}
      <rect x="75" y="170" width="18" height="25" rx="6" fill="hsl(175, 70%, 40%)" />
      <rect x="107" y="170" width="18" height="25" rx="6" fill="hsl(175, 70%, 40%)" />
      
      {/* Heart on chest */}
      <path
        d="M100 115 L106 109 Q112 103 106 97 Q100 91 100 97 Q100 91 94 97 Q88 103 94 109 Z"
        fill="hsl(330, 85%, 60%)"
        className="animate-bounce-gentle"
      />
      
      {/* Smile */}
      <path
        d="M85 70 Q100 80 115 70"
        stroke="hsl(260, 30%, 20%)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HelperRobot;
