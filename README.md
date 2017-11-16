# @howto/browser-modules [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A sample repo demonstrating package.json config for a browser module published to NPM

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
