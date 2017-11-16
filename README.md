# @howto/browser-modules [![npm-image]][npm-url]] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A sample repo demonstrating package.json config for a browser module published to NPM

## Explainer 

This is an example repo illustrating some concepts of creating **browser specific** modules. This demo does not cover isomorphic/universal modules (e.g. [firebase](https://npm.im/firebase), [moment](https://npm.im/moment), etc), only code that you would load in a browser.

### Key points

The main things to call to attention here are in the `package.json`, specifically: 

- `pkg.main`
- `pkg.module`

#### `pkg.main`

This is the standard CJS entrypoint to your module as [defined by NPM](https://docs.npmjs.com/files/package.json#main). Bundlers like browserify, rollup and webpack all use this field as the fallback default entrypoint to the module.

**Caveat:** Though all the browsers will use this field, not all of the browsers expect the same format here. Best to provide additional info.

#### `pkg.module`

The [Rollup wiki](https://github.com/rollup/rollup/wiki/pkg.module) gives a really nice explainer of the rationale behind this field. As the module landscape moves from CJS => ESM\* using ESM where possible will result in more performant apps across the board. 

Webpack and Rollup both support this field OOTB which helps lower the barrier to writing a performant app.

_\*: ESM (EcmaScript Modules), CJS (CommonJS Modules)_

## Installation

```sh
$ npm install --save @howto/browser-modules
```

## Usage

### ESM

```js
import { sum } from '@howto/browser-modules';

sum(1,2,3,4,5)
```

### CJS

```js
const { sum } = require('@howto/browser-modules');

sum(1,2,3,4,5)
```

## License

MIT © [Josh Crowther](https://jcrowther.io)

[npm-image]: https://badge.fury.io/js/@howto/browser-modules.svg
[npm-url]: https://npmjs.org/package/@howto/browser-modules
[travis-image]: https://travis-ci.org/jshcrowthe/howto-browser-modules.svg?branch=master
[travis-url]: https://travis-ci.org/jshcrowthe/howto-browser-modules
[daviddm-image]: https://david-dm.org/jshcrowthe/howto-browser-modules.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jshcrowthe/howto-browser-modules
