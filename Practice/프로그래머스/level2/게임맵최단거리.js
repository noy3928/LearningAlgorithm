function solution(maps) {
  var answer = Number.MAX_SAFE_INTEGER

  const dx = [-1, 0, 1, 0]
  const dy = [0, 1, 0, -1]

  const targetX = maps.length - 1
  const targetY = maps[0].length - 1

  const searchMap = (x, y, count) => {
    if (count >= answer) return
    if (x === targetX && y === targetY)
      return (answer = Math.min(answer, count))
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if (
          nx >= 0 &&
          nx <= targetX &&
          ny >= 0 &&
          ny <= targetY &&
          maps[nx][ny] === 1
        ) {
          maps[nx][ny] = 0
          searchMap(nx, ny, count + 1)
          maps[nx][ny] = 1
        }
      }
    }
  }
  maps[0][0] = 0
  searchMap(0, 0, 1)

  if (answer === Number.MAX_SAFE_INTEGER) answer = -1
  return answer
}
