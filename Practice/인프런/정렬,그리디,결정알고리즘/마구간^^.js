let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const m = input.shift();

const position = input.shift();

const count = (distance, position) => {
  let cnt = 1,
    ep = position[0];

  for (let i = 1; i < position.length; i++) {
    if (position[i] - ep >= distance) {
      cnt++;
      ep = position[i];
    }
  }

  return cnt;
};

const solution = (m, position) => {
  position.sort((a, b) => a - b);

  let lt = 1;
  let rt = position[position.length - 1];
  let answer = 0;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(mid, position) >= m) {
      lt = mid + 1;
      answer = Math.max(mid, answer);
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
};

solution(m, position);
