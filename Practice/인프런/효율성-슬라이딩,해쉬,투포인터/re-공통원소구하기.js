function solution(arr1, arr2) {
  let answer = []
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  const settedArr2 = new Set([...arr2])

  for (const x of arr1) {
    if (settedArr2.has(x)) answer.push(x)
  }

  return answer
}

/*
function solution(arr1, arr2) {
  let answer = []
  arr1.sort()
  arr2.sort()
  let p1 = (p2 = 0)
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++])
      p2++
    } else if (arr1[p1] < arr2[p2]) p1++
    else p2++
  }
  return answer
}

정답 풀이에 대한 해설 : 
두 배열에 대한 투 포인터를 마련하는 것이 이 문제의 핵심이다. 
그리고 그 투 포인터를 배열을 다 돌떄까지 증가시킨다. 
만약에 p1이 더 작다면, p1을 증가시키고, p2가 더 작다면 p2를 증가시킨다. 

만약 이렇게 투 포인터를 이용해서 문제를 풀지 않는다면, 
배열 안에 특정 요소가 존재하는지 확인하는 방법을 사용하거나, 
내가 위에서 푼 것처럼 set을 이용해서 풀 수 있을 것이다. 

하지만 배열 안에 특정 요소가 존재하는지 확인하는 방법은 시간 복잡도가 O(n^2)이다.
때문에 해당 방법은 사용하지 않는 것이 좋다. 

set을 이용해서 풀면, 시간 복잡도는 O(n)이다.
그렇기 때문에 이 풀이도 나쁘지 않은 풀이라고 할 수 있을 것 같다. 

하지만, 이 문제가 의도한 바는 투 포인터를 활용할 수 있느냐 하는 문제이다. 
*/
