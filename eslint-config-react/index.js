module.exports = {
    parser: "@babel/eslint-parser",
    extends: ["airbnb", "plugin:prettier/recommended", "prettier", "plugin:import/recommended", "plugin:react-hooks/recommended"],
    globals: {
        window: true,
        document: true
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
        es2021: true,
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        ecmaVersion: 2021,
        requireConfigFile: false,
        babelOptions: {
            presets: ["@babel/preset-react"],
        }
    },
    plugins: ['prettier', "react", "react-hooks", "jest"],
    env: {
        "jest/globals": true
    },
    rules: {
        "prettier/prettier": ["error"],
        "react/prop-types": 0,
        "jsx-a11y/no-static-element-interactions ": 0,
        "react/function-component-definition": [1, {
            "namedComponents":  "arrow-function",
            "unnamedComponents": "arrow-function"
        }]
    },
};