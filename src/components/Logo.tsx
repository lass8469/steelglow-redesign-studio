import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl lg:text-3xl",
    lg: "text-3xl",
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <span
        className={`font-black tracking-tight bg-gradient-to-r from-[#8B2D2D] via-[#D4652F] to-[#F5B82E] bg-clip-text text-transparent ${sizeClasses[size]}`}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        DESICCANT
      </span>
    </Link>
  );
};

export default Logo;
