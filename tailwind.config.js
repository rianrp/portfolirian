/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000", // Pure Black
                surface: "#0a0a0a", // Nearly black for cards
                primary: "#f8fafc", // White text
                secondary: "#a1a1aa", // Gray text
                accent: "#6366f1", // Indigo accent
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
