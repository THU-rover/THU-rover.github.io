import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "关于我",
    subtitle: "“先活在问题里。”里尔克《给青年诗人的信》",
        isActive: true,
    },
    blog: {
        title: "Journal",
        subtitle: "Notes from research, making, and the edges of my curiosity.",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "Selected papers, reports, and research artifacts.",
        isActive: false,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Talks, posters, and ideas shared in public.",
        isActive: false,
    },
    projects: {
        title: "Selected Work",
        subtitle: "Research projects, experiments, and things I have built.",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Explanations, workshops, and learning materials.",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore journal entries by topic.",
        isActive: false,
    },
    cv: {
        title: "CV",
        subtitle: "A compact record of my academic and professional path.",
        isActive: false,
    },
};
