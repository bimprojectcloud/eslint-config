module.exports = {

    rules: {

        "function-call-argument-newline": [
            "error",
            "consistent",
        ],

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

        "template-curly-spacing": [
            "error",
            "always",
        ],

    },

};
