module.exports = {
    extends: ["@quartr/eslint-config-react", "plugin:import/typescript"],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }
       ]
    },
    overrides: [
        {
            rules: {
              "react/require-default-props": "off"
            },
            files: ["*.ts", "*.tsx"], 
            extends: [
              "plugin:@typescript-eslint/recommended"
            ],
            parserOptions: {
              "project": ["./tsconfig.json"]
            }
          }
    ]
};