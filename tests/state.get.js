describe('Get the value of the given ARIA state', function () {
  var elem = document.createElement('div'),
      result;

  beforeEach(function () {
    elem.removeAttribute('aria-busy');
    result = null;
  });

  it('should return `null` if the state is not present', function () {
    result = a11y.state.get(elem, 'busy');

    expect(result).toBe(null);
  });

  it('should return `null` if the full attribute name is passed (instead of the state fragment)', function () {
    result = a11y.state.get(elem, 'aria-busy');

    expect(result).toBe(null);
  });

  it('should return the attribute value as a string if it is a boolean and a present', function () {
    elem.setAttribute('aria-busy', true);
    result = a11y.state.get(elem, 'busy');

    expect(result).toBe('true');
  });

  it('should return the attribute value as a string if it is present', function () {
    elem.setAttribute('aria-checked', 'mixed');
    result = a11y.state.get(elem, 'checked');

    expect(result).toBe('mixed');
  });


});
