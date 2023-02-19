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

/*
1. 먼저 주어진 배열을 length 만큼 잘라서 배열로 만든다. 
2. 그 배열을 순회하면서 각 배열을 reverse한다.
3. 그리고 그 배열을 하나의 배열로 만든다. 
*/

// ---------------

function selReverse(array, length) {
  if (length === 0) {
    return array
  }
  var result = []
  for (var i = 0; i < array.length; i += length) {
    var chunk = array.slice(i, i + length)
    if (chunk.length < length) {
      result = result.concat(chunk.reverse())
    } else {
      result = result.concat(chunk.reverse())
    }
  }
  return result
}
