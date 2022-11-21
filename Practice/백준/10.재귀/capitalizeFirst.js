function capitalizeFirst(arr) {
  const newArr = []
  if (arr.length === 0) return []

  const str = arr[0]
  const capitalizedWord = str.charAt(0).toUpperCase() + str.slice(1)
  newArr.push(capitalizedWord)
  arr.shift()

  return newArr.concat(capitalizeFirst(arr))
}
