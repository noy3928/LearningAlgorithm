function solution(sequence, k) {
  var answer = []
  let sum = 0
  let lt = 0
  const map = new Map()

  for (let rt = 0; rt < sequence.length; rt++) {
    sum += sequence[rt]
    if (sum == k) map.set([rt - lt, lt], [lt, rt])

    while (sum > k) {
      sum -= sequence[lt++]
      if (sum == k) map.set([rt - lt, lt], [lt, rt])
    }
  }

  let tmpArr = []

  for (const [key, value] of map) {
    tmpArr.push(key)
  }

  tmpArr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    else return a[0] - b[0]
  })

  answer = map.get(tmpArr[0])

  return answer
}

/*
계획 : 
1. 연속 부분 수열의 합이 K인 수를 투포인터로 찾는다. 
2. 해당 값들을 Map에 저장한다. {[인덱스 갯수, 시작인덱스] : [인덱스 시작, 인덱스 끝]}
3. Map에 저장된 값이 1개 초과일 경우, key들을 배열로 뽑아낸다. 
4. key들을 인덱스 갯수를 기준으로 정렬한 다음, 시작 인덱스를 기준으로 다시 정렬한다. 
5. 맨 앞에 있는 값을 Map에서 꺼내서 반환한다. 

연속 부분 수열의 합을 찾으면서, 
그 인덱스의 갯수도 구하고, 인덱스의 시작과 끝점도 같이 구해야한다. 
아, 인덱스의 갯수는 [rt - lt] 이고, 인덱스의 시작과 끝점도 [lt, rt]이겠다. 
어렵게 생각하지 말자. 

비내림차순. 정렬 수열. 
부분 수열의 합은 k. 
합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾는다. 
합이 K인 부분 수열을 찾는데, 길이가 짧고, 가장 인덱스가 앞쪽에 있는 k부분 수열을 찾는다. 

부분 수열의 합이 7인지 찾고, 
그럼 우선 주어진 수열중에서, 부분수열의 합이 k개인지를 먼저 확인해야한다. 
그것을 위해서는 우선 전부다 순회해야하는데, 
해당 부분 수열의 값을 Map에다가 저장하면 좋을 것 같다. 
예를들어, [3,4] 라는 값이 있다면, 이것의 인덱스는 [2,3]이다. 
[인덱스의 갯수, 시작인덱스] : [2,3] => 이렇게 Key : Value로 저장. 
이후에 key를 다 뽑아낸 다음, 
인덱스 갯수를 기준으로 먼저 정렬하고, 그 다음 시작 인덱스를 기준으로 정렬해서, 
맨 앞에 있는 key로 Map에서 값을 꺼낸다. 
그 값을 반환. 


이런식으로 저장을 하는 것이다. 
이제 여기서 여러개라면, 
인덱스의 갯수가 짧은 것을 기준으로 먼저 정렬하고, 
그 다음 시작 인덱스를 기준으로 정렬한다. 
*/
