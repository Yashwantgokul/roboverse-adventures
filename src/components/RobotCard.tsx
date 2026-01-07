import { ReactNode } from "react";

interface RobotCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: "coral" | "teal" | "gold" | "violet";
  delay?: number;
}

const colorClasses = {
  coral: {
    bg: "bg-robot-coral/10",
    border: "border-robot-coral/30",
    glow: "hover:shadow-[0_0_40px_hsl(15,85%,65%/0.3)]",
    accent: "text-robot-coral",
  },
  teal: {
    bg: "bg-robot-teal/10",
    border: "border-robot-teal/30",
    glow: "hover:shadow-[0_0_40px_hsl(175,70%,45%/0.3)]",
    accent: "text-robot-teal",
  },
  gold: {
    bg: "bg-robot-gold/10",
    border: "border-robot-gold/30",
    glow: "hover:shadow-[0_0_40px_hsl(45,90%,55%/0.3)]",
    accent: "text-robot-gold",
  },
  violet: {
    bg: "bg-robot-violet/10",
    border: "border-robot-violet/30",
    glow: "hover:shadow-[0_0_40px_hsl(270,70%,60%/0.3)]",
    accent: "text-robot-violet",
  },
};

const RobotCard = ({ title, description, icon, color, delay = 0 }: RobotCardProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`relative group p-6 md:p-8 rounded-3xl ${colors.bg} border-2 ${colors.border} ${colors.glow} transition-all duration-500 hover:scale-105 hover:-translate-y-2 card-elevated`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Floating robot icon */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 animate-float">
        {icon}
      </div>

      {/* Content */}
      <h3 className={`text-2xl md:text-3xl font-display font-bold mb-3 ${colors.accent}`}>
        {title}
      </h3>
      <p className="text-muted-foreground font-body leading-relaxed">
        {description}
      </p>

      {/* Decorative corner accent */}
      <div
        className={`absolute top-4 right-4 w-3 h-3 rounded-full ${colors.accent.replace("text-", "bg-")} opacity-60 group-hover:opacity-100 transition-opacity`}
      />
    </div>
  );
};

export default RobotCard;
