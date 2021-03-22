module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            128: "32rem",
            144: "36rem",
            156: "48rem",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
