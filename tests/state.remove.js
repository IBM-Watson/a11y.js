describe('Removes the value of an ARIA state', function () {
  var elem = document.createElement('div'),
      result;

  beforeEach(function () {
    elem.removeAttribute('aria-busy');
    result = null;
  });

  it('should remove the state attribute if it can be removed', function () {
    elem.setAttribute('aria-expanded', true);
    a11y.state.remove(elem, 'expanded');
    result = elem.getAttribute('aria-expanded');

    expect(result).toBe(null);
  });

  it('should set the state to `false` if it cannot be removed', function () {
    elem.setAttribute('aria-busy', true);
    a11y.state.remove(elem, 'busy');
    result = elem.getAttribute('aria-busy');

    expect(result).toBe('false');
  });

});
