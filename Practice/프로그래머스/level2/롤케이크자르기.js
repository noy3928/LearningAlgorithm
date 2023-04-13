const checkSameTopping = (topping, i) => {
  const aSet =
    i == 0 ? new Set(topping.slice(0, i + 1)) : new Set(topping.slice(0, i))
  const bSet = new Set(topping.slice(i))
  return aSet.size == bSet.size
}

function solution(topping) {
  let count = 0

  for (let i = 0; i < topping.length; i++) {
    if (checkSameTopping(topping, i)) count++
  }

  return count
}

// 위 풀이방식은 O(N^2)인 풀이다. 이렇게 풀면 틀린 풀이가 된다.
function solution(topping) {
  let n = topping.length
  let uniqueToppings = new Set(topping)
  let totalUniqueToppings = uniqueToppings.size

  let leftToppings = new Map()
  let leftUniqueToppings = 0
  let rightToppings = new Map()
  let rightUniqueToppings = 0

  let fairSplits = 0

  for (let i = 0; i < n; i++) {
    if (rightToppings.has(topping[i])) {
      rightToppings.set(topping[i], rightToppings.get(topping[i]) + 1)
    } else {
      rightToppings.set(topping[i], 1)
      rightUniqueToppings++
    }
  }

  for (let i = 0; i < n - 1; i++) {
    if (leftToppings.has(topping[i])) {
      leftToppings.set(topping[i], leftToppings.get(topping[i]) + 1)
    } else {
      leftToppings.set(topping[i], 1)
      leftUniqueToppings++
    }

    rightToppings.set(topping[i], rightToppings.get(topping[i]) - 1)
    if (rightToppings.get(topping[i]) === 0) {
      rightUniqueToppings--
    }

    if (leftUniqueToppings === rightUniqueToppings) {
      fairSplits++
    }
  }

  return fairSplits
}

// ---------------------------

function solution(topping) {
  const n = topping.length
  const leftCount = new Map() // 1
  const rightCount = new Map() // 2
  let fairSplits = 0

  topping.forEach(t => rightCount.set(t, (rightCount.get(t) || 0) + 1))

  for (let i = 0; i < n - 1; i++) {
    leftCount.set(topping[i], (leftCount.get(topping[i]) || 0) + 1)
    rightCount.set(topping[i], rightCount.get(topping[i]) - 1)

    if (rightCount.get(topping[i]) === 0) {
      rightCount.delete(topping[i])
    }

    if (leftCount.size === rightCount.size) {
      fairSplits++
    }
  }

  return fairSplits
}

// 1 2 3 4 5 6 7
// 1   2 3 4 5 6 7
// 1 2    3 4 5 6 7
