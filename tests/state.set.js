describe('Sets the value of an ARIA state', function () {
  var elem = document.createElement('div'),
      result;

  beforeEach(function () {
    elem.removeAttribute('aria-busy');
    elem.removeAttribute('aria-pressed');
    elem.removeAttribute('aria-invalid');
    result = null;
  });

  it('should set the state to `true` if state is not present', function () {
    a11y.state.set(elem, 'busy');
    result = elem.getAttribute('aria-busy');

    expect(result).toBe('true');
  });

  it('should set the state as a string if it is given as a boolean', function () {
    elem.setAttribute('aria-busy', false);
    a11y.state.set(elem, 'busy', true);
    result = elem.getAttribute('aria-busy');

    expect(result).toBe('true');
  });

  it('should set the state to a given string', function () {
    a11y.state.set(elem, 'pressed', 'mixed');
    result = elem.getAttribute('aria-pressed');

    expect(result).toBe('mixed');
  });

  it('should not allow a non-valid value to be set and throw an error for the user', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = false;
    a11y.state.set(elem, 'pressed', 'foo');
    result = elem.getAttribute('aria-pressed');

    expect(result).toBe(null);
    expect(console.error).toHaveBeenCalledWith('`foo` is not a valid value for `aria-pressed`');
  });

  it('should not change a state\'s value if a non-valid value is used and throw an error for the user', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = false;
    elem.setAttribute('aria-invalid', 'grammar');
    a11y.state.set(elem, 'invalid', 'float');
    result = elem.getAttribute('aria-invalid');

    expect(result).toBe('grammar');
    expect(console.error).toHaveBeenCalledWith('`float` is not a valid value for `aria-invalid`');
  });

  it('should not change a state\'s value if a non-valid state is used and throw an error for the user', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = false;
    a11y.state.set(elem, 'foo', 'bar');
    result = elem.getAttribute('aria-foo');

    expect(result).toBe(null);
    expect(console.error).toHaveBeenCalledWith('`foo` is not a valid ARIA state');
  });

  it('should not allow a non-valid value to be set and not throw an error for the user if warnings are suppressed', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = true;
    a11y.state.set(elem, 'pressed', 'foo');
    result = elem.getAttribute('aria-pressed');

    expect(result).toBe(null);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('should not change a state\'s value if a non-valid value is used and not throw an error for the user if warnings are suppressed', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = true;
    elem.setAttribute('aria-invalid', 'grammar');
    a11y.state.set(elem, 'invalid', 'float');
    result = elem.getAttribute('aria-invalid');

    expect(result).toBe('grammar');
    expect(console.error).not.toHaveBeenCalled();
  });

  it('should not change a state\'s value if a non-valid state is used and not throw an error for the user if warnings are suppressed', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = true;
    a11y.state.set(elem, 'foo', 'bar');
    result = elem.getAttribute('aria-foo');

    expect(result).toBe(null);
    expect(console.error).not.toHaveBeenCalled();
  });
});
