let [X, Y] = require("fs").readFileSync("example.txt").toString().split("")

const getXPosition = alpha => {
  const table = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  }
  return table[alpha]
}

function solution(x, y) {
  let answer = 0
  //동북, 동남, 남동, 남서, 서북, 서남, 북동, 북서
  const dx = [2, 2, 1, -1, -2, -2, 1, -1]
  const dy = [-1, 1, 2, 2, 1, -1, -2, -2]

  for (let i = 0; i < 8; i++) {
    const nx = dx[i] + x
    const ny = dy[i] + y
    if (!(nx < 1 || nx > 8 || ny < 1 || ny > 8)) {
      answer++
    }
  }
  console.log(answer)
}

solution(getXPosition(X), Number(Y))
