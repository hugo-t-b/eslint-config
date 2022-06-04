import { defaultEnv, defaultParserOptions, defaultPlugins, defaultSettings } from "./defaults";
import type { ESLintConfig } from "../types";
import rules from "./rules.json";

const config: ESLintConfig = {
  env: defaultEnv,

  extends: [
    "plugin:vue/vue3-recommended",
    "../index.js"
  ],

  parser: "vue-eslint-parser",
  parserOptions: defaultParserOptions,
  plugins: defaultPlugins,
  rules,
  settings: defaultSettings
};

export = config;
