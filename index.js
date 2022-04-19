let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((v) => v.split(" "));

const target = input.shift().shift();
const arr = input.shift();

const solution = (target, arr) => {
  let answer = 0;
  arr.sort((a, b) => a - b);

  console.log(target);

  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (target < arr[mid]) rt = mid - 1;
    else lt = mid + 1;
  }
  console.log(answer);
};

solution(target, arr);
