String.prototype.toJadenCase = function () {
  const result = this.split(" ").reduce((str, currentWord, idx, original) => {
    const firstChar = currentWord[0]
    const restChar = currentWord.slice(1)
    if (idx == original.length) return str + firstChar.toUpperCase() + restChar
    return str + firstChar.toUpperCase() + restChar + " "
  }, "")
  return result
}

// -----------

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}

// ----------------------------------------------------------------

String.prototype.toJadenCase = function () {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return this.split(" ").map(capitalizeFirstLetter).join(" ")
}
