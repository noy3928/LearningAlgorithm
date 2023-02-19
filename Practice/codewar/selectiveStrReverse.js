function spliceByNum(array, length) {
  const result = []
  while (array.length > 0) {
    result.push(array.splice(0, length))
  }
  return result
}

function selReverse(array, length) {
  const splicedArr = spliceByNum(array, length)
  return splicedArr.reduce((acc, cur) => {
    return acc.concat(cur.reverse())
  }, [])
}
