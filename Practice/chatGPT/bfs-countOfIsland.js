/*
문제 : 섬의 갯수 
2차원 격자 맵이 주어졌을 때, 섬의 갯수를 세는 프로그램을 작성하시오. 
여기서 1은 땅을 나타내고 0은 물을 나타낸다. 
섬은 땅이 상하좌우로 인접한 경우에 서로 연결되어 있다고 가정한다. 
대각선으로 인접한 경우는 고려하지 않는다. 

예를 들어, 아래와 같은 2차원 격자 맵이 주어졌다고 가정해보자. 
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]

위의 경우에는 섬이 3개가 있다. 
이 문제를 해결하려면, BFS 알고리즘을 사용하여 격자 맵에서 섬을 찾아야 한다. 
격자 맵을 순회하면서 아직 방문하지 않은 땅을 발견할 때마다 BFS를 사용하여 섬을 탐색하고, 
섬의 갯수를 증가시킨다. 
*/

/*
내가 생각해 본 풀이. 

주어진 배열을 순회한다. 
그리고 1을 만나면, 해당 위치를 기준으로 상하좌우를 탐색한다. 
탐색하면서 1을 만나면, 해당 위치로 이동하고 다시 상하좌우를 탐색한다. 이전에 이동했던 위치는 0으로
바꾼다. 

주변에 1이 없으면 진행했던 BFS를 끝낸다. 
끝내면서 count를 ++한다. 

다시 원래 map으로 돌아와서, 순회를 시작한다. 
마찬가지로 1을 만나면 BFS를 시작한다. 위의 과정을 반복한다. 

이렇게 하면, 섬의 갯수를 구할 수 있을 것 같다.
*/

const solution = map => {
  const [n, m] = [map.length - 1, map[0].length - 1]
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  let count = 0

  const bfs = (x, y) => {
    const queue = [[x, y]]

    while (queue.length > 0) {
      const current = queue.shift()

      for (const [dx, dy] of directions) {
        const [nx, ny] = [current[0] + dx, current[1] + dy]

        if (nx >= 0 && nx <= n && ny >= 0 && ny <= m) continue

        if (map[nx][ny] === 1) {
          map[nx][ny] = 0
          queue.push([nx, ny])
        }
      }
    }
    count++
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 1) {
        bfs(i, j)
      }
    }
  }

  return count
}

// -------------------------- gpt가 제공해 준 풀이법

function countIslands(grid) {
  const rows = grid.length
  const cols = grid[0].length
  let count = 0

  const bfs = (row, col) => {
    const queue = [[row, col]]

    while (queue.length > 0) {
      const [currRow, currCol] = queue.shift()

      for (const [dx, dy] of [
        [1, 0], // Down
        [-1, 0], // Up
        [0, 1], // Right
        [0, -1], // Left
      ]) {
        const newRow = currRow + dx
        const newCol = currCol + dy

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 0
          queue.push([newRow, newCol])
        }
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        bfs(row, col)
        count++
      }
    }
  }

  return count
}
