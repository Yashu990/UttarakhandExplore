/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1F4E79', // Himalayan Blue
                secondary: '#2E7D32', // Forest Green
                accent: '#FF9F1C', // Sunrise Orange
                bgLight: '#F9FAFB',
                bgDark: '#111827',
                textPrimary: '#1F2937',
                textSecondary: '#6B7280',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Poppins', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
