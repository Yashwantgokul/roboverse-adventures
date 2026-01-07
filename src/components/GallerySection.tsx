import HelperRobot from "./robots/HelperRobot";
import ExplorerRobot from "./robots/ExplorerRobot";
import MedicalRobot from "./robots/MedicalRobot";
import SpaceRobot from "./robots/SpaceRobot";

const galleryItems = [
  { Robot: HelperRobot, name: "Chip", role: "Kitchen Helper", animation: "animate-float" },
  { Robot: ExplorerRobot, name: "Scout", role: "Jungle Explorer", animation: "animate-float-slow" },
  { Robot: MedicalRobot, name: "Nurse Joy", role: "Hospital Assistant", animation: "animate-float-reverse" },
  { Robot: SpaceRobot, name: "Cosmo", role: "Mars Pioneer", animation: "animate-float" },
  { Robot: HelperRobot, name: "Buddy", role: "Study Partner", animation: "animate-float-slow" },
  { Robot: SpaceRobot, name: "Nova", role: "Star Mapper", animation: "animate-float-reverse" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background stripes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-spin-slow">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-4 bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent"
              style={{
                transform: `rotate(${i * 45}deg) translateX(-50%)`,
                transformOrigin: "left center",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/20 text-neon-purple font-medium text-sm mb-4">
            📸 Robot Gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="gradient-text">Star Robots</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            These famous robots have helped millions of people around the world!
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group relative bg-card/80 backdrop-blur-sm rounded-3xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:-translate-y-2"
            >
              {/* Robot illustration */}
              <div className={`w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 ${item.animation}`}>
                <item.Robot className="w-full h-full drop-shadow-md" />
              </div>

              {/* Info */}
              <div className="text-center">
                <h4 className="font-display font-bold text-lg md:text-xl text-foreground mb-1">
                  {item.name}
                </h4>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Fun fact */}
        <div className="mt-12 text-center">
          <p className="inline-block px-6 py-3 rounded-2xl bg-secondary text-secondary-foreground font-medium">
            💡 Fun Fact: Over 1 million robot friends are helping humans right now!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
