{
  // Expression Bodies
  let evens = [2, 4, 6, 8, 10];
  let odds  = evens.map(v => v + 1);
  let pairs = evens.map(v => ({ even: v, odd: v + 1 }));
  let nums  = evens.map((v, i) => v + i);

  // Statement Bodies
  let fives = [];
  nums.forEach(v => {
     if (v % 5 === 0)
         fives.push(v);
  });
  assert.equal(fives.length, 1);
}
