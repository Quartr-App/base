module.exports = {
    extends: ["airbnb", "eslint:recommended", "plugin:import/recommended"],
    env: {
      node: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 8,
    },
    plugins: [
        'import'
    ],
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
    },
  };