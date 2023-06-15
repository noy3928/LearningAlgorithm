var canVisitAllRooms = function (rooms) {
  let numRooms = rooms.length
  let visited = new Array(numRooms).fill(false)
  let queue = [0] // 시작점은 0번 방

  while (queue.length > 0) {
    let room = queue.shift() // queue에서 첫번째 요소를 추출
    visited[room] = true // 해당 방을 방문했다고 표시

    let keys = rooms[room] // 해당 방에서 키를 얻음
    for (let key of keys) {
      if (!visited[key]) {
        // 해당 키로 열 수 있는 방을 방문하지 않았다면
        queue.push(key) // queue에 추가
      }
    }
  }

  for (let v of visited) {
    if (!v) return false // 방문하지 않은 방이 있다면 false 반환
  }

  return true // 모든 방을 방문했다면 true 반환
}

/*
[[4], [3], [], [2,5,7], [1], [], [8,9], [], [], [6]]

1. visited[0]에 true를 할당한다. 
2. rooms[0]에 있는 키들을 queue에 넣는다. 4를 가져온다. 
3. 4에 들어간 적이 없기 대문에 queue에 4를 넣는다.
4. queue에서 4를 빼낸다. 
5. 4를 방문했다고 표시한다. 
6. 4에 있는 키들을 가져온다. [1]을 가져온다.
7. 1에 들어간 적이 없기 때문에 queue에 1을 넣는다.
8. queue에서 1을 빼낸다.
9. 1을 방문했다고 표시한다.
10. 1에 있는 키들을 가져온다. [3]을 가져온다.
11. 3에 들어간 적이 없기 때문에 queue에 3을 넣는다.
12. queue에서 3을 빼낸다.
13. 3을 방문했다고 표시한다.
14. 3에 있는 키들을 가져온다. []을 가져온다.
15. 해당 방에는 어떤 키도 없다. 더 이상 queue에 넣을 방이 없다. 
16. visited에 false가 있는지 확인한다. 아직 방문하지 않은 방이 있기 때문에 순회할 수가 없다. 


위의 문제에서는 방(노드)과 키(에지)를 가진 그래프에서 BFS를 사용하여 모든 방을 방문할 수 있는지 확인하는 문제였다.  
처음 시작하는 방을 큐에 넣고, 각 방에 대해서 그 방에서 얻을 수 있는 모든 키(즉, 갈 수 있는 다른 방들)를 큐에 추가하는 식으로 탐색을 진행한다. 
방문한 방은 다시 방문하지 않도록 표시하여 중복 탐색을 방지한다. 이런 식으로 BFS 알고리즘을 사용하여 문제를 해결할 수 있다.
*/
