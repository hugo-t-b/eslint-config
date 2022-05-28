import { defaultEnv, defaultParserOptions, defaultPlugins } from "./defaults";
import type { ESLintConfig } from "./types";
import rules from "./rules.json";

const config: ESLintConfig = {
  extends: [
    "eslint:recommended"
  ],

  env: defaultEnv,
  parserOptions: defaultParserOptions,
  plugins: defaultPlugins,
  rules
};

export = config;
