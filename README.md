[![Build Status](https://travis-ci.org/georapbox/webpack-library-starter-kit.svg?branch=master)](https://travis-ci.org/georapbox/webpack-library-starter-kit)
[![Dependencies](https://david-dm.org/georapbox/webpack-library-starter-kit.svg?theme=shields.io)](https://david-dm.org/georapbox/webpack-library-starter-kit)
[![devDependency Status](https://david-dm.org/georapbox/webpack-library-starter-kit/dev-status.svg)](https://david-dm.org/georapbox/webpack-library-starter-kit?type=dev)

# anlam

Webpack starter kit for creating libraries (Input: ES6, Output: UMD, CommonJS)

## Features

- Webpack 4
- Babel 7
- ES6 as a source
- Exports in UMD and CommonJS
- ES6 test setup with [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/)
- Test coverage with [nyc command-line-client for Istanbul](https://github.com/istanbuljs/nyc)
- Linting with [ESLint](https://eslint.org/)
- Basic [Travis](https://travis-ci.org/) configuration

## Getting started

### 1. Setup the library's name

- Open `webpack.config.js` and change the value of `libraryName` variable with your library's name.
- Open `package.json` and change the following properties with your library's equivalent
  - `name`
  - `version`
  - `description`
  - `main`
  - `repository`
  - `author`
  - `license`
  - `bugs`
  - `homepage`

### 2. Install dependencies

- Run `npm install` to install the library's dependencies.

### 3. Build for development

- Having all the dependencies installed run `yarn dev`. This command will generate a `UMD` unminified bundle under the `dist` folder and a `CommonJS` bundle under the `lib` folder. It will also watch for changes in source files to recompile.

### 4. Build for production

- Having all the dependencies installed run `yarn build`. This command will generate two `UMD` bundles (unminified and minified) under the `dist` folder and a `CommonJS` bundle under the `lib` folder.

## Scripts

- `yarn build` - Produces production version of library under `dist` folder for UMD bundle and `lib` folder for `CommonJS` bundle.
- `yarn build:umd` - Produces an **unminified** UMD bundle under the `dist` folder.
- `yarn build:umdmin` - Produces an **minified** UMD bundle under the `dist` folder.
- `yarn build:commonjs` - Produces a CommonJS bundle under the `lib` folder.
- `yarn dev` - Produces a development version of library (both UMD and CommonJS) and runs a watcher to watch for changes.
- `yarn dev:umd` - Produces an unminified UMD bundle under the `dist` folder and runs a watcher to watch for changes.
- `yarn dev:commonjs` - Produces a CommonJS bundle under the `lib` folder and runs a watcher to watch for changes.
- `yarn test` - Runs the tests.
- `yarn coverage` - Runs the tests and provides with test coverage information.
- `yarn lint` - Lints the source code with ESlint.
- `yarn clean` - Deletes `dist`, `lib` and `coverage` folders.
- `yarn prepare` - Run both BEFORE the package is packed and published, on local npm install without any arguments, and when installing git dependencies.

## License

MIT License
