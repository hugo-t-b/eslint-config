import { defaultEnv, defaultParserOptions, defaultPlugins } from "./defaults";
import type { ESLintConfig } from "../types";
import rules from "./rules.json";

const config: ESLintConfig = {
  env: defaultEnv,

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "../index.js"
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: defaultParserOptions,
  plugins: defaultPlugins,
  rules
};

export = config;
