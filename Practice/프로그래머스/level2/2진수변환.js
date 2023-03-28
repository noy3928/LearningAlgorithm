const compareBit = (bit1, bit2) => {
  let count = 0

  if (bit1.length !== bit2.length) bit1 = "0" + bit1

  for (let i = bit2.length - 1; i >= 0; i--) {
    if (bit1[i] !== bit2[i]) count++
  }

  return count
}

const getSmallNum = num => {
  const criteria = num.toString(2)

  while (true) {
    // O(n^2)
    num++
    if (compareBit(criteria, num.toString(2)) <= 2) return num // O(n^3)
  }
}

function solution(numbers) {
  var answer = []

  for (const num of numbers) {
    // O(n)
    if (num % 2 == 0) answer.push(num + 1)
    else answer.push(getSmallNum(num))
  }

  return answer
}

/*
x에 대한 함수 f(x)를 다음과 같이 정의한다. 
x보다 크고 x와 비트가 1-2개 다른 수들 중에서 제일 작은 수 
f(2) = 3이다. 다음표와 같이 2보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 3이다. 
*/

/*
1.특정 숫자가 들어오면 해당 숫자를 이진수로 변환한다. 기준점이 되는 숫자이다. 
2.해당 숫자로부터 +1 씩 하면서, 이진수로 변환한다. 
3.그리고 기준점 숫자와 비교해서 비트가 다른 지점이 2 이하이면, 해당 숫자를 answer에 넣는다. 
*/
