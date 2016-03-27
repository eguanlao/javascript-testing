// Symbol Type
{
  assert(Symbol("foo") !== Symbol("foo"));
  const foo = Symbol();
  const bar = Symbol();
  assert(typeof foo === "symbol");
  assert(typeof bar === "symbol");

  let obj = {};
  obj[foo] = "foo";
  obj[bar] = "bar";
  assert.equal(JSON.stringify(obj), "{}");
  //assert.equal(Object.keys(obj), []);
  //assert.equal(Object.getOwnPropertyNames(obj), []);
  //assert.equal(Object.getOwnPropertySymbols(obj), [foo, bar]);
}

// Global Symbols
/*{
  assert(Symbol.for("app.foo") === Symbol.for("app.foo"));
  const foo = Symbol.for("app.foo");
  const bar = Symbol.for("app.bar");
  assert(Symbol.keyFor(foo) === "app.foo");
  assert(Symbol.keyFor(bar) === "app.bar");
}*/
