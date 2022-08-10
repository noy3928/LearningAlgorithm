let map = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map(v => v.split(" ").map(Number))

const solution = map => {
  console.log(map)
  const xLength = map[0].length
  const yLength = map.length
  let count = 0
  const dx = [0, 1, 0, -1]
  const dy = [-1, 0, 1, 0]

  function checkOmni(x, y) {
    console.log(x, y)
    let result = false
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x
      const ny = dy[i] + y
      console.log(ny, nx)
      if (
        nx >= 0 &&
        nx < xLength &&
        ny >= 0 &&
        ny < yLength &&
        map[ny][nx] === 0
      ) {
        result = true
      }
    }
    return result
  }

  function DFS(x, y) {
    if (checkOmni(x, y)) {
      return
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x
        const ny = dy[i] + y
        console.log(nx, ny)
        if (
          nx >= 0 &&
          nx < xLength &&
          ny >= 0 &&
          ny < yLength &&
          map[ny][nx] === 0
        ) {
          map[ny][nx] = 1
          DFS(nx, ny)
        }
      }
    }
  }

  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {
      if (map[y][x] === 0) {
        count++
        DFS(x, y)
      }
    }
  }
  return count
}
console.log(solution(map))
