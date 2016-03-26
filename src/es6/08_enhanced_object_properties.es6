// Property Shorthand
{
  let x = 1;
  let y = 2;
  let obj = {x, y};
  assert.equal(obj.x, 1);
  assert.equal(obj.y, 2);
}

// Computed Property Names
{
  let obj = {
      foo: "bar",
      ["baz" + quux()]: 42
  };
  assert.equal(obj.foo, "bar");
  assert.equal(obj.bazqwerty, 42);

  function quux() {
    return "qwerty";
  }
}

// Method Properties
{
  let obj = {
    foo(a, b) {
        return a + b;
    },
    bar(x, y) {
      return x * y;
    },
    // *quux(x, y) {
    //   console.log(`x = ${x}, y = ${y}`)
    // }
  };
  assert.equal(obj.foo(1, 2), 3);
  assert.equal(obj.bar(3, 4), 12);
}
