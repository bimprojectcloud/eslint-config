module.exports = {
    rules: {

        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
            },
        ],

        "no-underscore-dangle": [
            "error",
            {
                allow: [
                    "_id",
                ],
            },
        ],

        "padded-blocks": [
            "error",
            {
                blocks: "never",
                classes: "always",
                switches: "always",
            },
        ],

        quotes: [
            "error",
            "double",
        ],

        "sort-imports": [
            "error",
            {
                allowSeparatedGroups: true,
                ignoreCase: true,
                memberSyntaxSortOrder: [
                    "none",
                    "single",
                    "all",
                    "multiple",
                ],
            },
        ],

        "template-curly-spacing": [
            "error",
            "always",
        ],

    },
};
