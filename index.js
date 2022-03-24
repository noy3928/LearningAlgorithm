let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

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
