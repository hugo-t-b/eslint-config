import type { ESLintConfig } from "../types";
import rules from "./rules.json";

const config: ESLintConfig = {
  extends: [
    "../typescript/index.js"
  ],

  rules
};

export = config;
