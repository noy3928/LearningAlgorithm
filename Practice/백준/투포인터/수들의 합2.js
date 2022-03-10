let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

const arr = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

const solution = (m, arr) => {
  let sum = (answer = 0);
  for (let lt = 0; lt < arr.length; lt++) {
    let rt = lt + 1;
    sum = arr[lt];
    while (sum <= m) {
      if (sum === m) {
        answer++;
      }
      sum += arr[rt++];
    }
    sum = 0;
  }
  console.log(answer);
};

solution(M, arr);
