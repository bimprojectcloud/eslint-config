module.exports = {

    overrides: [
        {
            files: [
                "*.ts",
                "*.tsx",
            ],
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:import/typescript",
            ],
        },
    ],

};
