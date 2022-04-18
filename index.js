let fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((v) => v.split(" "));
const [N, M] = input;

function solution(n, m) {
  const size = n[0];
  let cache = Array.from({ length: size }, () => 0);

  m.forEach((item) => {
    let pos = -1;
    for (let i = 0; i < size - 1; i++) if (item === cache[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }
    cache[0] = item;
  });
  console.log(cache);
}

solution(N, M);
