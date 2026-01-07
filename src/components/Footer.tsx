import HelperRobot from "./robots/HelperRobot";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 overflow-hidden" style={{ background: "var(--gradient-footer)" }}>
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,85 1150,70 1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 pt-8">
        {/* Robot mascot */}
        <div className="flex justify-center mb-6">
          <div className="animate-wave">
            <HelperRobot className="w-16 h-16" />
          </div>
        </div>

        {/* Logo/title */}
        <h3 className="text-2xl font-display font-bold text-center mb-4">
          <span className="gradient-text">RoboVerse</span>
        </h3>

        {/* Tagline */}
        <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto">
          Where imagination meets innovation! Thanks for exploring the wonderful
          world of robots with us. 🤖✨
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} RoboVerse. Made with 💜 for curious minds everywhere.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            All robots are fictional characters created for educational fun!
          </p>
        </div>
      </div>

      {/* Floating stars */}
      <div className="absolute bottom-4 left-8 text-xl animate-pulse-glow">⭐</div>
      <div className="absolute bottom-8 right-12 text-lg animate-pulse-glow delay-500">✨</div>
      <div className="absolute top-20 right-8 text-sm animate-pulse-glow delay-300">💫</div>
    </footer>
  );
};

export default Footer;
