describe('Element has the current ARIA state', function () {
  var elem = document.createElement('div'),
      result;

  beforeEach(function () {
    elem.removeAttribute('aria-busy');
    result = null;
  });

  it('should return `false` if the state is not present', function () {
    result = a11y.state.has(elem, 'busy');

    expect(result).toBe(false);
  });

  it('should return `false` if the state is present but set to `false`', function () {

    elem.setAttribute('aria-busy', 'false');
    result = a11y.state.has(elem, 'busy');

    expect(result).toBe(false);
  });

  it('should return `true` if the state is present and not set to `false`', function () {

    elem.setAttribute('aria-busy', 'true');
    result = a11y.state.has(elem, 'busy');

    expect(result).toBe(true);

  });
});
