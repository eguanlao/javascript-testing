// Default Parameter Values
{
  function f(x, y = 7, z = 42) {
      return x + y + z;
  }
  assert.equal(f(1), 50);
}

{
  // Rest Parameter
  function f(x, y, ...a) {
      return (x + y) * a.length;
  }
  assert.equal(f(1, 2, "hello", true, 7), 9);

  // Spread Operator
  let params = ["hello", true, 7];
  let other = [1, 2, ...params]; // [ 1, 2, "hello", true, 7 ]
  assert.equal(f(1, 2, ...params), 9);

  let str = "foo";
  let chars = [ ...str ]; // [ "f", "o", "o" ]
  assert.equal(chars.length, 3);
}
