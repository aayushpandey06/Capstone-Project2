import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  pluginJs.configs.recommended, // ESLint recommended rules

  {
    files: ["**/*.{js,mjs,cjs,jsx,tsx}"], // Ensure all relevant files are included
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Enable ES Modules
      globals: {
        window: "readonly",
        document: "readonly",
        alert: "readonly",
        FormData: "readonly",
        fetch: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-console": import.meta.env?.NODE_ENV === "production" ? "error" : "off",
    },
  },

  {
    files: ["**/*.{jsx,tsx}"], // Apply only to React files
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
    },
  },
];
