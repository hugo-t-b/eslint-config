import { defaultEnv, defaultParserOptions } from "./defaults";
import { ESLintConfig } from "./types";
import rules from "./rules.json";

const config: ESLintConfig = {
  extends: [
    "eslint:recommended"
  ],

  env: defaultEnv,
  parserOptions: defaultParserOptions,
  rules
};

export default config;
