function pigIt(str) {
  return str
    .split(" ")
    .map(word => {
      const firstChar = word[0]
      if (/^[a-zA-Z]+$/.test(firstChar)) {
        return word.slice(1) + firstChar + "ay"
      } else {
        return word
      }
    })
    .join(" ")
}

/*
1. split the string into an array of words
2. map over the array of words
3. for each word, check if the first character is a letter
4. if it is, move the first character to the end of the word and add "ay"
5. if it is not, leave the word as is
6. join the array of words back into a string
7. return the string
*/

function pigIt(str) {
  return str.replace(/\w+/g, w => {
    return w.slice(1) + w[0] + "ay"
  })
}

/*
1. use regex to match all words in the string
2. for each word, move the first character to the end of the word and add "ay"
3. return the string
*/
