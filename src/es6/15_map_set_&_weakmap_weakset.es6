// Set Data Structure
{
  let s = new Set();
  s.add("hello").add("goodbye").add("hello");
  assert(s.size === 2);
  assert(s.has("hello") === true);
  for (let key of s.values()) { // insertion order
    console.log(key);
  }
}

// Map Data Structure
{
  let m = new Map();
  m.set("hello", 42);
  m.set(s, 34);
  assert(m.get(s) === 34);
  assert(m.size === 2);
  for (let [key, val] of m.entries()) {
    console.log(key + " = " + val);
  }
}
