import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-console":
        import.meta.env?.NODE_ENV === "production" ? "error" : "off",
    },
  },
  pluginJs.configs.recommended,
  {
    files: ["/*.{jsx,tsx}"], // Ensure React rules apply only to JSX/TSX files
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/prop-types": "off", // Example rule
      "react/jsx-uses-react": "off", // Example rule
      "react/jsx-uses-vars": "error", // Example rule
      // Add more React-related rules or override as needed
    },
  },
];
