import { ESLintPlugins, ParserOptions } from "../types";

export { defaultEnv, defaultSettings } from "../defaults";

export const defaultParserOptions: ParserOptions = {
  parser: {
    "js": "espree",
    "ts": "@typescript-eslint/parser"
  }
};

export const defaultPlugins: ESLintPlugins = [
  "vue"
];
