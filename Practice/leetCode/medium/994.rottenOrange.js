/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rottenPos = []
  const directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ]
  let maxTime = 0
  const n = grid.length
  const m = grid[0].length

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) rottenPos.push([i, j, 0])
    }
  }

  while (rottenPos.length > 0) {
    const [x, y, time] = rottenPos.shift()
    maxTime = Math.max(time, maxTime)

    for (const [dx, dy] of directions) {
      const nx = dx + x
      const ny = dy + y
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] == 1) {
        grid[nx][ny] = 2
        rottenPos.push([nx, ny, time + 1])
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) return -1
    }
  }

  return maxTime
}

/** 
0,1,2 라는 값을 가질 수 있는 이중배열이다. 매 분마다, 썩은 토마토로부터 인접해있는 신선한 오렌지는 썩은 오렌지가 된다. 
모든 신선한 오렌지가 썩은 오렌지가 되는 시간이 최소 몇분인지 반환하라. 

저렇게 그리드가 있는 문제를 보면 BFS아니면 DFS라고 판단할 수 있어야 한다. 그런데 이 문제가 BFS가 되는 이유는, 
모든 2가 이어져 있는 것이 아니라, 분리되어 있는 것이었기 때문에, 그리고 그 분리된 각각의 요소로부터 시간을 증가시켜가고,
그 증가된 시간 중 가장 큰 시간을 저장하려는 것이기 때문에. BFS로 해야한다. 
문제를 풀기 위한 계획을 세워보자. 

1. 썩은 오렌지의 위치를 저장할 큐를 만든다. 그리고 방향도 만들어준다. 
2. grid를 순회하면서, rottenPos의 위치를 저장한다. 
3. 그리고 rottenPos를 while문에서 순회한다. 
4. 하나씩 순회하면서, 사방에서 1이 있으면 그 1을 2로 바꿔준다. 그리고 time++을 해준다. 
5. 마지막에 만약 1이 남아있다면, -1을 반환한다. (왜냐하면 2가 있는 지점을 다 돌았는데도 1이 남아있다면 고립된 것이 있다는 의미이기 때문이다.)
6. return time을 한다. 
*/
