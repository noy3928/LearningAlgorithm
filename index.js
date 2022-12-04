let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()

const groupA = new Map()
const groupB = new Map()
input
  .shift()
  .split(" ")
  .map(Number)
  .forEach((v, i) => groupA.set(v, i))
input
  .shift()
  .split(" ")
  .map(Number)
  .forEach((v, i) => groupB.set(v, i))

const solution = (A, B) => {
  let answer = 0
  for (const [key, value] of A) {
    if (!B.has(key)) answer++
  }

  for (const [key, value] of B) {
    if (!A.has(key)) answer++
  }
  console.log(answer)
}

solution(groupA, groupB)

/*
1.A, B에 대한 그룹을 만든다. 
2.answer이라는 카운트를 따로 만든다.
3.A의 각 요소를 순회하며, B 그룹에 해당 요소가 존재하는지 확인한다. 
4.해당 요소가 존재하지 않을 경우, answer++을 한다. 만약 존재한다면 그냥 넘어간다. 
5.A그룹을 다 돌았으면, B 그룹을 한번 더 순회한다. 
6.3-4에 해당하는 내용을 한번 더 반복한다. 
*/
