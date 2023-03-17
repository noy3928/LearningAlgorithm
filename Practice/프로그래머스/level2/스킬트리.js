class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
    this.set = new Set()
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.set.add(value)
    this.size++
  }

  dequeue() {
    if (!this.head) {
      return "Queue is empty"
    }

    const removeNode = this.head
    this.head = removeNode.next
    this.size--
    this.set.delete(removeNode.value)
    return removeNode.value
  }

  peak() {
    if (!this.head) {
      return "Queue is empty"
    }
    return this.head.value
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  has(value) {
    return this.set.has(value)
  }
}

const setSkill = skill => {
  const skillQueue = new Queue()

  for (const x of skill) {
    skillQueue.enqueue(x)
  }

  return skillQueue
}

function solution(skill, skill_trees) {
  var answer = 0

  skill_trees.forEach(eachSkill => {
    const skillQueue = setSkill(skill)
    let enable = true

    for (let i = 0; i < eachSkill.length; i++) {
      if (skillQueue.has(eachSkill[i])) {
        if (skillQueue.peak() == eachSkill[i]) skillQueue.dequeue()
        else return (enable = false)
      }
    }

    if (enable) answer++
  })

  return answer
}
/*
선행 스킬. 

먼저 배워야하는 스킬. 

주어진 스킬트리의 순서가 지켜지고 있는지를 판단하는 문제. 
스킬은 여러번 배울 수 있나? 
*/

/*
C -> B -> D 

큐로 풀 수 있을 것 같은 문제이다. 
먼저 들어온 녀석이 먼저 빠져나가야한다. 

1.스킬트리s의 요소 하나씩 순회한다. O(n)
2.각 요소의 스킬하나씩을 스킬순서가 has하고 있는지 판단한다. O(n^2)
    2-1.has하고 있다면, skill[0] === item인지 확인한다. // B, C-> B -> D
    2-2.true라면 skill.shift()한다. O(n^2)
        2-3.2-2가 반복되다가 skill이 하나도 안남으면 true. 
    2-4.false가 하나라도 나오면 false
3.true가 나올 때마다 count를 ++ 한다.
*/
