describe('Validate ARIA states', function () {
  var result;

  beforeEach(function () {
    result = null;
  });

  //////////////////////////////
  // States
  //////////////////////////////
  it('`validate.state` should return `false` if a passed state is invalid and throw an error for the user', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = false;
    result = a11y.state.validate.state('foo');

    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith('`foo` is not a valid ARIA state');
  });

  it('`validate.state` should return `false` if a passed state is invalid and not throw an error for the user if warnings are suppressed', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = true;
    result = a11y.state.validate.state('foo');

    expect(result).toBe(false);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('`validate.state` should return `true` if a passed state is valid', function () {
    result = a11y.state.validate.state('busy');

    expect(result).toBe(true);
  });

  //////////////////////////////
  // Values
  //////////////////////////////
  it('`validate.value` should return `false` if a passed and invalid state and throw and error for the user', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = false;
    result = a11y.state.validate.value('foo');

    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith('`foo` is not a valid ARIA state');
  });

  it('`validate.value` should return `false` if a passed an invalid value for the given state and throw and error for the user', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = false;
    result = a11y.state.validate.value('busy', 'foo');

    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith('`foo` is not a valid value for `aria-busy`');
  });

  it('`validate.value` should return `false` if a passed and invalid state and not throw and error for the user if warnings are suppressed', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = true;
    result = a11y.state.validate.value('foo');

    expect(result).toBe(false);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('`validate.value` should return `false` if a passed an invalid value for the given state and not throw and error for the user if warnings are suppressed', function () {
    spyOn(console, 'error');
    a11y.state.suppressWarnings = true;
    result = a11y.state.validate.value('busy', 'foo');

    expect(result).toBe(false);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('`validate.value` should return `true` if a passed a valid value for the given state', function () {
    result = a11y.state.validate.value('busy', true);

    expect(result).toBe(true);
  });


});
