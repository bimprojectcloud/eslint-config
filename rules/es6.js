module.exports = {

    env: {
        es6: true,
    },

    rules: {

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

    },

};
