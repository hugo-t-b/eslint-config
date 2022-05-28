import type { ESLintPlugins, ParserOptions } from "../types";

export { defaultEnv } from "../defaults";

export const defaultParserOptions: ParserOptions = {
  project: "./tsconfig.json"
};

export const defaultPlugins: ESLintPlugins = [
  "@typescript-eslint"
];

export const defaultSettings: object = {
  "import/parsers": {
    "@typescript-eslint/parser": [
      ".ts"
    ]
  },

  "import/resolver": {
    typescript: {
      alwaysTryTypes: true
    }
  }
};
