import LocalizedLink from "./LocalizedLink";

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

  // Subline sizes tuned so the subline width matches the DESICCANT wordmark width.
  // DESICCANT (9 chars, font-black, tracking-tight) vs "PART OF DRY-BAG A/S" (19 chars incl. spaces, lighter weight, wider tracking).
  const sublineClasses = {
    sm: "text-[7px] tracking-[0.18em]",
    md: "text-[8px] lg:text-[9.5px] tracking-[0.18em] lg:tracking-[0.205em]",
    lg: "text-[9.5px] tracking-[0.205em]",
  };

  return (
    <LocalizedLink to="/" className={`inline-flex flex-col items-stretch leading-none ${className}`}>
      <span
        className={`font-black tracking-tight text-gradient ${sizeClasses[size]}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        DESICCANT
      </span>
      <span
        className={`mt-1 font-medium text-muted-foreground uppercase text-center ${sublineClasses[size]}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Part of Dry-Bag A/S
      </span>
    </LocalizedLink>
  );
};

export default Logo;
