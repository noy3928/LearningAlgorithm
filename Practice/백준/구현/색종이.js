let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1)

let blackArea = 0 // 검은 영역의 넓이
let blackPaper = Array(100)
  .fill()
  .map(() => Array(100).fill(0)) // 100x100 크기의 검은 색종이 배열

for (let i = 0; i < input.length; i++) {
  let [x, y] = input[i].split(" ").map(Number)

  // 색종이가 도화지 위에 붙는 부분을 1로 표시
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      blackPaper[j][k] = 1
    }
  }
}

// 검은 색종이 배열을 순회하면서 검은 영역의 넓이를 계산
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (blackPaper[i][j] === 1) {
      blackArea++
    }
  }
}

console.log(blackArea)
