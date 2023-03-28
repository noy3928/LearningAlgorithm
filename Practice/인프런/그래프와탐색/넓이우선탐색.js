function solution() {
  let answer = ""
  let queue = []
  queue.push(1)
  while (queue.length) {
    let v = queue.shift()
    answer += v + " "
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue
      queue.push(nv)
    }
  }

  return answer
}

//-------------------------

/*
상태트리. 
어떤 상태의 출발점.예를 들어, 어떤 출발점에서 도착점으로 가는데, 그 최단 거리가 무엇이냐. 
이것을 구할 때 BFS를 자주 사용한다. 깊이별로, 최단거리를 구할 수 있다. 
레벨 탐색이면서, 최단거리를 구할 수 있는 방법이다. 

v * 2, v * 2 + 1을 사용하는 이유는 무엇일까?
이것을 사용하는 이유는 
*/

function solution() {
  let answer = ""
  let queue = []
  queue.push(1)

  while (queue.length) {
    let v = queue.shift() // 맨 앞의 큐를 꺼낸다.
    answer += v + " "
    for (let nv of [v * 2, v * 2 + 1]) {
      // 이진 트리이기 때문에 이렇게 하면 된다.
      if (nv > 7) continue // 7보다 큰 수라면, 큐에 넣지 않는다. 7까지가 순회해야하는 노드이다.
      queue.push(nv) // 7보다 작은 수라면, 큐에 넣는다.
    }
  }
}

// 이 풀이방식은 큐를 미리 만들어놓고 푸는 방식이 아니다.
