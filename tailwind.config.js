/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                background: {
                    blue: 'var(--color-bg-blue)',
                    blueHover: 'var(--color-bg-blue-hover)',
                    footer: 'var(--color-footer)',
                    white: 'var(--color-bg-white)',
                }
            },
            textColor:{
                text:{
                    ligth: 'var(--text-ligth)',
                    blue: 'var(--color-bg-blue)',
                    blueHover: 'var(--color-bg-blue-hover)',
                    gray: 'var(--text-gray)'
                }
                
            }
        },
    },
    plugins: [],
}