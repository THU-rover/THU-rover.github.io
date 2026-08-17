import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/GITHUB_USERNAME",
        linkTitle: `Visit my GitHub profile`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:YOUR_EMAIL@example.com",
        linkTitle: `Send me an email`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/",
        linkTitle: `Google Scholar profile`,
        isActive: false,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/",
        linkTitle: `ORCID profile`,
        isActive: false,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/YOUR_USERNAME/",
        linkTitle: `Visit my LinkedIn profile`,
        isActive: false,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
