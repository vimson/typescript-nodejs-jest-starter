# TypeScript + Node.js + Jest starter template

![Node.js CI](https://github.com/vimson/typescript-nodejs-jest-starter/actions/workflows/nodejs.yml/badge.svg)

## How to setup

- checkout the repository
- `npm i`
- `npm run test-watch src/tests/*` watch and run the tests
- `npm run start-dev` run in watch mode
- `npm build` to build the application

## Underlying setup

```shell
node -v > .nvmrc

npm i -D typescript ts-node tsconfig-paths

npm i -D jest ts-jest

npm i -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import
eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

npm i -D prettier lodash

npm i -D prettier lodash

npm i -D rimraf concurrently nodemon

// copy prettier, es-lint, ts-config, jest-config from the repo

```

## src/utils

can have static methods / functions and be stateless

## src/helpers

A Helper can be a utility class or it can be stateful or require an instance be created.

## src/libs

You can use any third party library which are not using npm can put here. Or youc an create your own lib that to be easily distributed among different projects

## src/tests

Tests goes here
