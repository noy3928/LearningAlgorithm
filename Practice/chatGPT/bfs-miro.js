/*
문제: 미로 찾기
미로가 주어졌을 때, 시작 지점에서 도착 지점까지 가장 빠른 경로를 찾는 프로그램을 작성하세요. 
미로는 n x m 크기의 2차원 배열로 주어집니다. 
시작 지점은 (0, 0)이고, 도착 지점은 (n-1, m-1)입니다. 
이동은 상하좌우로만 가능하며, 1은 벽이고 0은 길입니다. 경로의 길이는 이동한 칸 수입니다.

예를 들어, 아래와 같은 미로가 주어졌다고 가정합시다.

[
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
]
이 경우, 최단 경로의 길이는 12입니다.

이 문제를 해결하려면 BFS 알고리즘을 사용하여 시작 지점부터 
도착 지점까지의 최단 경로를 찾을 수 있습니다. 
먼저, 큐를 사용하여 방문할 지점들을 저장하고, 
이미 방문한 지점을 표시할 2차원 배열을 준비합니다. 
이동할 수 있는 네 가지 방향(상, 하, 좌, 우)을 정의하고, 
BFS 알고리즘을 사용하여 가능한 모든 경로를 탐색합니다. 
도착 지점에 도달하면 경로의 길이를 반환합니다.
*/

// 1. 큐를 사용하여 방문할 지점들을 저장하고, 이미 방문한 지점을 표시할 2차원 배열을 준비합니다.
// 2. 이동할 수 있는 네 가지 방향(상, 하, 좌, 우)을 정의합니다.
// 3. BFS 알고리즘을 사용하여 가능한 모든 경로를 탐색합니다.
// 4. 도착 지점에 도달하면 경로의 길이를 반환합니다.

function shortestPathInMaze(maze) {
  const n = maze.length - 1
  const m = maze[0].length - 1
  const visited = Array.from({ length: n }, () => Array(m).fill(false))

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const queue = [{ row: 0, col: 0, distance: 1 }]
  visited[0][0] = true

  while (queue.length > 0) {
    const current = queue.shift()
    const { row, col, distance } = current

    if (row === n && col === m) return distance

    for (const [dx, dy] of directions) {
      const nx = row + dx
      const ny = col + dy

      if (
        nx >= 0 &&
        nx <= n &&
        ny >= 0 &&
        ny < m &&
        !visited[nx][ny] &&
        maze[nx][ny] === 0
      ) {
        queue.push({ row: nx, col: ny, distance: distance + 1 })
        visited[nx][ny] = true
      }
    }
  }

  return -1 // 도착 지점에 도달하지 못했을 경우
}

/*
1. 먼저 입력으로 주어진 미로의 크기를 가져온다. 
2. visited 배열을 만들어 방문 여부를 체크한다. 
3. BFS를 구현하기 위해 큐를 생성하고 시작 지점을 넣는다. 시작 지점의 거리는 1로 설정한다. 
4. 큐에 원소가 없을 때까지 반복문을 돈다. 그러면서 BFS를 진행한다. 
- 큐에서 현재 위치를 가져온다. 
- 도착 지점에 도달한 경우, 거리를 반환한다. 
- 네 방향 중 이동 가능한 위치에 대해 다음을 수행한다. 
    - 새로운 위치를 큐에 추가하고, 거리를 1 증가시킨다. 
    - 새로운 위치를 방문처리한다. 
5. 반복문이 끝난 후 반환되지 않은 경우, 시작 지점에서 도착지점까지 경로가 없는 것으로 간주하고 -1을 반환한다. 
*/