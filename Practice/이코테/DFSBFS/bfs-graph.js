const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
]

const visited = Array.from({ length: 9 }, () => false)

function BFS(graph, start, visited) {
  const queue = [start]
  visited[start] = true
  while (queue) {
    let v = queue.shift()
    console.log(v)
    for (const x of graph[v]) {
      if (!visited[x]) {
        queue.push(x)
        visited[x] = true
      }
    }
  }
}

BFS(graph, 1, visited)
