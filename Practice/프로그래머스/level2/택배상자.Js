function solution(order) {
  let count = 0
  const container = Array.from(
    { length: order.length },
    (_, i) => i + 1
  ).reverse()
  order.reverse()
  const subStack = []

  while (container.length) {
    if (container[container.length - 1] === order[order.length - 1]) {
      // 택배상자에 있는 상자가 순서와 같다면
      count++
      container.pop()
      order.pop()
    } else {
      if (subStack.length == 0) {
        subStack.push(container.pop())
        continue
      } else if (subStack[subStack.length - 1] === order[order.length - 1]) {
        count++
        subStack.pop()
        order.pop()
      } else {
        subStack.push(container.pop())
      }
    }
  }

  while (subStack.length) {
    if (subStack[subStack.length - 1] === order[order.length - 1]) {
      count++
      subStack.pop()
      order.pop()
    } else return count
  }

  return count
}

/*
컨테이너 
순서 1 2 5
보조 1 2 5
트럭 4 3 
*/
