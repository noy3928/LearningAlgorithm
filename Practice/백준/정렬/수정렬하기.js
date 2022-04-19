let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

input.shift();

const solution = (input) => {
  let arr = input;

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  console.log(arr.join("\n"));
};

solution(input);
