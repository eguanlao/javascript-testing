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

      this.w = width;
      this.h = height;
    }

    _createClass(_Rectangle, [{
      key: "width",
      get: function get() {
        return this.w;
      },
      set: function set(width) {
        this.w = width;
      }
    }, {
      key: "height",
      get: function get() {
        return this.h;
      },
      set: function set(height) {
        this.h = height;
      }
    }, {
      key: "area",
      get: function get() {
        return this.w * this.h;
      }
    }]);

    return _Rectangle;
  }();

  ;
  var rect = new _Rectangle(50, 20);
  assert(rect.area === 1000);
  assert(rect.width === 50);
  assert(rect.height === 20);
  assert(rect.w === 50);
  assert(rect.h === 20);
}
