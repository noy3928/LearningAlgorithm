function chunkWords(arr, n) {
  const result = []

  for (let i = 0; i < arr.length; i += n) {
    const chunk = arr.slice(i, i + n)
    result.push(chunk)
  }

  return result
}

function solution(n, words) {
  const settedWords = new Set()
  const chunkedWords = chunkWords(words, n)
  let lastChar = ""

  function checkWord(lastChar, word) {
    return word.length == 1 || lastChar !== word[0] || settedWords.has(word)
  }

  for (let i = 0; i < chunkedWords.length; i++) {
    const chunk = chunkedWords[i]

    if (i == 0) lastChar = chunk[0][0]

    for (let j = 0; j < n; j++) {
      const currentWord = chunk[j]
      if (checkWord(lastChar, currentWord)) return [j + 1, i + 1]

      lastChar = currentWord[currentWord.length - 1]
      settedWords.add(currentWord)
    }
  }

  return [0, 0]
}

/*
1부터 n까지. n명의 사람이 끝말잇기. 
마지막 문자로 시작하는 단어. 
주의 : 
- 한글자면 안된다. 
- 이전에 등장한 단어는 안된다. Set
가장 먼저 탈락하는 사람의 번호와 그 사람이 몇 번째 차례에 탈락하는지. 

n명의 사람 수 만큼, 단어의 배열을 짤라서 배열에 넣는다. 
[[hello, one], [even, never], [now, world]]

- 탈락자를 체크할 방법을 찾는다. 
*/

/*
계획 : 
1.주어진 문자열들을 n만큼 짤라서 배열에 넣는다. chunkedWords [[hello, one], [even, never], [now, world]]
2.chunkedWords를 순회한다.
    2.1.각 chunks에 대해 순회하는 중이므로, chunk안에서 한번 더 각 사람의 순서대로 순회한다. lastChar를 만든다.
        2.1.1.각 요소를 체크한다.
            2.1.1.1. 앞 사람이 말한 단어의 마지막 문자와 같은지 체크한다. 
            2.1.1.2. 이전에 등장했던 단어인지 체크한다. 
            2.1.1.3. 한 글자인지 체크한다. 
        2.1.2.체크해서 문제가 없으면, 계속 순회한다. 
        2.1.3.문제가 있으면, 몇 번째 순회중인지와, 몇 번째 사람이 순회중이었는지를 배열에 담아 반환한다. 
3.위에서 반환된 적이 없으면 [0,0]을 반환한다. 
*/
