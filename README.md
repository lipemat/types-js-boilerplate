# JS Boilerplate TypeScript

External TypeScript definitions for `@lipemat/js-boilerplate` and `@wordpress` Gutenberg packages

## Usage

We don't have access to the global `@types` namespace referenced in these packages, so it must be included via a direct Git URL.

This must be declared in direct dependencies if using Yarn V2 with PNP enabled as @types
may not be inferred directly from `@lipemat/js-boilerplate` with PNP.

```json
{
  "dependencies": {
    "@types/lipemat__js-boilerplate": "lipemat/types-js-boilerplate#semver:^1"
  }
}

```
