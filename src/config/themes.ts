import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

export const THEMES: Record<string, Theme> = {
    light_default: {
        background: "#f6f8fc",
        foreground: "#10131a",
        accent: "#002fa7",
        muted: "#526078",
        border: "#d8dfec",
        surface: "#edf2fa",
        isDark: false,
    },
    dark_default: {
        background: "#05070d",
        foreground: "#dce8fb",
        accent: "#82aaff",
        muted: "#9aa9c0",
        border: "#1b2c58",
        surface: "#0c1220",
        isDark: true,
    },
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#29231c',
        muted: '#736658',
        border: '#eaddc6',
        accent: '#b84c30',
    },
    dark_notepad: {
        isDark: true,
        background: '#241f1c',
        surface: '#241f1c',
        foreground: '#e6dfd3',
        muted: '#8a7d71',
        border: '#3d342d',
        accent: '#d97757',
    }
};
