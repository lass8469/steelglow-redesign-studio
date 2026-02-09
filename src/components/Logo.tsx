import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <span
        className={`font-black tracking-tight bg-gradient-to-r from-[#8B2D2D] via-[#D4652F] to-[#F5B82E] bg-clip-text text-transparent ${sizeClasses[size]}`}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontStretch: "expanded",
        }}
      >
        {/* D with stencil cut */}
        <span className="relative inline-block">
          D
          <span 
            className="absolute bg-background"
            style={{
              width: "3px",
              height: "45%",
              top: "30%",
              left: "35%",
              transform: "rotate(-45deg)",
            }}
          />
        </span>
        {/* E with stencil cut */}
        <span className="relative inline-block">
          E
          <span 
            className="absolute bg-background"
            style={{
              width: "3px",
              height: "35%",
              top: "35%",
              left: "30%",
              transform: "rotate(-45deg)",
            }}
          />
        </span>
        SICC
        {/* A with stencil cut */}
        <span className="relative inline-block">
          A
          <span 
            className="absolute bg-background"
            style={{
              width: "3px",
              height: "40%",
              top: "25%",
              left: "45%",
              transform: "rotate(-45deg)",
            }}
          />
        </span>
        NT
      </span>
    </Link>
  );
};

export default Logo;
