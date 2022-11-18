function reverseString(str) {
  if (str === "") return ""
  else return reverseString(str.substr(1)) + str.charAt(0)
}

function solution(food) {
  var answer = ""

  for (let i = 1; i < food.length; i++) {
    const num = Math.floor(food[i] / 2)

    for (let j = 0; j < num; j++) {
      answer += i
    }
  }
  const reversedAnswer = reverseString(answer)
  answer += "0"
  answer += reversedAnswer

  return answer
}
