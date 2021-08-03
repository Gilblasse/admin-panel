const btn = `flex h-8 text-sm items-center rounded-3xl`

const style = {
    deleteBtn: `
        ${btn}
        border-gray-400
        text-admin:subtile
        hover:border-red-500
        hover:text-red-500
        focus:text-red-500
        focus:border-red-500
    `,

    addUserBtn: `
        ${btn}
        text-admin:secondary
        border-admin:secondary
        hover:border-admin:secondary
        hover:text-admin:secondary
        focus:text-admin:secondary
        focus:border-admin:secondary
    `,

    testBtn: (isRed) => `
        ${isRed ? "text-red-500" : "text-blue-700"}
    `,
}

export default style
