function solution(n, wires) {
  const graph = createGraph(n, wires)
  const totalTowers = countTowers(graph, 1, 0)
  let minDifference = Infinity

  for (let i = 0; i < wires.length; i++) {
    const [v1, v2] = wires[i]
    const towers1 = countTowers(graph, v1, v2)
    const towers2 = totalTowers - towers1
    const difference = Math.abs(towers1 - towers2)
    minDifference = Math.min(minDifference, difference)
  }

  return minDifference
}

function createGraph(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => [])

  for (let i = 0; i < wires.length; i++) {
    const [v1, v2] = wires[i]
    graph[v1].push(v2)
    graph[v2].push(v1)
  }

  return graph
}

function countTowers(graph, start, excluded) {
  let count = 1
  const stack = [start]
  const visited = new Set()
  visited.add(start)

  while (stack.length > 0) {
    const node = stack.pop()

    for (let i = 0; i < graph[node].length; i++) {
      const neighbor = graph[node][i]

      if (neighbor === excluded || visited.has(neighbor)) {
        continue
      }

      stack.push(neighbor)
      visited.add(neighbor)
      count++
    }
  }

  return count
}
