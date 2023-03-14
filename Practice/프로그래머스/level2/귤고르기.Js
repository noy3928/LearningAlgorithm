const getMappedTangerine = tangerine => {
  const mappedTangerine = new Map()
  const result = []
  tangerine.forEach(item => {
    if (mappedTangerine.has(item))
      mappedTangerine.set(item, mappedTangerine.get(item) + 1)
    else mappedTangerine.set(item, 1)
  })

  for (const [key, value] of mappedTangerine) {
    result.push([key, value])
  }

  result.sort((a, b) => a[1] - b[1])

  return result
}

function solution(k, tangerine) {
  var answer = 0
  const mappedTangerine = getMappedTangerine(tangerine)

  while (k > 0) {
    const pickedTangerine = mappedTangerine.pop()[1]
    k -= pickedTangerine
    answer++
  }

  return answer
}

/*
k개를 골라서 상자 하나에 담아 판매한다. 
수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다. 귤을 크기별로 분류했을 때 다른 종류의 수를 최소화 하고 싶다. 

-> 다른 종류를 최소화한다. 
-> 그러면 최대한 반복되는 귤을 상자에 담는 방식으로 한다는 것이다. 
*/

/*
1. 각 귤 별로 몇개 씩 존재하는지 매핑된 배열 자료구조를 만든다. 
  - 이 map는 숫자별로 몇 개씩 반복되어있는지 알 수 있다. 
  - [2,3] 이면 2크기의 귤이 3개 담겨있다는 뜻이다.
  - 배열로 한 이유는 귤의 갯수별로 정렬을 진행한 다음, 순서대로 순회하며 뽑아내기 위해서다. 
  
2. 매핑된 배열에서 value가 큰 숫자를 기준으로 정렬한다. 

3. 정렬된 숫자 중 가장 큰 숫자를 기준으로 한 개씩 뽑는다. 

4. 가장 큰 숫자의 크기만큼 한 상자에 담으려했단 귤의 갯수 k에서 제거한다. 
  - k에서 제거할 때, count을 +1 한다. 
  
5. k의 갯수가 0 보다 작아지면, while문을 멈춘다. 

6. count를 return한다. 

*/
