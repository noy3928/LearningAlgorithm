let fs = require("fs");
let input = fs.readFileSync("example.txt").toString();

/*
1.들어온 문자열을 순회한다. 
2.숫자라면 stack에 쌓아둔다. 
3.숫자가 아니라면, 해당 기호에 알맞도록 stack에 있는 맨 마지막 수와 그 전 수를 연산한다.
4.해당 수를 스택의 마지막에 push 한다. 
*/

const solution = (str) => {
  let stack = [];
  [...str].forEach((el) => {
    if (!isNaN(el)) {
      stack.push(el);
    } else {
      const result = Math.abs(eval(`${stack.pop()}${el}${stack.pop()}`));
      stack.push(result);
    }
  });
  console.log(stack[0]);
};

solution(input);
