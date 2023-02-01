function removeZero(arr, idx, removedZeroCount) {
  return arr.splice(idx - removedZeroCount, 1)
}

function moveZeros(arr) {
  const newArr = arr.slice()
  let removedZeroCount = 0

  arr.forEach((el, idx) => {
    if (el === 0) {
      removeZero(newArr, idx, removedZeroCount)
      removedZeroCount++
    }
  })

  Array.from({ length: removedZeroCount }, () => 0).forEach(el =>
    newArr.push(el)
  )

  return newArr
}

//----------------------------------------------------------------

var moveZeros = arr => {
  return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
}
