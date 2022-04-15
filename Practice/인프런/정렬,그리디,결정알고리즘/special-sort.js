let fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map((v) => Number(v));

const solution = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      for (let j = i; j >= 0; j--) {
        if (input[j - 1] > 0) {
          [input[j], input[j - 1]] = [input[j - 1], input[j]];
        }
      }
    }
  }
  console.log(input);
};

solution(input);
