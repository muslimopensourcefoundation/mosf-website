type LinkType = "github" | "linkedin" | "email";

interface LinkInfo {
  type: LinkType;
  url: string;
  ariaLabel: string;
  svg: {
    viewBox: string;
    path: string;
  };
}

const LINK_ICONS: Record<LinkType, { viewBox: string; path: string; ariaLabel: string }> = {
  github: {
    viewBox: "0 0 24 24",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    ariaLabel: "Visit GitHub profile"
  },
  linkedin: {
    viewBox: "0 0 24 24",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    ariaLabel: "Visit LinkedIn profile"
  },
  email: {
    viewBox: "0 0 24 24",
    path: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 2.421 3.83-2.424 5.612 6.817h-18.779l5.513-6.814zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z",
    ariaLabel: "Send email"
  }
};

function detectLinkType(url: string): LinkType {
  const lowerUrl = url.toLowerCase();
  
  if (lowerUrl.includes("github.com") || lowerUrl.startsWith("github.com")) {
    return "github";
  }
  
  if (lowerUrl.includes("linkedin.com") || lowerUrl.startsWith("linkedin.com")) {
    return "linkedin";
  }
  
  if (lowerUrl.startsWith("mailto:") || lowerUrl.includes("@")) {
    return "email";
  }
  
  // Default to email if it contains @ but no protocol
  if (lowerUrl.includes("@")) {
    return "email";
  }
  
  // Fallback - could throw an error or default to something
  return "email";
}

function normalizeUrl(url: string, type: LinkType): string {
  if (type === "email") {
    // If it's an email and doesn't start with mailto:, add it
    if (!url.toLowerCase().startsWith("mailto:")) {
      return `mailto:${url}`;
    }
  } else {
    // For GitHub and LinkedIn, ensure https:// protocol
    if (!url.toLowerCase().startsWith("http://") && !url.toLowerCase().startsWith("https://")) {
      return `https://${url}`;
    }
  }
  return url;
}

interface SocialLinksProps {
  contacts: Record<string, string> | string[];
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({ 
  contacts, 
  className = "flex flex-wrap gap-4",
  iconClassName = "w-6 h-6"
}: SocialLinksProps) {
  // Convert array to object if needed
  const contactsObj = Array.isArray(contacts) 
    ? Object.fromEntries(contacts.map((url, index) => [`link-${index}`, url]))
    : contacts;

  const linkInfos: LinkInfo[] = Object.entries(contactsObj).map(([key, url]) => {
    const type = detectLinkType(url);
    const normalizedUrl = normalizeUrl(url, type);
    const iconData = LINK_ICONS[type];
    
    return {
      type,
      url: normalizedUrl,
      ariaLabel: iconData.ariaLabel,
      svg: {
        viewBox: iconData.viewBox,
        path: iconData.path
      }
    };
  });

  return (
    <div className={className}>
      {linkInfos.map((linkInfo, index) => (
        <a
          key={index}
          href={linkInfo.url}
          target={linkInfo.type === "email" ? undefined : "_blank"}
          rel={linkInfo.type === "email" ? undefined : "noopener noreferrer"}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label={linkInfo.ariaLabel}
        >
          <svg
            className={iconClassName}
            fill="currentColor"
            viewBox={linkInfo.svg.viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={linkInfo.svg.path}></path>
          </svg>
        </a>
      ))}
    </div>
  );
}

