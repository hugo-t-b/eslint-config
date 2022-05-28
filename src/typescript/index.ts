import { defaultEnv, defaultParserOptions, defaultPlugins, defaultSettings } from "./defaults";
import type { ESLintConfig } from "../types";
import rules from "./rules.json";

const config: ESLintConfig = {
  env: defaultEnv,

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "../index.js",
    "plugin:import/typescript"
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: defaultParserOptions,
  plugins: defaultPlugins,
  rules,
  settings: defaultSettings
};

export = config;
