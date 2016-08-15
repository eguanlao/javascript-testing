"use strict";

describe("Empty Slots", function() {

  it(function() {
    expect(new Array(3)).toEqual(4);
    expect([,,,] + "").toEqual("[ undefined x 3 ]");
  });

});
