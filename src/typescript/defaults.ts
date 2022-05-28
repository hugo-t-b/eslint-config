import type { ESLintPlugins, ParserOptions } from "../types";

export { defaultEnv } from "../defaults";

export const defaultParserOptions: ParserOptions = {
  project: "./tsconfig.json"
};

export const defaultPlugins: ESLintPlugins = [
  "@typescript-eslint"
];
