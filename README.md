# a11y.js [![Build Status](https://travis-ci.org/IBM-Watson/a11y.js.svg)](https://travis-ci.org/IBM-Watson/a11y.js) [![Coverage Status](https://img.shields.io/coveralls/IBM-Watson/a11y.js.svg)](https://coveralls.io/r/IBM-Watson/a11y.js) [![Code Climate](https://codeclimate.com/github/IBM-Watson/a11y.js/badges/gpa.svg)](https://codeclimate.com/github/IBM-Watson/a11y.js) [![Bower Version](https://badge.fury.io/bo/a11y.js.svg)](https://github.com/IBM-Watson/a11y.js/releases)

A collection of helper functions to make working with accessibility easier.

## Installation

`a11y.js` has no external dependencies and can be installed via [Bower](http://bower.io/):

```bash
$ bower install a11y.js --save
```

## State

The first available set of helpers, `a11y.state` is a collection of functions for applying [ARIA States](http://www.w3.org/TR/wai-aria/states_and_properties). There are three main functions, `set`, `toggle`, and `remove`.

* `a11y.state.set(element, state, value)` - This will set the `aria-{{state}}` of the given element. If the value isn't a valid value for the given state, it will not be applied.
* `a11y.state.toggle(element, state)` - This will toggle the value of `aria-{{state}}` between `true` and `false`, provided that the initial value of the state is not set to a non-boolean (for instance, `grammar` for `aria-invalid`).
* `a11y.state.remove(element, state)` - This will either remove the `aria-{{state}}` attribute completely if that state can be set to `undefined`, or will set the state to `false` if it cannot be.

`a11y.state` will provide warnings and throw errors to help provide information about what is going on, should they come up. To globally suppress warnings and errors (for instance, in production), set `a11y.state.suppressWarnings = true`.

## License

The MIT License (MIT)

Copyright (c) 2014 IBM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
