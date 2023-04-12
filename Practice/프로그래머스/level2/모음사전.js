const removeElementAtIndex = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
]

function solution(word) {
  let answer = 0
  const cases = []

  const DFS = (words, wordCase, level) => {
    if (level === 5) return

    for (let i = 0; i < words.length; i++) {
      const newWordCase = wordCase + words[i]
      cases.push(newWordCase)
      DFS(words, newWordCase, level + 1)
    }
  }

  DFS(["A", "E", "I", "O", "U"], "", 0)

  return cases.sort().findIndex(element => element === word) + 1
}

/*
1.DFS로 문자열 순회 
2.모든 경우의 수를 탐색하며, 모든 경우의 수를 배열에 넣기
3.나온 결과 배열을 sort하기 
4.결과 배열에서 target의 Index를 구하기 
*/

/*
A E I O U 
위 배열을 순서대로 나열하는 경우의 수. 

A AA AAA AAAA AAAAA 
AAAAE AAAAI AAAAO AAAAU 
AAAE AAAI AAO AAU 

그냥 만들 수 있는 모든 경우의 수를 나열하고, 
그 다음에, 다시 정렬하기 
*/
