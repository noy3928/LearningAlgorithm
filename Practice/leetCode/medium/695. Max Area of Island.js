var maxAreaOfIsland = function (grid) {
  let answer = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        answer = Math.max(BFS(i, j), answer)
      }
    }
  }

  function BFS(i, j) {
    const queue = [[i, j]]
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
    let maxSize = 0
    grid[i][j] = 0

    while (queue.length) {
      const [currentX, currentY] = queue.shift()
      maxSize++
      for (const [dx, dy] of directions) {
        const nx = dx + currentX
        const ny = dy + currentY
        if (
          nx >= 0 &&
          nx < grid.length &&
          ny >= 0 &&
          ny < grid[0].length &&
          grid[nx][ny] == 1
        ) {
          queue.push([nx, ny])
          grid[nx][ny] = 0
        }
      }
    }

    return maxSize
  }

  return answer
}
