const features = [
  {
    icon: "🏠",
    title: "Smart Homes",
    description: "Robots will help keep our homes clean, safe, and cozy. They'll water plants, organize toys, and even cook healthy meals!",
  },
  {
    icon: "🏥",
    title: "Super Healthcare",
    description: "Medical robots will help doctors find cures faster, assist in surgeries, and make sure everyone gets the care they need.",
  },
  {
    icon: "🌍",
    title: "Earth Guardians",
    description: "Environmental robots will clean our oceans, plant millions of trees, and help endangered animals stay safe.",
  },
  {
    icon: "🚀",
    title: "Space Pioneers",
    description: "Brave robot explorers will build stations on Mars, discover new planets, and pave the way for human space adventures!",
  },
  {
    icon: "📚",
    title: "Learning Buddies",
    description: "Patient robot tutors will help every kid learn at their own pace, making education fun and accessible for all.",
  },
  {
    icon: "🎨",
    title: "Creative Partners",
    description: "Artist robots will collaborate with humans to create amazing music, paintings, and stories we never imagined!",
  },
];

const FutureSection = () => {
  return (
    <section id="future" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pastel-lavender/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-blue/20 text-neon-blue font-medium text-sm mb-4">
            🔮 The Future
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            How Robots Will <span className="gradient-text">Help Humanity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The future is bright when humans and robots work together! Here's how our
            mechanical friends will make the world a better place.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover line accent */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-primary via-accent to-neon-green rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-neon-green/10 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              🌟 The Future Needs <span className="gradient-text">YOU</span>!
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Want to help build amazing robots? Study science, math, and technology,
              and one day you could design the next generation of robot friends!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
