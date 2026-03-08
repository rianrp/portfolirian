/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--color-background) / <alpha-value>)",
                surface: "rgb(var(--color-surface) / <alpha-value>)",
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                accent: "rgb(var(--color-accent) / <alpha-value>)",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1280px", // Cap max width
            },
        },
    },
    plugins: [],
}
