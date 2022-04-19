let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const solution = (input) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];

  for (const x of input) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    } else {
      return a[0] - b[0];
    }
  });

  let cnt = 0;
  for (const x of timeLine) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  console.log(answer);
};

solution(input);
