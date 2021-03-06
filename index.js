let [N, K] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(v => Number(v))

function solution(n, k) {
  let count = 0
  while (n !== 1) {
    count++
    if (n % k === 0) n = n / k
    else n -= 1
  }
  return count
}

console.log(solution(N, K))

/*
while문을 돌린다. 
if문을 통해서 확인한다. 
1.만약 N % K 했을 때  0이 나오는지 확인한다.  
나누어 떨어진다면 N/K를 하고 그 값을 N에 넣어준다. 

*/
