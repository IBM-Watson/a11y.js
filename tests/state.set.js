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

  it('should not allow a non-valid value to be set', function () {
    spyOn(console, 'log');
    a11y.state.set(elem, 'pressed', 'foo');
    result = elem.getAttribute('aria-pressed');

    expect(result).toBe(null);
    expect(console.log).toHaveBeenCalledWith('`foo` is not a valid value for `aria-pressed`');
  });

  it('should not change a state\'s value if a non-valid value is used', function () {
    spyOn(console, 'log');
    elem.setAttribute('aria-invalid', 'grammar');
    a11y.state.set(elem, 'invalid', 'float');
    result = elem.getAttribute('aria-invalid');

    expect(result).toBe('grammar');
    expect(console.log).toHaveBeenCalledWith('`float` is not a valid value for `aria-invalid`');
  });

  it('should not change a state\'s value if a non-valid state is used', function () {
    spyOn(console, 'log');
    a11y.state.set(elem, 'foo', 'bar');
    result = elem.getAttribute('aria-foo');

    expect(result).toBe(null);
    expect(console.log).toHaveBeenCalledWith('`foo` is not a valid ARIA state');
  });
});
