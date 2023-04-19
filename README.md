# My ESLint Config

This is my ESLint configuration for [JavaScript](#usage), [TypeScript](#typescript), [Vitest unit tests](#vitest), and [Vue SFCs](#vue).

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

All rules can be modified or turned off with the `rules` property in your `.eslintrc`.

### TypeScript

```yaml
extends: "@hugo-t-b/eslint-config/typescript"
# ...
```

You will need a `tsconfig.json` file and to have installed `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, and `eslint-import-resolver-typescript`.

### Vitest

```yaml
extends: "@hugo-t-b/eslint-config/vitest"
# ...
```

This config builds on the TypeScript one, so you will need to follow the steps needed for that to work.

### Vue

You will need to add the JavaScript config before the Vue one in the `extends` property of your `.eslintrc`:

```yaml
extends: 
  - "@hugo-t-b"
  - "@hugo-t-b/eslint-config/vue"
# ...
```

You will need to have installed `eslint-plugin-vue` and `vue-eslint-parser`.

#### With the TypeScript config

The Vue config works with the TypeScript config automatically. Once you have followed the steps needed for both to work, add the TypeScript config before the Vue one in the `extends` property of your `.eslintrc`:

```yaml
extends:
  - "@hugo-t-b/eslint-config/typescript"
  - "@hugo-t-b/eslint-config/vue"
# ...
```

Note: you will need a `script` or `<script setup>` with the `lang` set to `ts` in every SFC. To remove this requirement, set `parserOptions.parser` to `@typescript-eslint/parser` in your `.eslintrc`.
