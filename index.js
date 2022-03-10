let fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const solution = (numbers) => {
  let booleans = Array.from({ length: 100 }, () => false);

  for (num of numbers) {
    booleans[num] = true;
  }

  let index = 0;
  for (let i = 0; i < booleans.length; i++) {
    if (booleans[i]) {
      numbers[index++] = i;
    }
  }
  console.log(numbers);
};

solution(input);
