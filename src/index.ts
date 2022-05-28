import { defaultEnv, defaultParserOptions, defaultPlugins, defaultSettings } from "./defaults";
import type { ESLintConfig } from "./types";
import rules from "./rules.json";

const config: ESLintConfig = {
  env: defaultEnv,

  extends: [
    "eslint:recommended",
    "plugin:import/recommended"
  ],

  parserOptions: defaultParserOptions,
  plugins: defaultPlugins,
  rules,
  settings: defaultSettings
};

export = config;
