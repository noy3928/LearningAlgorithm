let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [M, N] = input.shift().split(" ");

/*
1.중복된 값을 찾는 문제. 
2.그런데 중요한 포인트는 중복된 값을 제거하는 순서. 
3.앞번에 있는 중복된 요소를 먼저 제거해야 함. 
*/

const solution = (m, list) => {
  const tmp = new Map();
  let answer = [];

  for (let i = 0; i < list.length; i++) {
    if (tmp.has(list[i])) tmp.delete(list[i]);
    tmp.set(list[i], list[i]);
  }

  for (let i = 0; i < m; i++) {
    answer += [...tmp][i][0] + "\n";
  }

  console.log(answer);
};

solution(M, input);
