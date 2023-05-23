function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false
  }
  return true
}
function solution(s, t) {
  let answer = 0
  let tH = new Map()
  let sH = new Map()
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1)
    else tH.set(x, 1)
  }
  let len = t.length - 1
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1)
    else sH.set(s[i], 1)
  }
  let lt = 0
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1)
    else sH.set(s[rt], 1)
    if (compareMaps(sH, tH)) answer++
    sH.set(s[lt], sH.get(s[lt]) - 1)
    if (sH.get(s[lt]) === 0) sH.delete(s[lt])
    lt++
  }
  return answer
}

let a = "bacaAacba"
let b = "abc"
console.log(solution(a, b))

//--------------------------------------

let fs = require("fs")
let input = fs.readFileSync("example.txt").toString().split(" ")
const [S, T] = input

const compare = (hashT, hashS) => {
  for (const [key, value] of hashS) {
    if (!hashT.has(key)) return false
    if (hashT.get(key) !== value) return false
  }
  return true
}

const solution = (S, T) => {
  const N = T.length
  const hashT = new Map()
  const hashS = new Map()
  let answer = 0

  ;[...T].forEach(char => {
    if (hashT.has(char)) return hashT.set(char, hashT.get(char) + 1)
    else return hashT.set(char, 1)
  })

  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < N + i; j++) {
      if (hashS.has(S[j])) hashS.set(S[j], hashS.get(S[j]) + 1)
      else hashS.set(S[j], 1)
    }

    if (compare(hashT, hashS)) answer++
    hashS.clear()
  }
  console.log(answer)
}

solution(S, T)

/**
 * 1. T에 대한 해쉬 테이블을 구한다.
 * 2. T의 문자열 갯수를 구한다.
 * 3. S를 순회하면서, T의 문자열 갯수만큼 해쉬 테이블을 구한다.
 * 4. 두 해쉬 테이블을 비교하고, 두 해쉬 테이블이 같으면 answer에 1 ++ 한다.
 * 5. 이렇게 순회하면 끝!
 * 시간 복잡도는 : O(N)
 */

//-------------------------

function isAnagram(sH, S) {
  const map = new Map(sH.entries())
  for (let x of S) {
    if (!map.has(x) || map.get(x) == 0) return false
    map.set(x, map.get(x) - 1)
  }

  return true
}

function solution(T, S) {
  let answer = 0
  const windowMap = new Map()

  for (let i = 0; i < S.length; i++) {
    if (windowMap.has(T[i])) windowMap.set(T[i], windowMap.get(T[i]) + 1)
    else windowMap.set(T[i], 1)
  }

  if (isAnagram(windowMap, S)) answer++

  for (let i = S.length; i < T.length; i++) {
    if (windowMap.has(T[i])) windowMap.set(T[i], windowMap.get(T[i]) + 1)
    else windowMap.set(T[i], 1)

    windowMap.set(T[i - S.length], windowMap.get(T[i - S.length]) - 1)

    if (isAnagram(windowMap, S)) answer++
  }

  return answer
}

console.log(solution("bacaAacba", "abc"))
