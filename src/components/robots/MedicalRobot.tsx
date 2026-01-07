const MedicalRobot = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <rect x="55" y="75" width="90" height="85" rx="22" fill="white" stroke="hsl(185, 85%, 50%)" strokeWidth="3" />
      
      {/* Red cross on chest */}
      <rect x="90" y="95" width="20" height="40" rx="3" fill="hsl(0, 75%, 55%)" />
      <rect x="80" y="105" width="40" height="20" rx="3" fill="hsl(0, 75%, 55%)" />
      
      {/* Head */}
      <rect x="60" y="25" width="80" height="55" rx="16" fill="white" stroke="hsl(185, 85%, 50%)" strokeWidth="3" />
      
      {/* Nurse cap */}
      <rect x="65" y="18" width="70" height="15" rx="5" fill="white" stroke="hsl(185, 85%, 50%)" strokeWidth="2" />
      <rect x="92" y="12" width="16" height="12" rx="2" fill="hsl(0, 75%, 55%)" />
      
      {/* Eyes - friendly */}
      <ellipse cx="85" cy="48" rx="10" ry="12" fill="hsl(185, 85%, 55%)" className="animate-blink" />
      <ellipse cx="115" cy="48" rx="10" ry="12" fill="hsl(185, 85%, 55%)" className="animate-blink delay-300" />
      <circle cx="87" cy="50" r="5" fill="hsl(260, 30%, 20%)" />
      <circle cx="117" cy="50" r="5" fill="hsl(260, 30%, 20%)" />
      <circle cx="89" cy="48" r="2" fill="white" />
      <circle cx="119" cy="48" r="2" fill="white" />
      
      {/* Rosy cheeks */}
      <ellipse cx="70" cy="58" rx="8" ry="5" fill="hsl(350, 80%, 80%)" opacity="0.6" />
      <ellipse cx="130" cy="58" rx="8" ry="5" fill="hsl(350, 80%, 80%)" opacity="0.6" />
      
      {/* Smile */}
      <path
        d="M88 65 Q100 75 112 65"
        stroke="hsl(260, 30%, 20%)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Arms with medical tools */}
      <rect x="30" y="85" width="28" height="12" rx="6" fill="white" stroke="hsl(185, 85%, 50%)" strokeWidth="2" />
      <rect x="142" y="85" width="28" height="12" rx="6" fill="white" stroke="hsl(185, 85%, 50%)" strokeWidth="2" />
      
      {/* Left hand with stethoscope */}
      <circle cx="24" cy="91" r="10" fill="hsl(185, 85%, 55%)" />
      
      {/* Right hand */}
      <circle cx="176" cy="91" r="10" fill="hsl(185, 85%, 55%)" />
      
      {/* Stethoscope */}
      <path
        d="M24 101 Q24 130 50 140"
        stroke="hsl(260, 30%, 30%)"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="50" cy="142" r="8" fill="hsl(260, 30%, 30%)" />
      <circle cx="50" cy="142" r="5" fill="hsl(185, 85%, 55%)" />
      
      {/* Legs */}
      <rect x="70" y="160" width="22" height="28" rx="8" fill="white" stroke="hsl(185, 85%, 50%)" strokeWidth="2" />
      <rect x="108" y="160" width="22" height="28" rx="8" fill="white" stroke="hsl(185, 85%, 50%)" strokeWidth="2" />
      
      {/* Wheels at bottom */}
      <ellipse cx="81" cy="190" rx="14" ry="6" fill="hsl(185, 85%, 45%)" />
      <ellipse cx="119" cy="190" rx="14" ry="6" fill="hsl(185, 85%, 45%)" />
      
      {/* Heartbeat line */}
      <path
        d="M60 145 L75 145 L80 135 L85 155 L90 140 L95 145 L110 145"
        stroke="hsl(0, 75%, 55%)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className="animate-pulse-glow"
      />
    </svg>
  );
};

export default MedicalRobot;
