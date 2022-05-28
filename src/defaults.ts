import type { ESLintEnv, ESLintPlugins, ParserOptions } from "./types";

export const defaultEnv: ESLintEnv = {
  browser: true,
  node: true,
  es2022: true
};

export const defaultParserOptions: ParserOptions = {
  sourceType: "module"
};

export const defaultPlugins: ESLintPlugins = [];
