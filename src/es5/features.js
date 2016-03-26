"use strict";

// Accessors.
var obj = { get foo() { return "abc" } };
console.assert(obj.foo === "abc");

// Reserved words as property keys.
var obj = { new: "abc" };
console.assert(obj.new === "abc");

// Legal trailing commas.
var obj = {
  foo: "bar",
  bar: "baz", // trailing comma
};
var arr = [
  "foo",
  "bar",
];

// Multiline string literals.
var str = "The quick brown fox\
  jumps over\
  the lazy dog";

// Metaprogramming.
// Getting and setting prototypes.
var Person = {
  describe: function() {
    return "Person named " + this.name;
  }
};
var jane = Object.create(Person, {
  name: { value: "Jane", writable: true }
});
console.assert(jane.describe() === "Person named Jane");
