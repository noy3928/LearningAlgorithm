function removeElementAtIndex(arr, index) {
  // A B D
  const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)]

  return newArr
}

function explore(order, k) {
  let count = 0
  for (const [required, consumed] of order) {
    if (required <= k) {
      k -= consumed
      count++
    }
  }
  return count
}
/*
  1.현재 피로도로 던전에 입장가능한지 확인. 
  2.입장가능하다면 x[1]을 가지고 k - x[1] 하기
  3.count++
  */

function solution(k, dungeons) {
  let answer = Number.MIN_SAFE_INTEGER

  const DFS = (arr, order, level) => {
    if (level === dungeons.length) {
      const tempAnswer = explore(order, k)
      return (answer = Math.max(answer, tempAnswer))
    }

    for (let i = 0; i < arr.length; i++) {
      const newArr = removeElementAtIndex(arr, i)
      const newOrder = [...order, arr[i]]
      DFS(newArr, newOrder, level + 1)
    }
  }

  DFS(dungeons, [], 0)

  return answer
}

/*
  피로도 시스템. 일정 피로도. 던전 탐험. 최소 필요 피로도. 소모 피로도. 
  현재 남아있는 피로도 체크와, 소모되는 피로도. 
  최대한 많은 던전을 탐험할 수 있는 방법으로 던전을 탐험해야한다. 
  가능한 모든 경로를 탐색한다. 그렇게해서, 가장 많은 던전을 탐색할 수 있는 방법을 찾는다. 
  어떻게할 수 있을까? 
  
  주어진 배열은 순서대로 있다. 완전탐색. [A, B, C]가 있다면, 이 ABC가 나열될 수 있는 모든 경우의 수를 탐색해야한다. 
  DFS로 해결해보자. 
  */

/*
  
  1.주어진 배열 dungeons를 순회하는 DFS를 만든다. 
  2.DFS에서는 배열, 레벨, 순서를 인자로 받는다. 
  3.레벨이 dungeons.length가 되었을 때, 순서에 있는 모든 값을 계산한다. 계산해서 나온 값 중에서 Max인 값을 계속 정답으로 남긴다. 
  */
