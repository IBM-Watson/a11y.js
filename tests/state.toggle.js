describe('Toggles the value of an ARIA state', function () {
  var elem = document.createElement('div'),
      result;

  beforeEach(function () {
    elem.removeAttribute('aria-busy');
    result = null;
  });

  it('should set the state to `true` if state is not present', function () {
    a11y.state.toggle(elem, 'busy');
    result = elem.getAttribute('aria-busy');

    expect(result).toBe('true');
  });

  it('should set the state to the string `true` if state is currently `false`', function () {
    elem.setAttribute('aria-busy', false);
    a11y.state.toggle(elem, 'busy');
    result = elem.getAttribute('aria-busy');

    expect(result).toBe('true');
  });

  it('should set the state to the string `false` if state is currently `true`', function () {
    elem.setAttribute('aria-busy', true);
    a11y.state.toggle(elem, 'busy');
    result = elem.getAttribute('aria-busy');

    expect(result).toBe('false');
  });

  it('should not change a state\'s value if the original value is not boolean', function () {
    spyOn(console, 'log');
    elem.setAttribute('aria-checked', 'mixed');
    a11y.state.toggle(elem, 'checked');
    result = elem.getAttribute('aria-checked');

    expect(result).toBe('mixed');
    expect(console.log).toHaveBeenCalledWith('Cannot toggle `aria-checked` as it\'s starting value is not a boolean (it\'s `mixed`)');
  });
});
