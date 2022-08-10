let num = Number(require("fs").readFileSync("example.txt").toString())

function solution(n) {
  let answer = 0
  for (let i = 1; i <= n; i++) {
    answer += i
  }
  console.log(answer)
}

solution(num)
