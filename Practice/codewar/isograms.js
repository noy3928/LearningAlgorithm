function isIsogram(str) {
  const setted = new Set()
  for (const char of str) {
    setted.add(char.toLowerCase())
  }
  return setted.size == str.length
}

// ----------------------------------------------------------------

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length
}
