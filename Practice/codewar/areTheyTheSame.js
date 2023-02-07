export function comp(a1, a2) {
  if (a1 == null || a2 == null) return false

  const squaredA2 = a2.map(el => Math.sqrt(el))
  const mappedA1 = new Map()

  a1.forEach(el => {
    if (mappedA1.has(el)) mappedA1.set(el, mappedA1.get(el) + 1)
    else mappedA1.set(el, 1)
  })

  for (const char of squaredA2) {
    if (!mappedA1.has(char) || mappedA1.get(char) == 0) return false
    else mappedA1.set(char, mappedA1.get(char) - 1)
  }

  return true
}

/*
1. array2의 요소들을 square한다 
2. squared된 요소들이 array1에 있는지 확인한다. 
3. array1에 없는 요소가 있다면 false를 반환한다. 
4. 모든 요소가 존재한다면 true를 반환한다.
*/

function comp(array1, array2) {
  if (!array1 || !array2) return false
  if (array1.length !== array2.length) return false

  let squaredArray1 = array1.map(x => x * x).sort((a, b) => a - b)
  let sortedArray2 = array2.sort((a, b) => a - b)

  return squaredArray1.every((val, index) => val === sortedArray2[index])
}

/*
1. array1과 array2가 null이 아닌지 확인한다.
2. array1과 array2의 길이가 같은지 확인한다.
3. array1의 요소들을 제곱한다.
4. array1과 array2를 정렬한다.
5. array1과 array2의 요소들을 비교한다.
*/

function comp(array1, array2) {
  if (!array1 || !array2) return false
  if (array1.length !== array2.length) return false

  let map = new Map()
  for (let i = 0; i < array2.length; i++) {
    map.set(array2[i], (map.get(array2[i]) || 0) + 1)
  }

  for (let i = 0; i < array1.length; i++) {
    let squared = array1[i] * array1[i]
    if (!map.has(squared) || map.get(squared) === 0) return false
    map.set(squared, map.get(squared) - 1)
  }

  return true
}

/*
1. array1과 array2가 null이 아닌지 확인한다.
2. array1과 array2의 길이가 같은지 확인한다.
3. array2의 요소들을 map에 저장한다.
4. array1의 요소들을 제곱한다.
5. array1의 요소들이 array2에 있는지 확인한다.
6. array1의 요소들이 array2에 없다면 false를 반환한다.
7. array1의 요소들이 array2에 있다면 true를 반환한다.
*/
