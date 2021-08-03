module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                "admin:faded": "#CACED7",
                "admin:subtile": "#727784",
                "admin:bold": "#292928",
                "admin:norm": "#383838",
                "admin:secondary": "#50C5D9", // or 56C1D4
                "admin:tertiary": "#7DA0DA",
                "admin:quaternary": "#B7C2D0",
            },
            borderColor: {
                "admin:faded": "#CACED7",
                "admin:subtile": "#727784",
                "admin:bold": "#292928",
                "admin:norm": "#383838",
                "admin:secondary": "#50C5D9", // or 56C1D4
                "admin:quaternary": "#B7C2D0",
            },
            width: {
                "admin:search": "28rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
