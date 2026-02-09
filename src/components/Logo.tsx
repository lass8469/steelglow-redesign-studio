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
        className={`font-black tracking-tight text-gradient ${sizeClasses[size]}`}
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
