const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString()

const solution = str => {
  const Alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  )
  const result = Alphabet.map(char => {
    return str.indexOf(char)
  })
  return result.join(" ")
}

console.log(solution(input))
