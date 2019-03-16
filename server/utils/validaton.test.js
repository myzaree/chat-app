var {isRealString} = require('./validaton');
var expect = require('expect');

describe('validation isRealString', () => {
  it('should reject non string value', () => {
    var login = 123;
    var result = isRealString(login);
    expect(result).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var login = "      ";
    var result = isRealString(login);
    expect(result).toBe(false);
  });

  it('should accept string with non-space characters', () => {
    var login = "Bobby";
    var result = isRealString(login);
    expect(result).toBe(true);
  });
});
