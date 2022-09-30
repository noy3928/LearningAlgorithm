const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let N = Number(require("fs").readFileSync(filePath).toString())

const solution = n => {
  let m = 1
  let tmp = 1
  while (tmp < n) {
    tmp += 6 * m
    m++
  }
  return m
}

console.log(solution(N))
