let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(v => Number(v))

const solution = input => {
  const rightArr = [1, 1, 2, 2, 2, 8]
  const answer = []
  for (let i = 0; i < 6; i++) {
    answer.push(rightArr[i] - input[i])
  }
  console.log(answer.join(" "))
}
solution(input)
