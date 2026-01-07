import HelperRobot from "./robots/HelperRobot";
import ExplorerRobot from "./robots/ExplorerRobot";
import SpaceRobot from "./robots/SpaceRobot";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-pink blob opacity-60 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pastel-cyan blob opacity-50 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pastel-mint blob opacity-40 blur-2xl" />

      {/* Floating robots */}
      <div className="absolute top-32 left-8 md:left-20 animate-float">
        <HelperRobot className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg" />
      </div>
      <div className="absolute top-48 right-8 md:right-24 animate-float-slow delay-500">
        <ExplorerRobot className="w-20 h-20 md:w-28 md:h-28 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-32 left-12 md:left-32 animate-float-reverse delay-300">
        <SpaceRobot className="w-28 h-28 md:w-36 md:h-36 drop-shadow-lg" />
      </div>

      {/* Stars decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-neon-yellow">
              <polygon
                points="8,0 9.5,6 16,6.5 10.5,10 12,16 8,12 4,16 5.5,10 0,6.5 6.5,6"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6 animate-bounce-gentle">
          <span className="inline-block px-6 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm md:text-base shadow-soft">
            ✨ Discover the Future of Friendly Machines ✨
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
          Welcome to{" "}
          <span className="gradient-text animate-gradient">RoboVerse!</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Enter a world where adorable robots help, explore, heal, and adventure
          across the galaxy! Meet our fantastic robot friends and discover how
          they make the future brighter. 🤖💫
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#robots"
            className="group px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-display font-semibold text-lg shadow-glow-pink hover:shadow-[0_0_50px_hsl(330,85%,60%/0.5)] transition-all duration-300 hover:scale-105"
          >
            Meet the Robots
            <span className="inline-block ml-2 group-hover:animate-wave">👋</span>
          </a>
          <a
            href="#future"
            className="px-8 py-4 rounded-2xl border-2 border-accent text-accent font-display font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow-blue"
          >
            Learn About the Future
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-2 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
