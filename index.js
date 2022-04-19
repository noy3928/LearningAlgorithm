let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((v) => v.trim().split(" "));

const solution = (input) => {
  let answer = 1;
  const sortedInput = input.sort((a, b) => a[1] - b[1]);
  console.log(sortedInput);

  let end = sortedInput[0][1];
  for (let i = 1; i < sortedInput.length; i++) {
    if (Number(input[i][0]) >= Number(end)) {
      answer++;
      end = input[i][1];
      console.log("크거나 같다", end);
    }
  }
  console.log(answer);
};

solution(input);
