/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: '#0a0a0a',
                'ink-soft': '#1a1a1a',
                paper: '#ffffff',
                neo: '#f1f1ec',
                'neo-blue': '#2563ff',
                'neo-blue-deep': '#1747c4',
                'neo-yellow': '#ffd84d',
                'neo-pink': '#ff5a8a',
                'neo-green': '#4ade80',
            },
            fontFamily: {
                display: ['"Bagel Fat One"', 'cursive'],
                sans: ['Nunito', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            boxShadow: {
                'brut-sm': '3px 3px 0 #0a0a0a',
                'brut': '6px 6px 0 #0a0a0a',
                'brut-lg': '10px 10px 0 #0a0a0a',
            },
            borderWidth: {
                '3': '3px',
                '4': '4px',
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
                "2xl": "1280px",
            },
        },
    },
    plugins: [],
}
