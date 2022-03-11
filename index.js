let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

const nums = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

const solution = (n, s, arr) => {
  let answer = (sum = j = length = 0);
  while (sum < s) {
    if (j < n) {
      sum += arr[j++];
      length++;
    } else break;
  }
  answer = length;
  sum = 0;
  for (let i = 1; i < arr.length; i++) {
    j = i;
    length = 0;

    while (sum < s) {
      if (j < n) {
        sum += arr[j++];
        length++;
      } else break;
    }

    if (sum >= 15) answer = Math.min(answer, length);
    sum = 0;
  }
  console.log(answer);
};

solution(N, M, nums);
