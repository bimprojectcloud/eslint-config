module.exports = {

    env: {
        jest: true,
    },

    extends: [
        "airbnb",
        ...[
            "./index",
        ].map(require.resolve),
    ],

    parser: "babel-eslint",

};
