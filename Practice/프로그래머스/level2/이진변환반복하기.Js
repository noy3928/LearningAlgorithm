function solution(s) {
  let totalRemovedZero = 0
  let convertCount = 0

  const removeZeroLength = str => {
    const removedZero = str.replaceAll(/0/g, "")
    const length = removedZero.length
    return length
  }

  const getZeroCount = str => {
    const count = str.match(/0/g)?.length
    if (!count) return 0
    return count
  }

  const getBinary = num => {
    const binary = num.toString(2)
    return binary
  }

  while (s !== "1") {
    totalRemovedZero += getZeroCount(s)
    s = getBinary(removeZeroLength(s))
    convertCount++
  }

  const answer = [convertCount, totalRemovedZero]
  return answer
}
