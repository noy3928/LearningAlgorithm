function solution(n) {
  let compareNum = n + 1

  const getBinary = n => n.toString(2)
  const getOneLength = n => n.match(/1/g)?.length
  const isSame = (pre, next) => pre === next
  const nLength = getOneLength(getBinary(n))
  let cLength = getOneLength(getBinary(compareNum))

  while (!isSame(nLength, cLength)) {
    compareNum++
    cLength = getOneLength(getBinary(compareNum))
  }

  return compareNum
}
