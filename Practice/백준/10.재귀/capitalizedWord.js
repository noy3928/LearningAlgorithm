const capitalizeWords = arr => {
  const newArr = []
  if (arr.length === 0) return []

  const capitalized = arr[0].toUpperCase()
  newArr.push(capitalized)
  arr.shift()
  return newArr.concat(capitalizeWords(arr))
}
