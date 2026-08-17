import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://THU-rover.github.io/",
    author: "张毅天",
    desc: "在物理、信息与计算之间学习，也在日常生活的细节里保持好奇。",
    title: "张毅天",
    ogImage: "images/twilight-harbor.png",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "zh-CN",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: false,
    themeLight: "light_default",
    themeDark: "dark_default",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: false,
    showRSSInFooter: true,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: umami
};
