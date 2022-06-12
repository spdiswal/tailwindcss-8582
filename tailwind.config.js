/**
 *  @type {import("tailwindcss").Config}
 */
module.exports = {
    content: ["./src/index.html"],
    theme: {
        // Raises an error (RangeError: Maximum call stack size exceeded):
        colors: ({ theme }) => ({
            "foreground": theme("colors.sky.500"),
        }),
        //
        // Workaround:
        // colors: ({ colors }) => ({
        //     "foreground": colors.sky["500"],
        // }),
    },
    variants: {},
    plugins: [],
}
