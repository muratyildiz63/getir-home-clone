/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#5d3ebc",
                "dark": "#4c3398",
                "yellow": "#ffd300"
            },
            backgroundImage: theme => ({
                "mobile-app": "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)"
            })

        },
        container: {
            center: true,
        },
    },
    plugins: [],
}