"use strict";

describe("Coercion.", function () {

  it("Empty array should equal a negated empty array.", function () {
    expect([] == ![]).toEqual(true);
  });

  it("Empty array plus an empty object should equal a stringified object.", function () {
    expect([] + {}).toEqual("[object Object]");
  });

  it("Empty object plus an empty array should equal a stringified object.", function () {
    expect({} + []).toEqual("[object Object]");
  });

  it("Number constructor given an empty-string argument should equal zero.", function () {
    expect(new Number("")).toEqual(0);
  });

  it("Number constructor given a space argument should equal zero.", function () {
    expect(new Number(" ")).toEqual(0);
  });

  it("Number constructor given a whitespace argument should equal zero.", function () {
    expect(new Number("\r\n\t")).toEqual(0);
  });

  it("Number constructor given a '0' argument should equal zero.", function () {
    expect(new Number("0")).toEqual(0);
  });

  it("Number constructor given a negative zero string argument should equal negative zero.", function () {
    expect(new Number("-0")).toEqual(-0);
  });

  it("Negative zero string parsed as JSON should equal negative zero.", function () {
    expect(JSON.parse("-0")).toEqual(-0);
  });

  it("Negative zero should equal negative zero.", function () {
    expect(-0).toEqual(-0);
  });

  it("Negative zero converted to a JSON string should equal a stringified zero.", function () {
    expect(JSON.stringify(-0)).toEqual("0");
  });

  it("String constructor invoked with a negative zero argument should equal string-version zero.", function () {
    expect(new String(-0)).toEqual("0");
  });

  it("Negative zero plus an empty string should equal zero as a string.", function () {
    expect(-0 + "").toEqual("0");
  });

});
