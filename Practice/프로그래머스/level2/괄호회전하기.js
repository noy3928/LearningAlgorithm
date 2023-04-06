const checkBracket = str => {
  const stack = []

  for (const char of str) {
    if (char == "{" || char == "[" || char == "(") stack.push(char)

    if (char == "}") {
      if (stack[stack.length - 1] == "{") stack.pop()
      else stack.push(char)
    }

    if (char == "]") {
      if (stack[stack.length - 1] == "[") stack.pop()
      else stack.push(char)
    }

    if (char == ")") {
      if (stack[stack.length - 1] == "(") stack.pop()
      else stack.push(char)
    }
  }

  return stack.length == 0
}

const rotateStr = str => {
  const firstChar = str.substring(0, 1)
  const rest = str.slice(1)
  return rest + firstChar
}

function solution(s) {
  var answer = 0

  for (let i = 0; i < s.length; i++) {
    if (checkBracket(s)) answer++
    s = rotateStr(s)
  }

  return answer
}

/*
1.문자열 s를 크기만큼 순회한다. 
    1.1.순회하면서 각각의 문자열이 올바른 괄호인지 확인한다. 올바른 괄호라면 count++한다. 
        1.1.1. 올바른괄호인지 확인하는 로직: 해당 문자열을 순회하면서 스택에 넣는다. 스택에 넣을 때, 맨 마지막 문자와 들어오는 문자가 쌍이 맞는지 확인하며 스택에 넣는다. 쌍이 맞다면 스택에서 제거하고, 쌍이 다르다면 넣는다. 마지막에 스택의 갯수가 남아있다면 올바른 괄호가 아닌 것.
    1.2.올바른괄호인지 확인이 되었다면, 첫번째 문자를 잘라 맨 뒤에 붙인다. 
2.count를 return 한다. 
*/

/*
회전. 
올바른 괄호. 
스택? 
회전은 앞에걸 잘라서 뒤에 붙이면 됨.
문자열 전체를 한번씩 순회하면서 뒤로 보내기. 다 보내면서 해당 문자열이 올바른 괄호인지 판단하기. 
그러면 2가지 로직이 들어가야함. 올바른 괄호인지 판단하는 로직과, 순회하는 로직. 
*/
