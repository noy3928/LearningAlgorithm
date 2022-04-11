function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

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
