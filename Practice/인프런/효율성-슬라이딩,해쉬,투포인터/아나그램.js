function solution(str1, str2) {
  let answer = "YES"
  let sH = new Map()
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1)
    else sH.set(x, 1)
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO"
    sH.set(x, sH.get(x) - 1)
  }
  return answer
}

let a = "AbaAeCe"
let b = "baeeACA"
console.log(solution(a, b))

//----------------------------------------------------------------

/*
1.각 문자열의 갯수를 구한 값을 가지고 있어야한다.(객체)
2.두 개의 객체가 주어지면, 이 두개의 객체가 같은지 비교해야 한다. 

+대소문자는 어떻게 해야하는 건가? 
*/

function solution(str1, str2) {
  let answer = "YES"
  let arr1 = new Map()
  let arr2 = new Map()

  for (const x of str1) {
    if (arr1.has(x)) {
      let item = arr1.get(x) + 1
      arr1.set(x, item)
    } else {
      arr1.set(x, 1)
    }
  }

  for (const x of str2) {
    if (arr2.has(x)) {
      let item = arr2.get(x) + 1
      arr2.set(x, item)
    } else {
      arr2.set(x, 1)
    }
  }

  for (const [key, value] of arr1) {
    if (arr2.has(key)) {
      const arr2Value = arr2.get(key)
      console.log(arr2Value, value)
      if (arr2Value !== value) {
        answer = "NO"
      }
    } else {
      answer = "NO"
    }
  }

  return answer
}

let c = "abaCC"
let d = "Caaab"
console.log(solution(c, d))

function solution(str1, str2) {
  const map1 = new Map()
  const map2 = new Map()

  for (const v of str1) {
    if (map1.has(v)) map1.set(v, map1.get(v) + 1)
    else map1.set(v, 1)
  }

  for (const v of str2) {
    if (map2.has(v)) map2.set(v, map2.get(v) + 1)
    else map2.set(v, 1)
  }

  for (const [key, value] of map1) {
    if (map1.get(key) !== map2.get(key)) return "NO"
  }

  return "YES"
}
