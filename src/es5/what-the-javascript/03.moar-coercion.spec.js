"use strict";

describe("Moar Coercion.", function () {

  it("Number constructor given a '0.' argument should equal zero.", function () {
    expect(new Number("0.")).toEqual(0);
  });

  it("Number constructor given a '.0' argument should equal zero.", function () {
    expect(new Number(".0")).toEqual(0);
  });

  it("Number constructor given a '.' argument should equal 'NaN'.", function () {
    expect(new Number(".")).toEqual(NaN);
  });

  it("Number constructor given an 'undefined' argument should equal 'NaN'.", function () {
    expect(new Number(undefined)).toEqual(NaN);
  });

  it("Number constructor given a 'null' argument should equal zero.", function () {
    expect(new Number(null)).toEqual(0);
  });

  it("Number constructor give a '0O0' argument should equal zero.", function () {
    expect(new Number("0O0")).toEqual(0);
  });

  it("Number constructor given a '0X0' argument should equal zero.", function () {
    expect(new Number("0X0")).toEqual(0);
  });

  it(function () {
    expect({}).toEqual(NaN);
  });

  it(function () {
    expect([]).toBe(0);
  });

  it(function () {
    expect(new String({})).toBe("[object Object]");
  });

  it(function () {
    expect(new String([])).toBe("");
  });

  it(function () {
    expect(new String(null)).toBe("null");
  });

  it(function () {
    expect(new String([null])).toBe("");
  });

  it(function () {
    expect(new String(undefined)).toBe("undefined");
  });

  it(function () {
    expect(new String([undefined])).toBe("");
  });

  it(function () {
    expect(new String([null, null, ])).toBe(",");
  });

  it(function () {
    expect(new String([undefined, undefined, ])).toBe(",");
  });

  it(function () {
    expect(new String([, , ])).toBe(",");
  });

  it(function () {
    var o1 = { hello: "world" };

    var o2 = Object.create(null);
    o2.hello = "world";

    expect(o1 + "").toBe("[object3 Object]");
    expect(o2 + "").toThrowError("TypeError!");
  });

});
