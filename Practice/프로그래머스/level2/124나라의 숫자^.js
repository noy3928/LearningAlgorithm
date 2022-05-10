function solution(n) {
  const number124 = [4, 1, 2]
  let answer = ""

  while (n) {
    answer = number124[n % 3] + answer
    if (n % 3 === 0) n = n / 3 - 1
    else n = Math.floor(n / 3)
  }

  return answer
}

//https://yabmoons.tistory.com/692
