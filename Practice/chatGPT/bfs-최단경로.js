/*
문제: 주어진 그래프에서 시작 노드에서 목표 노드까지의 최단 경로를 찾는 프로그램을 작성하세요. 그래프는 인접 리스트 형태로 주어집니다.

graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
}
start = 'A'
end = 'F'
출력: ['A', 'C', 'F'] 또는 ['A', 'B', 'E', 'F']

이 문제를 해결하기 위해 BFS 알고리즘을 사용하여 주어진 그래프에서 시작 노드에서 목표 노드까지의 최단 경로를 찾아 출력하세요. 
입력은 인접 리스트 형태의 그래프와 시작 노드 및 목표 노드가 주어집니다. 출력은 최단 경로를 나타내는 노드 목록입니다. 
여러 경로가 존재할 수 있으므로, 어느 것이든 하나의 경로만 출력해야 합니다.
*/

/*
최단 경로를 찾는것. 
*/

function findShortestPath(graph, start, end) {
  let queue = [[start]]
  let visited = new Set()

  while (queue.length > 0) {
    let path = queue.shift()
    let node = path[path.length - 1]

    if (!visited.has(node)) {
      visited.add(node)
      let neighbors = graph[node]

      for (let neighbor of neighbors) {
        let newPath = [...path, neighbor]

        if (neighbor === end) {
          return newPath
        }

        queue.push(newPath)
      }
    }
  }

  return null
}

let graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
}

let start = "A"
let end = "F"

let shortestPath = findShortestPath(graph, start, end)
console.log(shortestPath)
