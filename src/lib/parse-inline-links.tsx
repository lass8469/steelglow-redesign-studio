import React from "react";
import LocalizedLink from "@/components/LocalizedLink";

const LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Parses markdown-style inline links in text content.
 * [anchor text](/path) → LocalizedLink for internal paths, <a> for external URLs.
 */
export function parseInlineLinks(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = LINK_REGEX.exec(text)) !== null) {
    // Push text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const anchor = match[1];
    const href = match[2];

    if (href.startsWith("http://") || href.startsWith("https://")) {
      parts.push(
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
        >
          {anchor}
        </a>
      );
    } else {
      parts.push(
        <LocalizedLink
          key={match.index}
          to={href}
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
        >
          {anchor}
        </LocalizedLink>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no links found, return original string
  if (parts.length === 0) return text;
  if (parts.length === 1 && typeof parts[0] === "string") return text;

  return <>{parts}</>;
}
