let fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map((v) => Number(v));

const solution = (arr) => {
  let nums = arr;
  for (let i = 0; i < nums.length; i++) {
    let idx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[idx]) idx = j;
    }
    [nums[idx], nums[i]] = [nums[i], nums[idx]];
  }
  console.log(nums);
};

solution(input);
