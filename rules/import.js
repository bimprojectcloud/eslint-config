module.exports = {

    plugins: [
        "import",
    ],

    rules: {

        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],

        "import/order": [
            "error",
            {
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    [
                        "parent",
                        "sibling",
                        "index",
                    ],
                    [
                        "object",
                        "type",
                    ],
                ],
                "newlines-between": "always",
            },
        ],

    },

    settings: {
        "import/resolver": {
            node: {
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx",
                ],
            },
        },
    },

};
