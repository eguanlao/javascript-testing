"use strict";

describe("Warm-ups.", function () {

  it("Number's maximum value should be greater than zero.", function () {
    expect(Number.MAX_VALUE > 0).toEqual(true);
  });

  it("Number's minimum value of a number should not be less than zero.", function () {
    expect(Number.MIN_VALUE < 0).toEqual(false);
  });

  it("One should be less than two, which should be less than three.", function () {
    expect(1 < 2 < 3).toEqual(true);
  });

  it("I can't explain this.", function () {
    expect(3 > 2 > 1).toEqual(false);
  });

  it("Decimal value should be the string version with the given number of decimal places.", function () {
    // expect(42.toFixed(2)).toThrow();
    // expect(42. toFixed(2)).toThrow();
    // expect(42 .toFixed(2)).toBe("42.00");
    // expect(42 . toFixed(2)).toBe("42.00");
    expect(42.0.toFixed(2)).toEqual("42.00");
  });

  it("Decimal value without a decimal place should be the string version with the given number of decimal places.", function () {
    expect(42..toFixed(2)).toEqual("42.00");
  });

});
