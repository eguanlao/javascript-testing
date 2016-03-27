// Promise Usage
{
  function msgAfterTimeout(msg, who, timeout) {
    console.log(`${msg}, ${who}, ${timeout}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
    });
  }
  msgAfterTimeout("", "Foo", 100)
    .then((msg) => msgAfterTimeout(msg, "Bar", 200))
    .then((msg) => msgAfterTimeout(msg, "Baz", 300))
    .then((msg) => msgAfterTimeout(msg, "Quux", 400))
    .then((msg) => {console.log(`Done: ${msg}`)});
}

// Promise Combination
{
  function fetchAsync (url, timeout, onData, onError) {
    console.log(`${url}, ${timeout}, ${onData}, ${onError}`);
  }
  let fetchPromised = (url, timeout) => {
    return new Promise((resolve, reject) => {
      fetchAsync(url, timeout, resolve, reject);
    });
  }
  Promise.all([
    fetchPromised("http://backend/foo.txt", 500),
    fetchPromised("http://backend/bar.txt", 500),
    fetchPromised("http://backend/baz.txt", 500)
  ]).then((data) => {
    let [foo, bar, baz] = data;
    console.log(`success: foo=${foo} bar=${bar} baz=${baz}`);
  }, (err) => {
    console.log(`error: ${err}`);
  });
}
