/*다음은 비슷한 유형의 알고리즘 문제입니다. 이 문제도 스택 자료구조를 이용하여 해결할 수 있습니다.

문제: 괄호 짝 맞추기

주어진 문자열 s는 여는 괄호 '(', '[', '{' 와 닫는 괄호 ')', ']', '}'로 이루어져 있습니다. s의 괄호 짝이 모두 맞다면 true를 반환하고, 그렇지 않다면 false를 반환하는 함수 isValid(s)를 구현하세요.

괄호 짝이 맞아야 하는 조건은 다음과 같습니다.

(와 )의 짝
[와 ]의 짝
{와 }의 짝
*/

function solution(str) {}

test("()[]{}", () => {
  expect(solution("()[]{}")).toBe(true)
})

test("(]", () => {
  expect(solution("(]")).toBe(false)
})

test("([)]", () => {
  expect(solution("([)]")).toBe(false)
})

test("{[]}()", () => {
  expect(solution("{[]}()")).toBe(true)
})
