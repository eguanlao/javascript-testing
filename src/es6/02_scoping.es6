// Block-Scoped Variables
let a = ["alpha", "bravo", "charlie"];
let b = ["beta", "gamma", "delta"];

for (let i = 0; i < a.length; i++) {
    let x = a[i];
}
for (let i = 0; i < b.length; i++) {
    let y = b[i];
}

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2; };
}
assert(callbacks[0]() === 0);
assert(callbacks[1]() === 2);
assert(callbacks[2]() === 4);

// Block-Scoped Functions
{
    function foo() { return 1; }
    assert(foo() === 1);
    {
        function foo() { return 2; }
        assert(foo() === 2);
    }
    assert(foo() === 1);
}
