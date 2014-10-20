/*
 * The global a11y-state object that contains all functionality.
 *
 */
if (window.a11y === null) {
  window.a11y = {};
}

(function (a11y, module, define) {
  'use strict';

  function A11yState() {
    var self = this;

    //////////////////////////////
    // State Crosscheck
    //////////////////////////////
    this.states = {
      'busy': {
      	'used': true,
      	'value': [
      	  true,
      	  false
      	]
      },
      'checked': {
      	'used': ['option'],
      	'value': [
      	  true,
      	  false,
      	  'mixed',
      	  undefined
      	]
      },
      'disabled': {
        'used': true,
        'value': [
          true,
          false
        ]
      },
      'expanded': {
        'used': [
          'button',
          'document',
          'link',
          'section',
          'sectionhead',
          'separator',
          'window'
        ],
        'value': [
          true,
          false,
          undefined
        ]
      },
      'grabbed': {
        'used': true,
        'value': [
          true,
          false,
          undefined
        ]
      },
      'hidden': {
        'used': true,
        'value': [
          true,
          false
        ]
      },
      'invalid': {
        'used': true,
        'value': [
          true,
          false,
          'grammar',
          'spelling'
        ]
      },
      'pressed': {
        'used': ['button'],
        'value': [
          true,
          false,
          'mixed',
          undefined
        ]
      },
      'selected': {
        'used': [
          'gridcell',
          'option',
          'row',
          'tab'
        ],
        'value': [
          true,
          false,
          undefined
        ]
      }
    };

    //////////////////////////////
    // Gets the current state of the ARIA attribute
    //////////////////////////////
    this.get = function (el, attr) {
      return el.getAttribute('aria-' + attr);
    };

    //////////////////////////////
    // Has the current ARIA state
    //////////////////////////////
    this.has = function (el, attr) {
      var state = self.get(el, attr);
      if (state === null) {
      	return false;
      }
      else if (state === false || state === 'false') {
      	return false;
      }
      else {
      	return true;
      }
    };

    //////////////////////////////
    // Sets the given state
    //////////////////////////////
    this.set = function (el, state, val) {

    };
  }


  //////////////////////////////
  // We only ever want one instance of state
  //////////////////////////////
  a11y = a11y || {};
  a11y.state = new A11yState();

  //////////////////////////////
  // All of the various exports!
  //////////////////////////////
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = a11y;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return a11y;
    });
  } else {
    window.a11y = a11y;
  }
})(window.a11y, window.module, window.define);
