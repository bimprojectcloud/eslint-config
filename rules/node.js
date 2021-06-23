module.exports = {

    overrides: [
        {
            files: [
                "*.test.*",
                "test/**/*",
            ],
            rules: {
                "node/no-unpublished-require": "off",
            },
        },
        {
            files: [
                "*.ts",
                "*.tsx",
            ],
            rules: {
                "node/no-unsupported-features/es-syntax": "off",
            },
        },
    ],

    plugins: [
        "node",
    ],

    rules: {

        "global-require": "warn",

    },

    settings: {
        node: {
            tryExtensions: [
                ".js",
                ".json",
                ".jsx",
                ".ts",
                ".tsx",
            ],
        },
    },

};
