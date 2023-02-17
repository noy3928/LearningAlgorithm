const { it } = require("node:test")

// 실패한 코드 : 시간초과
function solution1(numbers) {
  var answer = []
  let temp = null
  let isExist = false

  for (let i = 0; i < numbers.length; i++) {
    temp = numbers[i]
    isExist = false

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] > temp) {
        answer.push(numbers[j])
        isExist = true
        break
      }
    }

    if (!isExist) answer.push(-1)
  }

  return answer
}

function solution2(numbers) {
  const n = numbers.length
  const result = new Array(n).fill(-1)

  const stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const index = stack.pop()
      result[index] = numbers[i]
    }
    stack.push(i)
  }

  return result
}

/*
i = 0 
stack = [0] 

i = 1
stack = [0] 
numbers[0] < numbers[1] => true 
index = 0 
result[0] = numbers[1] => result[0] = 3
stack = [1] 

i = 2
stack = [1]
numbers[1] < numbers[2] => false
stack = [1, 2]

i = 3 
stack = [1,2]
numbers[2] < numbers[3] => true 
index = 2 
result[2] = numbers[3] => result[2]= 5
numbers[1] < numbers[3] => true
index = 1
result[1] = numbers[3] => reulst[3] = 5
stack = [3]

result = [3, 5, 5, -1]
*/

function twoPointerSolution(numbers) {
  const n = numbers.length
  const result = new Array(n).fill(-1) // 결과를 저장할 배열을 -1로 초기화합니다.

  let left = 0,
    right = 1
  while (left < n) {
    if (right === n) {
      // right가 더 이상 증가할 수 없는 경우, left를 증가시킵니다.
      left++
      right = left + 1
    } else if (numbers[left] < numbers[right]) {
      // left보다 큰 수를 찾은 경우, 뒷 큰 수를 저장합니다.
      result[left] = numbers[right]
      left++
      right = left + 1
    } else {
      // left보다 작은 수를 찾은 경우, right를 증가시킵니다.
      right++
    }
  }

  return result
}

/*
result = [-1, -1, -1, -1]
left = 0, right = 1

left(0) < 4 => true 
if(right === n) => 1 === 4 => false 
if(numbers[0] < numbers[1]) => 2 < 3 => true 
result[0] = numbers[1] => result[0] = 3 
left++ => left = 1
right = left + 1 => right = 2


left(1) < 4 => true
if(right === n) => 2 === 4 => false
if(numbers[1] < numbers[2]) => 3 < 3 => false
else right++ => right = 3


left(1) < 4 => true
if(right === n) => 3 === 4 => false
if(numbers[1] < numbers[3]) => 3 < 5 => true
result[2] = numbers[3] => result[2] = 5
left++ => left = 2
right = left + 1 => right = 4

left(2) < 4 => true
if(right === n) => 4 === 4 => true
left++ => left = 3
right = left + 1 => right = 4
*/

test("solution1", () => {
  expect(solution1([2, 3, 3, 5])).toEqual([3, 5, 5, -1])
})

test("solution2", () => {
  expect(solution2([2, 3, 3, 5])).toEqual([3, 5, 5, -1])
})

test("twoPointerSolution", () => {
  expect(twoPointerSolution([2, 3, 3, 5])).toEqual([3, 5, 5, -1])
})
