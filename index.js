module.exports = {

    env: {
        jest: true,
    },

    extends: [
        "airbnb-base",
        ...[
            "./rules/style",
        ].map(require.resolve),
    ],

    parser: "babel-eslint",

};
