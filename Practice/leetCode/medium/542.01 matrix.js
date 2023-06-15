/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const result = Array.from({ length: mat.length }, () =>
    Array.from({ length: mat[0].length }, () => 0)
  )

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 1) {
        result[i][j] = BFS([i, j], mat)
      }
    }
  }

  return result
}

function BFS([x, y], mat) {
  const queue = [[x, y, 0]]
  let answer = Number.MAX_SAFE_INTEGER
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const visited = Array.from({ length: mat.length }, () =>
    Array.from({ length: mat[0].length }, () => false)
  )

  while (queue.length) {
    const [curX, curY, distance] = queue.shift()

    if (mat[curX][curY] == 0) {
      return distance
    }

    for (const [dx, dy] of directions) {
      const nx = curX + dx
      const ny = curY + dy

      if (
        nx >= 0 &&
        nx < mat.length &&
        ny >= 0 &&
        ny < mat[0].length &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true
        queue.push([nx, ny, distance + 1])
      }
    }
  }

  return answer
}

/*
첫번째 시도였지만, 이런 풀이로는 시간복잡도에서 통과하지 못한다. 
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length,
    n = mat[0].length
  const dist = Array.from({ length: m }, () =>
    Array(n).fill(Number.MAX_SAFE_INTEGER)
  )
  const queue = []
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0
        queue.push([i, j]) // Start BFS from every cell with a 0
      }
    }
  }

  while (queue.length !== 0) {
    const [currentX, currentY] = queue.shift()

    for (const [dx, dy] of directions) {
      const newX = currentX + dx,
        newY = currentY + dy

      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        if (dist[currentX][currentY] + 1 < dist[newX][newY]) {
          dist[newX][newY] = dist[currentX][currentY] + 1
          queue.push([newX, newY])
        }
      }
    }
  }

  return dist
}

/*
이 풀이 같은 경우에는 처음에 모든 위치의 값을 가장 큰 값들로 dist 배열에 초기화 해놓는다. 
그리고 mat을 순회하면서 0이 있던 위치에 dist에도 0으로 초기화하면서, 
0에 해당하는 위치를 queue에 넣는다.
그러면 현재 0을 제외한 값들에는 모두 가장 큰 값들이 들어가있을 것이다. 

그리고 queue에 있는 위치들을 하나씩 순회한다. 
그리고 그 위치에서 상하좌우로 이동하면서,
만약 이동할 위치의 값이 현재 위치의 값 + 1보다 크다면,
이동할 위치의 값을 현재 위치의 값 + 1로 바꾸고, queue에 넣는다.
이렇게 하면, 0을 제외한 모든 값들에 대해서, 0과의 거리가 계산된다.

*/
