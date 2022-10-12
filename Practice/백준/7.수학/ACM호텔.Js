const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")
input.shift()
const array = input.map(v => v.split(" ").map(Number))

const getCustomerHeight = (N, apartHeight) => {
  if (N % apartHeight === 0) return apartHeight
  return N % apartHeight
}

const getHo = (N, apartHeight) => {
  const Ho = Math.ceil(N / apartHeight)
  if (Ho < 10) return `0${Ho}`
  else return Ho
}

const solution = array => {
  array.forEach(each => {
    const apartHeight = each[0]
    const wholeHo = each[1]
    const N = each[2]
    console.log(`${getCustomerHeight(N, apartHeight)}${getHo(N, apartHeight)}`)
  })
}

solution(array)
