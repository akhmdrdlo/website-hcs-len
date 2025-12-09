/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fef2f2',  // red-50
                    100: '#fee2e2', // red-100
                    200: '#fecaca', // red-200
                    300: '#fca5a5', // red-300
                    400: '#f87171', // red-400
                    500: '#ef4444', // red-500 (Bright Red)
                    600: '#dc2626', // red-600
                    700: '#b91c1c', // red-700
                    800: '#991b1b', // red-800
                    900: '#7f1d1d', // red-900 (Maroon)
                    950: '#450a0a', // red-950
                },
                secondary: {
                    50: '#fff1f2',  // rose-50
                    100: '#ffe4e6', // rose-100
                    200: '#fecdd3', // rose-200
                    300: '#fda4af', // rose-300
                    400: '#fb7185', // rose-400
                    500: '#f43f5e', // rose-500
                    600: '#e11d48', // rose-600
                    700: '#be123c', // rose-700
                    800: '#9f1239', // rose-800
                    900: '#881337', // rose-900
                    950: '#4c0519', // rose-950
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
