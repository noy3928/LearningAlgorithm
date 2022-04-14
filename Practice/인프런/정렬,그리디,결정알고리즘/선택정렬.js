let fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map((v) => Number(v));

/*
1.숫자를 순회한다. 
2.나온 숫자를 왼쪽 편에 있는 숫자와 비교한다. 
3.왼쪽편에 있는 숫자가 더 크다면 두 숫자의 자리를 바꾼다. 
4.바꾼다음에 한번 더 비교한다. 
5.만약 왼쪽편에 있는 숫자가 더 작으면 멈춘다. 
6.다음 숫자를 순회한다. 
*/

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
