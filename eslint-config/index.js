module.exports = {
    extends: ["airbnb-base", "plugin:prettier/recommended", "prettier", "plugin:import/recommended", "plugin:security-node/recommended"],
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 8,
    },
    plugins: [
        "import",
        "security-node",
        "prettier",
        "jest"
    ],
    env: {
        "jest/globals": true
    },
    rules: {
        "prettier/prettier": ["error"],
        "no-underscore-dangle": "off"
    },
};