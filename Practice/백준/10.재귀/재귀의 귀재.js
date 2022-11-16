let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()

let result = ""

const recursion = (str, L, R) => {
  if (L >= R) return [1, L + 1]
  else if (str[L] != str[R]) return [0, L + 1]
  else return recursion(str, L + 1, R - 1)
}

const isPalindrome = str => {
  return recursion(str, 0, str.length - 1)
}

input.forEach(str => {
  const val = isPalindrome(str)
  result += `${val[0]} ${val[1]}\n`
})

console.log(result)
