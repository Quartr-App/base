module.exports = {
    extends: ["@quartr/eslint-config", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 8,
    },
    plugins: [
        "@typescript-eslint"
    ],
};