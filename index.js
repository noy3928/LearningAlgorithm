let fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map((v) => Number(v));
console.log(input);

const solution = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const tmp = input[j];
      if (input[j] > tmp) {
        input[j + 1] = input[j];
      } else {
        break;
      }

      if (j == 0) input[j] = tmp;
    }
  }
  console.log(input);
};

solution(input);
