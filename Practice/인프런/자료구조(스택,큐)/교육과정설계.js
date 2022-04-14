let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input;
console.log(N, M);

const solution = (n, m) => {
  const queue = [];
  const set = new Set([...n]);
  let answer = "YES";

  for (const x of m) {
    if (set.has(x)) {
      queue.push(x);
    }
  }
  if (n !== queue.join("")) answer = "NO";
  console.log(answer);
};

solution(N, M);

//----------------------------------------------------------------
function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
