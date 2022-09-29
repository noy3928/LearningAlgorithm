const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")
input.shift()

String.prototype.forEach = Array.prototype.forEach

const checkGroup = str => {
  let result = true
  let current = str[0]
  const record = new Set()

  str.forEach((char, i) => {
    console.log(i)
    if (current == char) {
      record.add(char)
    } else {
      if (record.has(char)) return (result = false)
      else {
        record.add(char)
        current = char
      }
    }
  })

  return result
}

checkGroup("abcabc")

const solution = strs => {
  let count = 0
  strs.forEach(str => {
    if (checkGroup(str)) count++
  })
  return count
}

// console.log(solution(input))

/*
1. record하는 맵을 만든다. 
2. 첫 문자는 record에 넣는다. 
3. 바로 다음 문자가 첫 문자와 같으면 패스. 
4. 바로 다음 문자가 첫 문자가 다르면 
  4.1 다른 문자를 record에 넣는다. 
  4.2 current 문자를 새로운 문자로 바꾼다. 
5. 3번부터 4번까지 반복하다가, record에 이미 존재하는 문자를 만난 경우 false
  5.1 그렇지 않은 경우 true를 반환한다. 
6. true인 것들의 갯수를 구한다.
*/
