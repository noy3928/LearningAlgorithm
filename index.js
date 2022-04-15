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

const solution = (input) => {
  let arr = input;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
};

solution(input);
