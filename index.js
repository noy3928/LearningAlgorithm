let fs = require("fs");
let input = fs.readFileSync("example.txt").toString();

/**
 * 1.괄호 안의 문자열을 제거해야 한다.
 * 2.문자가 괄호안에 있는지 없는지를 판단해야 함
 */

const solution = (str) => {
  let stack = [];
  let answer = [];
  for (const x of str) {
    if (x === "(") stack.push(x);
    else if (x === ")") stack.pop();
    else {
      if (stack.length === 0) {
        answer.push(x);
      }
    }
  }
  console.log(answer.join(""));
};

solution(input);
