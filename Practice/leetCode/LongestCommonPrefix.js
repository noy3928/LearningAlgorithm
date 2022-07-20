let longestCommonPrefix = function (strs) {
  let strings = strs.map(str => [...str])
  let isSearching = true
  let prefix = [""]

  while (isSearching) {
    let tmpPrefix = null
    for (let i = 0; i < strings.length; i++) {
      if (!tmpPrefix) tmpPrefix = strings[i].shift()
      else {
        if (tmpPrefix !== strings[i].shift()) isSearching = false
      }
    }
    if (isSearching) prefix.push(tmpPrefix)
  }
  const result = prefix.reduce((acc, cur) => {
    return acc + cur
  }, "")
  console.log(result)
  // prefix = prefix.join("")
  // console.log(prefix)
  return result
}
