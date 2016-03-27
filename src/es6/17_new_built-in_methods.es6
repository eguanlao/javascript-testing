// Object Property Assignment
{
  var dst  = {quux: 0};
  var src1 = {foo: 1, bar: 2};
  var src2 = {foo: 3, baz: 4};
  Object.assign(dst, src1, src2);
  assert(dst.quux === 0);
  assert(dst.foo  === 3);
  assert(dst.bar  === 2);
  assert(dst.baz  === 4);
}

// Array Element Finding
{
  assert.equal([1, 3, 4, 2].find(x => x > 3), 4);
}

// String Repeating
{
  let depth = 1;
  assert.equal(" ".repeat(4 * depth), "    ");
  assert.equal("foo".repeat(3), "foofoofoo");
}

// String Searching
{
  assert("hello".startsWith("ello", 1) === true);
  assert("hello".endsWith("hell", 4) === true);
  assert("hello".includes("ell") === true);
  assert("hello".includes("ell", 1) === true);
  assert("hello".includes("ell", 2) === false);
}

// Number Type Checking
{
  assert(Number.isNaN(42) === false);
  assert(Number.isNaN(NaN) === true);

  assert(Number.isFinite(Infinity) === false);
  assert(Number.isFinite(-Infinity) === false);
  assert(Number.isFinite(NaN) === false);
  assert(Number.isFinite(123) === true);
}

// Number Safety Checking
{
  assert(Number.isSafeInteger(42) === true);
  assert(Number.isSafeInteger(9007199254740992) === false);
}

// Number Comparison
{
  assert.equal(0.1 + 0.2 === 0.3, false);
  assert.equal(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON, true);
}

// Number Truncation
{
  assert(Math.trunc(42.7) === 42);
  assert(Math.trunc(0.1) === 0);
  assert(Math.trunc(-0.1) === -0);
}

// Number Sign Determination
{
  assert(Math.sign(7) === 1);
  assert(Math.sign(0) === 0);
  assert(Math.sign(-0) === -0);
  assert(Math.sign(-7) === -1);
  console.log(Math.sign(NaN)); // NaN
}
