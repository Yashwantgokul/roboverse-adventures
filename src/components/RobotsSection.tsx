import RobotCard from "./RobotCard";
import HelperRobot from "./robots/HelperRobot";
import ExplorerRobot from "./robots/ExplorerRobot";
import MedicalRobot from "./robots/MedicalRobot";
import SpaceRobot from "./robots/SpaceRobot";

const robots = [
  {
    title: "Helper Bots",
    description:
      "These cheerful companions assist with everyday tasks! From organizing your room to helping with homework, Helper Bots are always there with a smile and a helping hand.",
    icon: <HelperRobot className="w-full h-full" />,
    color: "teal" as const,
  },
  {
    title: "Explorer Bots",
    description:
      "Adventure awaits! Explorer Bots venture into jungles, caves, and underwater worlds to discover new species and ancient treasures. No place is too wild for their curiosity!",
    icon: <ExplorerRobot className="w-full h-full" />,
    color: "gold" as const,
  },
  {
    title: "Medical Bots",
    description:
      "With gentle care and super-smart sensors, Medical Bots help doctors keep everyone healthy. They can check temperatures, give virtual hugs, and make hospital visits less scary!",
    icon: <MedicalRobot className="w-full h-full" />,
    color: "coral" as const,
  },
  {
    title: "Space Bots",
    description:
      "To infinity and beyond! Space Bots explore distant planets, collect cosmic samples, and send back amazing pictures of galaxies far, far away. They're the ultimate astronauts!",
    icon: <SpaceRobot className="w-full h-full" />,
    color: "violet" as const,
  },
];

const RobotsSection = () => {
  return (
    <section id="robots" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-green/20 text-neon-green font-medium text-sm mb-4">
            🤖 Our Robot Friends
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Meet the <span className="gradient-text">Amazing Robots</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each type of robot has special abilities and a unique personality.
            They all share one thing in common: they love helping humans!
          </p>
        </div>

        {/* Robot cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {robots.map((robot, index) => (
            <RobotCard
              key={robot.title}
              title={robot.title}
              description={robot.description}
              icon={robot.icon}
              color={robot.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RobotsSection;
