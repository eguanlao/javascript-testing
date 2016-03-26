// Class Definition
class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  toString () {
    return `Shape(${this.id})`
  }
}

let s = new Shape(1, 2, 3);
assert.equal(s.id, 1);
assert.equal(s.x, 2);
assert.equal(s.y, 3);
assert.equal(s.toString(), "Shape(1)");

// Class Inheritance
class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  }
  // Static Member
  static defaultRectangle () {
      return new Rectangle("default", 0, 0, 100, 100);
  }
  toString () {
    // Base Class Access
    return "Rectangle > " + super.toString();
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  }
  // Static Member
  static defaultCircle () {
      return new Circle("default", 0, 0, 100);
  }
  toString() {
    // Base Class Access
    return "Circle > " + super.toString();
  }
}

let r = new Rectangle(2, 3, 4, 5, 6);
assert.equal(r.id, 2);
assert.equal(r.x, 3);
assert.equal(r.y, 4);
assert.equal(r.width, 5);
assert.equal(r.height, 6);
assert.equal(r.toString(), "Rectangle > Shape(2)");

let c = new Circle(3, 4, 5, 6);
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
  class Rectangle {
      constructor(width, height) {
          this.w = width;
          this.h = height;
      }
      get width() {
        return this.w;
      }
      set width(width) {
        this.w = width;
      }
      get height() {
        return this.h;
      }
      set height(height) {
        this.h = height;
      }
      get area() {
        return this.w * this.h;
      }
  };
  var rect = new Rectangle(50, 20);
  assert(rect.area === 1000);
  assert(rect.width === 50);
  assert(rect.height === 20);
  assert(rect.w === 50);
  assert(rect.h === 20);
}
