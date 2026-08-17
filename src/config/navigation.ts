import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
    { href: "/", label: "About", isActive: true },
    { href: "/projects", label: "Work", isActive: true },
    { href: "/posts", label: "Journal", isActive: false },
    { href: "/cv", label: "CV", isActive: false },
];
