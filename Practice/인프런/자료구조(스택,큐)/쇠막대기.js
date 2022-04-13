let fs = require("fs");
let input = fs.readFileSync("example.txt").toString();

/*
1.들어온 문자열을 순회한다. 
2.숫자라면 stack에 쌓아둔다. 
3.숫자가 아니라면, 해당 기호에 알맞도록 stack에 있는 맨 마지막 수와 그 전 수를 연산한다.
4.해당 수를 스택의 마지막에 push 한다. 
*/

const solution = (str) => {
  console.log(str);
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (str[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer += 1;
      }
    }
  }
  console.log(answer);
};

solution(input);

function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer++;
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
