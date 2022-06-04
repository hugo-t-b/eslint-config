export interface ESLintConfig {
  env?: ESLintEnv;
  extends?: string[];
  parser?: string;
  parserOptions?: ParserOptions;
  plugins?: ESLintPlugins;
  rules?: object;
  settings?: object;
}

export interface ESLintEnv {
  [environment: string]: boolean;
}

export type ESLintPlugins = string[];

export interface ParserOptions {
  ecmaVersion?: number;
  extraFileExtensions?: string[];
  parser?: string | { [ext: string]: string };
  project?: string;
  sourceType?: "script" | "module";
}
