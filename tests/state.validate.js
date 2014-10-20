describe('Validate ARIA states', function () {
  var result;

  beforeEach(function () {
    result = null;
  });

  //////////////////////////////
  // States
  //////////////////////////////
  it('`validate.state` should return `false` if a passed state is invalid', function () {
    spyOn(console, 'log');
    result = a11y.state.validate.state('foo');

    expect(result).toBe(false);
    expect(console.log).toHaveBeenCalledWith('`foo` is not a valid ARIA state');
  });

  it('`validate.state` should return `true` if a passed state is valid', function () {
    result = a11y.state.validate.state('busy');

    expect(result).toBe(true);
  });

  //////////////////////////////
  // Values
  //////////////////////////////
  it('`validate.value` should return `false` if a passed and invalid state', function () {
    spyOn(console, 'log');
    result = a11y.state.validate.value('foo');

    expect(result).toBe(false);
    expect(console.log).toHaveBeenCalledWith('`foo` is not a valid ARIA state');
  });

  it('`validate.value` should return `false` if a passed an invalid value for the given state', function () {
    spyOn(console, 'log');
    result = a11y.state.validate.value('busy', 'foo');

    expect(result).toBe(false);
    expect(console.log).toHaveBeenCalledWith('`foo` is not a valid value for `aria-busy`');
  });

  it('`validate.value` should return `true` if a passed a valid value for the given state', function () {
    result = a11y.state.validate.value('busy', true);

    expect(result).toBe(true);
  });


});
