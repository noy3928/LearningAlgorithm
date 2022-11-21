function someRecursive(arr, someLogic) {
  if (arr.length === 0) return false
  if (someLogic(arr[0])) return true

  arr.shift()
  return someRecursive(arr, someLogic)
}
