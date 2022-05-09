function solution(n) {
  return (answer = Array.from({ length: n }, (v, i) => {
    if (i % 2 == 0) return "수"
    else return "박"
  }).join(""))
}
