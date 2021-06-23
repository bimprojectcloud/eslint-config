module.exports = {

    extends: [
        require.resolve("../rules/es6"),
        require.resolve("../rules/import"),
        require.resolve("../rules/node"),
        require.resolve("../rules/style"),
    ],

    overrides: [
        {
            files: [
                "*.test.*",
                "test/**/*",
            ],
            env: {
                jest: true,
            },
        },
    ],

    parser: "babel-eslint",

};
