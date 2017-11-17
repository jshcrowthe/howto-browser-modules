# @howto/browser-modules [![NPM Module][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A sample repo demonstrating package.json config for a browser module published to NPM

## Explainer 

This is an example repo illustrating some concepts of creating **browser specific** NPM modules. While many (admittedly most) modules published to NPM are for Node environments, this repo is designed to illustrate how to create NPM modules only targeting web environments.

This demo does not cover isomorphic/universal modules (e.g. [firebase](https://npm.im/firebase), [moment](https://npm.im/moment), etc), only code that you would load in a browser.

### tl;dr

Ship both an ECMAScript Module (ESM) build and a CommonJS (CJS) build to your users. Do this by specifying the `pkg.module` field for your ESM entrypoint, and the `pkg.main` field for your CJS entrypoint.

If you are not shipping isomorphic code, avoid defining a `pkg.browser`.

### Key points

The main things to call to attention here are in the `package.json`, specifically: 

- `pkg.main`
- `pkg.module`

_NOTE: You can see examples of the [`pkg.main`](https://github.com/jshcrowthe/howto-browser-modules/blob/master/package.json#L13) and the [`pkg.module`](https://github.com/jshcrowthe/howto-browser-modules/blob/master/package.json#L14) in this repos `package.json`_

#### `pkg.main`

This is the standard CJS entrypoint to your module as [defined by NPM](https://docs.npmjs.com/files/package.json#main). Bundlers like browserify, rollup and webpack all use this field as the entrypoint when no other entry points are defined.

**Caveat:** Though all the bundlers will respect this field, not all of the bundlers expect the same format or have the same behavior. It is best to also provide the `pkg.module` explained below.

#### `pkg.module`

The [Rollup wiki](https://github.com/rollup/rollup/wiki/pkg.module) gives a really nice explainer of the rationale behind this field. As the module landscape moves from CJS => ESM\* using ESM where possible will result in more performant apps across the board. 

Webpack and Rollup both support this field OOTB which helps lower the barrier to writing a performant app.

#### `pkg.browser`

Many bundlers also support a `pkg.browser`. However, this field is only really useful if you are shipping isomorphic libraries (i.e. libraries that run in both browser and Node.js environments). If you are only shipping a browser module, this field can be safely omitted.

Bundlers handle the absence of this field in different ways:

- **Rollup**: Rollup doesn't care if you provide this field, `pkg.browser` is not something they support OOTB. Though you can support it via plugins, you have to specify that support yourself.
- **Webpack**: Webpack will use the `pkg.browser` if available. In the case that it cannot find a valid `pkg.browser` it will fallback to the `pkg.module` followed by `pkg.main` (i.e. precedence is: `pkg.browser` > `pkg.module` > `pkg.main`)
- **Browserify**: Browserify will also use the `pkg.browser` if available. However, due to its current lack of ESM support, it will ignore the `pkg.module` and fall back to the `pkg.main`.

#### What about `.mjs` (i.e. "Michael Jackson Script")

This is something that is being considered for Node environments but is _currently_ not something that impacts browser modules. I will add another module talking about isomorphic modules, and will cover this there!

<!-- TODO: Update this when I ship @howto/isomorphic-modules -->

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

[npm-image]: https://badge.fury.io/js/%40howto%2Fbrowser-modules.svg
[npm-url]: https://npmjs.org/package/@howto/browser-modules
[travis-image]: https://travis-ci.org/jshcrowthe/howto-browser-modules.svg?branch=master
[travis-url]: https://travis-ci.org/jshcrowthe/howto-browser-modules
[daviddm-image]: https://david-dm.org/jshcrowthe/howto-browser-modules.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jshcrowthe/howto-browser-modules
