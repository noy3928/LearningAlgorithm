function solution(elements) {
  const result = new Set()

  for (let length = 1; length <= elements.length; length++) {
    const tempArr = []

    for (let i = 0; i < elements.length; i++) {
      let sum = 0

      for (let j = 0; j < length; j++) {
        if (i + j >= elements.length) sum += elements[i + j - elements.length]
        else sum += elements[i + j]
      }

      tempArr.push(sum)
    }
    tempArr.forEach(el => result.add(el))
  }

  return result.size
}
/*
원형 수열의 연속하는 부분 수열의 합. 
이것으로 만들 수 있는 수가 모두 몇 가지인지 알아보자. 
연속하는 부분 수열도 일반적인 수열보다 많아진다. 

원형큐를 어떻게 다룰 것인가? 

연속 부분 수열 합. 
중복되는 값을 없애야하니 set으로 저장. 

핵심은, 마지막, 다음이다. 순회가 끝났을 때, 어떻게 마무리할 것인지. 
문제를 순서대로 풀어보자. 
*/

/*
계획 : 
1. 모든 수열을 저장할 result = new Set 자료구조를 만든다. 
2. elements의 길이만큼 순회한다. for(let length = 0; length < elements.length; length++) O(n)
    2.1.각각의 길이만큼 요소를 더하는 순회를 반복한다. 각각의 길이별로 더하게 되는 값을 저장하는 tempArr를 만든다.  
    2.2. elements를 한번 더 순회한다. 순회하면서 해당 순회요소로부터 + length만큼 더한다. (i = 0) O(n^2)
        2.2.1 i부터 length만큼 더하기 위해서, length만큼 순회한다. sum이라는 변수를 선언한다. (length가 3일경우) O(n^3)
            2.2.1.1. sum += arr[i + 1]
            2.2.1.1. sum += arr[i + 2]
            2.2.1.1. sum += arr[i + 3]
        2.2.2 sum을 tempArr에 넣는다. 
    2.3. 순회가 끝나면 result.add(...tempArr)를 한다. 
3.result를 반환한다. return result.size
*/
