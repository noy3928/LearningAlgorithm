let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");
const [N, K] = input;

const solution = (n, k) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let count = arr.length;

  while (count > 1) {
    arr.forEach((el, idx) => {
      if (idx === k - 1) {
        const lt = arr.slice(0, idx);
        const rt = arr.slice(idx + 1);
        arr = [...rt, ...lt];
        count = arr.length;
        console.log(arr);
      }
    });
  }
};

solution(N, K);
