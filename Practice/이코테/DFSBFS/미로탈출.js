let input = require("fs").readFileSync("example.txt").toString().split("\n")
const [N, M] = input.shift().split(" ").map(Number)
const map = input.map(v => v.split(" ").map(Number))

const solution = (N, M, map) => {
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]

  function BFS(x, y) {
    const queue = []
    queue.push([x, y])

    while (queue.length) {
      const [ix, iy] = queue.shift()

      for (let i = 0; i < 4; i++) {
        const nx = ix + dx[i]
        const ny = iy + dy[i]

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue
        if (map[nx][ny] === 0) continue
        if (map[nx][ny] === 1) {
          map[nx][ny] = map[ix][iy] + 1 // 이전 위치에 있던 값에서 + 1
          console.log(map)
          queue.push([nx, ny])
        }
      }
    }
  }

  BFS(0, 0)
  return map[N - 1][M - 1]
}

console.log(solution(N, M, map))

/*
최소한으로 움직인 칸의 갯수. 

N,M의 위치로 이동하는 경우의 수를 구해야한다. 
N,M의 위치로 이동하는 경우의 수 중에서 가장 작은 수를 결과 값으로 반환하면 된다. 

2차원 배열을 순회하면서, 

*/
