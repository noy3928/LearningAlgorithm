let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const solution = (input) => {
  let answer = 0;
  input.sort((a, b) => a[0] - b[0]);

  input.forEach((time, idx) => {
    let maxCount = 1;
    for (let j = idx + 1; j < input.length; j++) {
      if (Number(input[j][0]) < Number(time[1])) {
        console.log(input[j][0], time[1]);
        maxCount++;
      }
    }
    answer = Math.max(maxCount, answer);
  });
  console.log(answer);
};

solution(input);

//------ 선생님 풀이

const solution2 = (input) => {
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

solution2(input);
