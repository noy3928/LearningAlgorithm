function rot13(text) {
  let result = ""
  for (let char of text) {
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt()
      if (code >= 65 && code <= 90) {
        result += String.fromCharCode(((code - 65 + 13) % 26) + 65)
      } else if (code >= 97 && code <= 122) {
        result += String.fromCharCode(((code - 97 + 13) % 26) + 97)
      }
    } else {
      result += char
    }
  }
  return result
}
