/*
 * The global a11y-state object that contains all functionality.
 *
 */
(function () {
  if (window.a11y === null) {
    window.a11y = {};
  }
})();


(function (a11y, module, define) {
  'use strict';

  function A11yState() {
    var self = this;

    //////////////////////////////
    // Toggle for suppressing output
    //////////////////////////////
    this.suppressWarnings = false;

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
    // State Validation
    //////////////////////////////
    this.validate = {
      state: function (state, suppress) {
        if (Object.keys(self.states).indexOf(state) === -1) {
	  if (suppress !== true && !self.suppressWarnings) {
	    console.error('`' + state + '` is not a valid ARIA state');
          }

          return false;
        }
        else {
          return true;
        }
      },
      value: function (state, value, suppress) {
        var val;
        if (self.validate.state(state)) {
          val = self.states[state].value;

          if (val.indexOf(value) === -1) {
	    if (suppress !== true && !self.suppressWarnings) {
	      console.error('`' + value + '` is not a valid value for `aria-' + state + '`');
            }

            return false;
          }
          else {
            return true;
          }
        }
        else {
          return false;
        }
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
      if (val === undefined) {
        val = true;
      }
      else {
        if (!self.validate.value(state, val)) {
          val = null;
        }
      }

      if (val !== null) {
        el.setAttribute('aria-' + state, val);
      }
    };

    //////////////////////////////
    // Toggles a given state
    //////////////////////////////
    this.toggle = function (el, state) {
      var current = self.get(el, state);
      if (current === null || current === 'false') {
        self.set(el, state, true);
      }
      else if (current === 'true') {
        self.set(el, state, false);
      }
      else {
	if (!self.suppressWarnings) {
	  console.info('Cannot toggle `aria-' + state + '` as it\'s starting value is not a boolean (it\'s `' + current + '`)');
	}
      }
    };

    //////////////////////////////
    // Removes a given state
    //////////////////////////////
    this.remove = function (el, state) {
      if (self.validate.value(state, undefined, true)) {
        el.removeAttribute('aria-' + state);
      }
      else {
        el.setAttribute('aria-' + state, false);
      }
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
