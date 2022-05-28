export interface ESLintConfig {
  env?: ESLintEnv;
  extends?: string[];
  parser?: string;
  parserOptions?: ParserOptions;
  plugins?: ESLintPlugins;
  rules?: object;
}

export interface ESLintEnv {
  [environment: string]: boolean;
}

export type ESLintPlugins = string[];

export interface ParserOptions {
  ecmaVersion?: number;
  project?: string;
  sourceType?: "script" | "module";
}
