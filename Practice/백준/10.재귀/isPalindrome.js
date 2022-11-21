function isPalindrome(str) {
  const isSame = str[0] === str[str.length - 1]
  if (!isSame) return false
  else if (str.length <= 1) return true

  const newStr = str.slice(1).slice(0, -1)
  return isPalindrome(newStr)
}
