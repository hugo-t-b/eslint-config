import type { ESLintPlugins, ParserOptions } from "../types";

export { defaultEnv, defaultSettings } from "../defaults";

export const defaultParserOptions: ParserOptions = {
  parser: {
    js: "espree",
    ts: "@typescript-eslint/parser"
  },

  project: "tsconfig.json"
};

export const defaultPlugins: ESLintPlugins = [
  "vue"
];
