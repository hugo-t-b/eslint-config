import { defaultEnv, defaultParserOptions, defaultPlugins } from "./defaults";
import type { ESLintConfig } from "./types";
import rules from "./rules.json";

const config: ESLintConfig = {
  env: defaultEnv,

  extends: [
    "eslint:recommended"
  ],

  parserOptions: defaultParserOptions,
  plugins: defaultPlugins,
  rules
};

export = config;
