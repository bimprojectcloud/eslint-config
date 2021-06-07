module.exports = {

    env: {
        jest: true,
    },

    extends: [
        "airbnb-base",
        "plugin:import/recommended",
        "plugin:node/recommended",
        ...[
            "./rules/style",
        ].map(require.resolve),
    ],

    parser: "babel-eslint",

};
