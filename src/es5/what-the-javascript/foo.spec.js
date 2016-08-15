"use strict";

var foo = require("./foo.js");

describe("A suite to test 'foo'.", function () {

  it("should return 'foo'", function () {
    expect(foo.foo()).toEqual("foo");
  });

});
