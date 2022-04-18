let fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((v) => v.trim().split(" "));

/*
1. 버블정렬로 정렬한다.
2. 정렬을 하다가 두 값이 같다. 그러면 y값을 비교한다. 
*/

const solution = (input) => {
  let arr = input;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j][0] === arr[j + 1][0]) {
        if (arr[j][1] > arr[j + 1][1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      } else if (arr[j][0] > arr[j + 1][0]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
};

solution(input);
