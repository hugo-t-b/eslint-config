# My ESLint Config

This is my ESLint configuration for JavaScript, TypeScript, Vitest unit tests, and Vue Single File Components (coming soon).

## Installation

### As a dev-dependency

```shell
npm install --save-dev @hugo-t-b/eslint-config
```

### Globally

```shell
npm install --global @hugo-t-b/eslint-config
```

## Usage

Modify the `extends` property in your `.eslintrc`:

```yaml
# .eslintrc.yaml
extends: "@hugo-t-b"
# ...
```

To use the TypeScript or Vitest config:

```yaml
extends: "@hugo-t-b/eslint-config/typescript" # or /vitest
# ...
```

Note: a `tsconfig.json` file is required for both the TypeScript and Vitest configs.

All rules can be modified or turned off with the `rules` property in your `.eslintrc`.
