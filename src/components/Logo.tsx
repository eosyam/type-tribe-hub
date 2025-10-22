import { Brain } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg`}>
          <Brain className={`${size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-6 w-6"} text-background`} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-md opacity-50 -z-10" />
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent`}>
          Psyche
        </span>
      )}
    </div>
  );
};
