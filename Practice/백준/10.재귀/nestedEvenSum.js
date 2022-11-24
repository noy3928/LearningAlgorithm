const isObject = obj => {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

function nestedEvenSum(obj) {
  let sum = 0
  for (const x of Object.values(obj)) {
    if (Number.isInteger(x) && x % 2 === 0) sum += x
    else if (isObject(x)) sum += nestedEvenSum(x)
  }
  return sum
}
