import { defaultEnv, defaultParserOptions, defaultPlugins } from "typescript/defaults";
import type { ESLintConfig } from "types";
import rules from "typescript/rules.json";

const config: ESLintConfig = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "../index.js"
  ],

  env: defaultEnv,
  parser: "@typescript-eslint/parser",
  parserOptions: defaultParserOptions,
  plugins: defaultPlugins,
  rules
};

export default config;
