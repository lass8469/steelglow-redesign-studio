import { Link, LinkProps } from "react-router-dom";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { forwardRef } from "react";

/**
 * A Link component that automatically prepends the current language prefix.
 * Use this instead of react-router-dom's Link for internal navigation.
 */
const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...props }, ref) => {
    const localizedPath = useLocalizedPath();
    const localizedTo = typeof to === "string" ? localizedPath(to) : to;
    return <Link ref={ref} to={localizedTo} {...props} />;
  }
);

LocalizedLink.displayName = "LocalizedLink";

export default LocalizedLink;
