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
