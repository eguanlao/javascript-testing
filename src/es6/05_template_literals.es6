// String Interpolation
{
  let customer = { name: "Foo" };
  let card = { amount: 7, product: "Bar", unitprice: 42 };
  let message = `Hello ${customer.name},
  want to buy ${card.amount} ${card.product} for
  a total of ${card.amount * card.unitprice} bucks?`;
}

// Custom Interpolation
{
  let bar = 1;
  let baz = 2;
  let foo = 3;

  function get(...url) {
    return url;
  }

  let asdf = get`http://example.com/foo?bar=${bar + baz}&quux=${foo}`;
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
