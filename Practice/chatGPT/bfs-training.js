/*
bfs는 너비우선 탐색의 약자로, 그래프 탐색 알고리즘 중 하나이다. 이 알고리즘은 트리나 그래프에서 모든 정점을 방문하는 데 사용되며, 
시작 정점에서 가장 가까운 정점부터 방문하고, 그 다음으로 가까운 정점들을 방문하는 순서로 진행된다. 

1.시작 정점을 큐에 넣는다. 
2.큐가 비어있지 않는 동안 다음 작업을 반복한다. 
    1. 큐에서 가장 앞에 있는 정점을 꺼낸다. 
    2. 해당 정점을 방문 처리한다. 
    3. 해당 정점의 인접한 정점 중 아직 방문하지 않은 정점은 큐에 넣는다. 
*/

/*
연습 문제 1. 
주어진 이진 트리에서 레벨 별로 노드 값을 출력하세요. 
   3
   / \
  9  20
    /  \
   15   7

출력: [[3], [9, 20], [15, 7]]
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function levelOrder(root) {
  if ((root = null)) {
    return []
  }

  const result = []
  const queue = [root]

  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    const levelSize = queue.length // 현재 레벨의 노드 개수
    const currentLevel = [] // 현재 레벨의 노드 값

    for (let i = 0; i < levelSize; i++) {
      // 현재 레벨의 노드 개수만큼 반복
      const currentNode = queue.shift() // 큐에서 노드를 꺼내서

      currentLevel.push(currentNode.val) // 현재 레벨의 노드 값에 추가

      if (currentNode.left !== null) {
        // 왼쪽 자식 노드가 있으면
        queue.push(currentNode.left) // 큐에 추가
      }

      if (currentNode.right !== null) {
        // 오른쪽 자식 노드가 있으면
        queue.push(currentNode.right) // 큐에 추가
      }
    }
    result.push(currentLevel) // 현재 레벨의 노드 값 추가
  }

  return result
}

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

levelOrder(tree) // [[3], [9, 20], [15, 7]]
