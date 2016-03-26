// Array Matching
{
  var list = [1, 2, 3];
  var [a, , b] = list;
  [b, a] = [a, b];
  assert.equal(a, 3);
  assert.equal(b, 1);
}

// Object Matching, Shorthand Notation
{
  var {op, lhs, rhs} = getASTNode();
  assert.equal(op, "operation");
  assert.equal(lhs, "left");
  assert.equal(rhs, "right");

  function getASTNode() {
    return {op: "operation", lhs: "left", rhs: "right"};
  }
}

// Object Matching, Deep Matching
{
  var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

  assert.equal(a, "operation");
  assert.equal(b, "inside operation");
  assert.equal(c, "right");

  function getASTNode() {
    return {op: "operation", lhs: {"op": "inside operation"}, rhs: "right"};
  }
}

// Parameter Context Matching
{
  function f([name, val]) {
      console.log(name, val);
  }
  function g({name: n, val: v}) {
      console.log(n, v);
  }
  function h({name, val}) {
      console.log(name, val);
  }
  f([ "bar", 42 ]);
  g({ name: "foo", val:  7 });
  h({ name: "bar", val: 42 });
}

// Fail-Soft Destructuring
{
  var list = [7, 42];
  var [a = 1, b = 2, c = 3, d] = list;
  assert(a === 7);
  assert(b === 42);
  assert(c === 3);
  assert(d === undefined);
}
