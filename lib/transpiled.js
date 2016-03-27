"use strict";

var assert = require("assert");

var PI = 3.141593;
assert(PI > 3.0);
"use strict";

// Block-Scoped Variables
var a = ["alpha", "bravo", "charlie"];
var b = ["beta", "gamma", "delta"];

for (var i = 0; i < a.length; i++) {
    var x = a[i];
}
for (var _i = 0; _i < b.length; _i++) {
    var y = b[_i];
}

var callbacks = [];

var _loop = function _loop(_i2) {
    callbacks[_i2] = function () {
        return _i2 * 2;
    };
};

for (var _i2 = 0; _i2 <= 2; _i2++) {
    _loop(_i2);
}
assert(callbacks[0]() === 0);
assert(callbacks[1]() === 2);
assert(callbacks[2]() === 4);

// Block-Scoped Functions
{
    var foo = function foo() {
        return 1;
    };

    assert(foo() === 1);
    {
        var _foo = function _foo() {
            return 2;
        };

        assert(_foo() === 2);
    }
    assert(foo() === 1);
}
"use strict";

{
  (function () {
    // Expression Bodies
    var evens = [2, 4, 6, 8, 10];
    var odds = evens.map(function (v) {
      return v + 1;
    });
    var pairs = evens.map(function (v) {
      return { even: v, odd: v + 1 };
    });
    var nums = evens.map(function (v, i) {
      return v + i;
    });

    // Statement Bodies
    var fives = [];
    nums.forEach(function (v) {
      if (v % 5 === 0) fives.push(v);
    });
    assert.equal(fives.length, 1);
  })();
}
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Default Parameter Values
{
  var f = function f(x) {
    var y = arguments.length <= 1 || arguments[1] === undefined ? 7 : arguments[1];
    var z = arguments.length <= 2 || arguments[2] === undefined ? 42 : arguments[2];

    return x + y + z;
  };

  assert.equal(f(1), 50);
}

{
  // Rest Parameter

  var _f = function _f(x, y) {
    return (x + y) * (arguments.length - 2);
  };

  assert.equal(_f(1, 2, "hello", true, 7), 9);

  // Spread Operator
  var params = ["hello", true, 7];
  var other = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]
  assert.equal(_f.apply(undefined, [1, 2].concat(params)), 9);

  var str = "foo";
  var chars = [].concat(_toConsumableArray(str)); // [ "f", "o", "o" ]
  assert.equal(chars.length, 3);
}
"use strict";

var _templateObject = _taggedTemplateLiteral(["http://example.com/foo?bar=", "&quux=", ""], ["http://example.com/foo?bar=", "&quux=", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// String Interpolation
{
  var customer = { name: "Foo" };
  var card = { amount: 7, product: "Bar", unitprice: 42 };
  var message = "Hello " + customer.name + ",\n  want to buy " + card.amount + " " + card.product + " for\n  a total of " + card.amount * card.unitprice + " bucks?";
}

// Custom Interpolation
{
  var get = function get() {
    for (var _len = arguments.length, url = Array(_len), _key = 0; _key < _len; _key++) {
      url[_key] = arguments[_key];
    }

    return url;
  };

  var bar = 1;
  var baz = 2;
  var foo = 3;

  var asdf = get(_templateObject, bar + baz, foo);
  console.log(asdf);
}

// Raw String Access
// function quux(strings, ...values) {
//     strings[0] === "foo\n";
//     strings[1] === "bar";
//     strings.raw[0] === "foo\\n";
//     strings.raw[1] === "bar";
//     values[0] === 42;
// }
// quux`foo\n${ 42 }bar`;
//
// String.raw `foo\n${ 42 }bar` === "foo\\n42bar";
"use strict";

{
  // Binary & Octal Literal
  503 === 503;
  503 === 503;

  // Unicode String & RegExp Literal
  "𠮷".length === 2;
  "𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length === 2;
  5 | "𠮷" === "𠮷";
  "𠮷" === "𠮷";
  "𠮷".codePointAt(0) == 0x20BB7;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = "𠮷"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var codepoint = _step.value;
      console.log(codepoint);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
"use strict";

{
    var parser = function parser(input, match) {
        for (var pos = 0, lastPos = input.length; pos < lastPos;) {
            for (var i = 0; i < match.length; i++) {
                match[i].pattern.lastIndex = pos;
                var found = void 0;
                if ((found = match[i].pattern.exec(input)) !== null) {
                    match[i].action(found);
                    pos = match[i].pattern.lastIndex;
                    break;
                }
            }
        }
    };

    var report = function report(match) {
        console.log(JSON.stringify(match));
    };
    // parser("Foo 1 Bar 7 Baz 42", [
    //     { pattern: /^Foo\s+(\d+)/y, action: (match) => report(match) },
    //     { pattern: /^Bar\s+(\d+)/y, action: (match) => report(match) },
    //     { pattern: /^Baz\s+(\d+)/y, action: (match) => report(match) },
    //     { pattern: /^\s*/y,         action: (match) => {}            }
    // ]);
}
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Property Shorthand
{
  var x = 1;
  var y = 2;
  var obj = { x: x, y: y };
  assert.equal(obj.x, 1);
  assert.equal(obj.y, 2);
}

// Computed Property Names
{
  var quux = function quux() {
    return "qwerty";
  };

  var _obj = _defineProperty({
    foo: "bar"
  }, "baz" + quux(), 42);
  assert.equal(_obj.foo, "bar");
  assert.equal(_obj.bazqwerty, 42);
}

// Method Properties
{
  var _obj3 = {
    foo: function foo(a, b) {
      return a + b;
    },
    bar: function bar(x, y) {
      return x * y;
    }
  };

  // *quux(x, y) {
  //   console.log(`x = ${x}, y = ${y}`)
  // }
  assert.equal(_obj3.foo(1, 2), 3);
  assert.equal(_obj3.bar(3, 4), 12);
}
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Array Matching
{
  var list = [1, 2, 3];
  var a = list[0];
  var b = list[2];
  var _ref = [a, b];
  b = _ref[0];
  a = _ref[1];

  assert.equal(a, 3);
  assert.equal(b, 1);
}

// Object Matching, Shorthand Notation
{
  var getASTNode = function getASTNode() {
    return { op: "operation", lhs: "left", rhs: "right" };
  };

  var _getASTNode = getASTNode();

  var op = _getASTNode.op;
  var lhs = _getASTNode.lhs;
  var rhs = _getASTNode.rhs;

  assert.equal(op, "operation");
  assert.equal(lhs, "left");
  assert.equal(rhs, "right");
}

// Object Matching, Deep Matching
{
  var _getASTNode2 = function _getASTNode2() {
    return { op: "operation", lhs: { "op": "inside operation" }, rhs: "right" };
  };

  var _getASTNode3 = _getASTNode2();

  var a = _getASTNode3.op;
  var b = _getASTNode3.lhs.op;
  var c = _getASTNode3.rhs;


  assert.equal(a, "operation");
  assert.equal(b, "inside operation");
  assert.equal(c, "right");
}

// Parameter Context Matching
{
  var f = function f(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2);

    var name = _ref3[0];
    var val = _ref3[1];

    console.log(name, val);
  };

  var g = function g(_ref4) {
    var n = _ref4.name;
    var v = _ref4.val;

    console.log(n, v);
  };

  var h = function h(_ref5) {
    var name = _ref5.name;
    var val = _ref5.val;

    console.log(name, val);
  };

  f(["bar", 42]);
  g({ name: "foo", val: 7 });
  h({ name: "bar", val: 42 });
}

// Fail-Soft Destructuring
{
  var list = [7, 42];
  var _list$ = list[0];
  var a = _list$ === undefined ? 1 : _list$;
  var _list$2 = list[1];
  var b = _list$2 === undefined ? 2 : _list$2;
  var _list$3 = list[2];
  var c = _list$3 === undefined ? 3 : _list$3;
  var d = list[3];

  assert(a === 7);
  assert(b === 42);
  assert(c === 3);
  assert(d === undefined);
}
"use strict";
"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class Definition

var Shape = function () {
  function Shape(id, x, y) {
    _classCallCheck(this, Shape);

    this.id = id;
    this.move(x, y);
  }

  _createClass(Shape, [{
    key: "move",
    value: function move(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Shape(" + this.id + ")";
    }
  }]);

  return Shape;
}();

var s = new Shape(1, 2, 3);
assert.equal(s.id, 1);
assert.equal(s.x, 2);
assert.equal(s.y, 3);
assert.equal(s.toString(), "Shape(1)");

// Class Inheritance

var Rectangle = function (_Shape) {
  _inherits(Rectangle, _Shape);

  function Rectangle(id, x, y, width, height) {
    _classCallCheck(this, Rectangle);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).call(this, id, x, y));

    _this.width = width;
    _this.height = height;
    return _this;
  }
  // Static Member


  _createClass(Rectangle, [{
    key: "toString",
    value: function toString() {
      // Base Class Access
      return "Rectangle > " + _get(Object.getPrototypeOf(Rectangle.prototype), "toString", this).call(this);
    }
  }], [{
    key: "defaultRectangle",
    value: function defaultRectangle() {
      return new Rectangle("default", 0, 0, 100, 100);
    }
  }]);

  return Rectangle;
}(Shape);

var Circle = function (_Shape2) {
  _inherits(Circle, _Shape2);

  function Circle(id, x, y, radius) {
    _classCallCheck(this, Circle);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).call(this, id, x, y));

    _this2.radius = radius;
    return _this2;
  }
  // Static Member


  _createClass(Circle, [{
    key: "toString",
    value: function toString() {
      // Base Class Access
      return "Circle > " + _get(Object.getPrototypeOf(Circle.prototype), "toString", this).call(this);
    }
  }], [{
    key: "defaultCircle",
    value: function defaultCircle() {
      return new Circle("default", 0, 0, 100);
    }
  }]);

  return Circle;
}(Shape);

var r = new Rectangle(2, 3, 4, 5, 6);
assert.equal(r.id, 2);
assert.equal(r.x, 3);
assert.equal(r.y, 4);
assert.equal(r.width, 5);
assert.equal(r.height, 6);
assert.equal(r.toString(), "Rectangle > Shape(2)");

var c = new Circle(3, 4, 5, 6);
assert.equal(c.id, 3);
assert.equal(c.x, 4);
assert.equal(c.y, 5);
assert.equal(c.radius, 6);
assert.equal(c.toString(), "Circle > Shape(3)");

// Static Members
var defRectangle = Rectangle.defaultRectangle();
var defCircle = Circle.defaultCircle();

assert.equal(defRectangle.id, "default");
assert.equal(defRectangle.x, 0);
assert.equal(defRectangle.y, 0);
assert.equal(defRectangle.width, 100);
assert.equal(defRectangle.height, 100);

assert.equal(defCircle.id, "default");
assert.equal(defCircle.x, 0);
assert.equal(defCircle.y, 0);
assert.equal(defCircle.radius, 100);

// Getter/Setter
{
  var _Rectangle = function () {
    function _Rectangle(width, height) {
      _classCallCheck(this, _Rectangle);

      this.width = width;
      this.height = height;
    }

    _createClass(_Rectangle, [{
      key: "getVolume",
      value: function getVolume(depth) {
        return this.area * depth;
      }
    }, {
      key: "area",
      get: function get() {
        return this.width * this.height;
      }
    }]);

    return _Rectangle;
  }();

  ;
  var rect = new _Rectangle(50, 20);
  assert(rect.area === 1000);
  assert(rect.getVolume(2) === 2000);
  assert(rect.width === 50);
  assert(rect.height === 20);
}
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// Symbol Type
{
  assert(Symbol("foo") !== Symbol("foo"));
  var foo = Symbol();
  var bar = Symbol();
  assert((typeof foo === "undefined" ? "undefined" : _typeof(foo)) === "symbol");
  assert((typeof bar === "undefined" ? "undefined" : _typeof(bar)) === "symbol");

  var obj = {};
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
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fibonacci = _defineProperty({}, Symbol.iterator, function () {
  var pre = 0,
      cur = 1;
  return {
    next: function next() {
      var _ref = [cur, pre + cur];
      pre = _ref[0];
      cur = _ref[1];

      return { done: false, value: cur };
    }
  };
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var n = _step.value;

    if (n > 1000) break;
    console.log(n);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
// Generator Function, Iterator Protocol
/*{
  let fibonacci = {
    *[Symbol.iterator]() {
      let pre = 0, cur = 1;
      for (;;) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
      }
    }
  }

  for (let n of fibonacci) {
    if (n > 1000)
      break;
    console.log(n);
  }
}*/

// Generator Function, Direct Use
/*{
  function* range (start, end, step) {
    while (start < end) {
      yield start;
      start += step;
    }
  }

  for (let i of range(0, 10, 2)) {
    console.log(i); // 0, 2, 4, 6, 8
  }
}*/
"use strict";
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Set Data Structure
{
  var _s = new Set();
  _s.add("hello").add("goodbye").add("hello");
  assert(_s.size === 2);
  assert(_s.has("hello") === true);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _s.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      // insertion order
      console.log(key);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

// Map Data Structure
{
  var m = new Map();
  m.set("hello", 42);
  m.set(s, 34);
  assert(m.get(s) === 34);
  assert(m.size === 2);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = m.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2);

      var _key = _step2$value[0];
      var val = _step2$value[1];

      console.log(_key + " = " + val);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
//  ES6 class equivalent to the following C structure:
//  struct Example { unsigned long id; char username[16]; float amountDue; };
/*class Example {
    constructor (buffer = new ArrayBuffer(24)) {
        this.buffer = buffer;
    }
    set buffer (buffer) {
        this._buffer    = buffer;
        this._id        = new Uint32Array (this._buffer,  0,  1);
        this._username  = new Uint8Array  (this._buffer,  4, 16);
        this._amountDue = new Float32Array(this._buffer, 20,  1);
    }
    get buffer ()     { return this._buffer;       }
    set id (v)        { this._id[0] = v;           }
    get id ()         { return this._id[0];        }
    set username (v)  { this._username[0] = v;     }
    get username ()   { return this._username[0];  }
    set amountDue (v) { this._amountDue[0] = v;    }
    get amountDue ()  { return this._amountDue[0]; }
}

let example = new Example();
example.id = 7;
example.username = "John Doe";
example.amountDue = 42.0;*/
"use strict";
"use strict";

// Object Property Assignment
{
  var dst = { quux: 0 };
  var src1 = { foo: 1, bar: 2 };
  var src2 = { foo: 3, baz: 4 };
  Object.assign(dst, src1, src2);
  assert(dst.quux === 0);
  assert(dst.foo === 3);
  assert(dst.bar === 2);
  assert(dst.baz === 4);
}

// Array Element Finding
{
  assert.equal([1, 3, 4, 2].find(function (x) {
    return x > 3;
  }), 4);
}

// String Repeating
{
  var depth = 1;
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
  assert.equal(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON, true);
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
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Promise Usage
{
  (function () {
    var msgAfterTimeout = function msgAfterTimeout(msg, who, timeout) {
      console.log(msg + ", " + who + ", " + timeout);
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return resolve(msg + " Hello " + who + "!");
        }, timeout);
      });
    };

    msgAfterTimeout("", "Foo", 100).then(function (msg) {
      return msgAfterTimeout(msg, "Bar", 200);
    }).then(function (msg) {
      return msgAfterTimeout(msg, "Baz", 300);
    }).then(function (msg) {
      return msgAfterTimeout(msg, "Quux", 400);
    }).then(function (msg) {
      console.log("Done: " + msg);
    });
  })();
}

// Promise Combination
{
  (function () {
    var fetchAsync = function fetchAsync(url, timeout, onData, onError) {
      console.log(url + ", " + timeout + ", " + onData + ", " + onError);
    };

    var fetchPromised = function fetchPromised(url, timeout) {
      return new Promise(function (resolve, reject) {
        fetchAsync(url, timeout, resolve, reject);
      });
    };
    Promise.all([fetchPromised("http://backend/foo.txt", 500), fetchPromised("http://backend/bar.txt", 500), fetchPromised("http://backend/baz.txt", 500)]).then(function (data) {
      var _data = _slicedToArray(data, 3);

      var foo = _data[0];
      var bar = _data[1];
      var baz = _data[2];

      console.log("success: foo=" + foo + " bar=" + bar + " baz=" + baz);
    }, function (err) {
      console.log("error: " + err);
    });
  })();
}
"use strict";

// Proxying
/*{
  let target = {
    foo: "Welcome, foo"
  };
  let proxy = new Proxy(target, {
    get(receiver, name) {
      return name in receiver ? receiver[name] : `Hello, ${name}`;
    }
  });
  proxy.foo === "Welcome, foo";
  proxy.world === "Hello, world";
}*/

// Reflection
{
  var obj = { a: 1 };
  Object.defineProperty(obj, "b", { value: 2 });
  obj[Symbol("c")] = 3;
  // Reflect.ownKeys(obj); // [ "a", "b", Symbol(c) ]
}
// Collation
/*{
  // in German,  "ä" sorts with "a"
  // in Swedish, "ä" sorts after "z"
  var list = [ "ä", "a", "z" ];
  var i10nDE = new Intl.Collator("de");
  var i10nSV = new Intl.Collator("sv");
  assert(i10nDE.compare("ä", "z") === -1);
  assert(i10nSV.compare("ä", "z") === +1);
  assert.deepEqual(list.sort(i10nDE.compare), ["a", "ä", "z"]);
  assert.deepEqual(list.sort(i10nSV.compare), ["a", "z", "ä"]);
}*/
"use strict";
