class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const tree = new TreeNode(8)
tree.left = new TreeNode(3)
tree.right = new TreeNode(10)
tree.left.left = new TreeNode(1)
tree.left.right = new TreeNode(6)
tree.left.right.left = new TreeNode(4)
tree.left.right.right = new TreeNode(7)
tree.right.right = new TreeNode(14)
tree.right.right.left = new TreeNode(13)

const printNode = tree => {
  const queue = [tree]
  let level = 1

  while (queue.length > 0) {
    const levelSize = queue.length
    const currentLevel = []

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift()
      currentLevel.push(current.val)

      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }

    console.log(`Level ${level} : ${currentLevel.join(" ")}`)
  }
}

printNode(tree)

/*
1.주어진 입력을 만든다.
2.트리를 받으면, 먼저 루트를 큐에 넣는다. 
3.큐를 while으로 돌린다. 
4.while문 안에서, 해당 큐의 left와 right가 존재하는지 확인을 하고, 해당 노드들을 다시 큐에 넣는다. 
5.count를 +1 한다. 
6.다시 queue에 있는 내용물을 가지고 while문을 돌린다. 
7.해당 queue에 속한 left, right를 모두 queue에 넣는다. 
8.위 과정을 반복한다.
*/
