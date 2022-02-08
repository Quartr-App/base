module.exports = {
    extends: ["airbnb-base", "eslint:recommended", "plugin:import/recommended", "plugin:security-node/recommended", "prettier"],
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
        quotes: [
            "error",
            "single",
            {
                allowTemplateLiterals: true,
            },
        ],
        "no-var": ["error"],
        "comma-dangle": ["error", "always-multiline"],
        "prettier/prettier": ["error"]
    },
};