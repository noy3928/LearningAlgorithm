let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const solution = (str) => {
  const answer = "yes";
  const checkArr = new Set();
  for (const x of str) {
    if (checkArr.has(x)) {
      console.log("no");
      return;
    } else checkArr.add(x);
  }
  console.log(answer);
};

solution(input);
