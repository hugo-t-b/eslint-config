export interface ESLintConfig {
  env?: ESLintEnv,
  extends?: string[],
  parserOptions?: ParserOptions,
  rules?: object
};

export interface ESLintEnv {
  [environment: string]: boolean
};

export interface ParserOptions {
  ecmaVersion?: number,
  sourceType?: "script" | "module"
};
