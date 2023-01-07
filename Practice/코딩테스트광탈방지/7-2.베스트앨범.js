const makeTotalCountMap = (genres, plays) => {
  const map = new Map()
  genres.forEach((v, i) => {
    if (map.has(v)) map.set(v, map.get(v) + plays[i])
    else map.set(v, plays[i])
  })
  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
  return sortedMap
}

const makeMap = (genres, plays) => {
  const map = new Map()
  plays.forEach((v, i) => {
    map.set(v, genres[i])
  })
  return map
}

const sortByGenre = (filterGenre, map) => {
  const arr = []
  for (const [count, genre] of map) {
    if (genre === filterGenre) arr.push(count)
  }
  return arr.sort((a, b) => b - a)
}

function solution(genres, plays) {
  const answer = []
  const mappedGenres = makeTotalCountMap(genres, plays)
  const mappedPlays = makeMap(genres, plays)

  for (const [genre, count] of mappedGenres) {
    const sortedList = sortByGenre(genre, mappedPlays)

    // 먼저는 정렬된 리스트가 1개인지 아닌지를 확인한다.
    if (sortedList.length > 1) {
      for (let i = 0; i < 2; i++) {
        // 정렬되어 들어온 리스트의 두 값이 같은지 확인한다.
        if (i == 0 && sortedList[i] == sortedList[i + 1]) {
          // 두 값이 같다면, 비교하여 넣고, for문을 끝낸다.
          const index1 = plays.indexOf(sortedList[i])
          const index2 = plays.indexOf(sortedList[i + 1])
          return index1 > index2
            ? answer.push(index1, index2)
            : answer.push(index2, index1)
        } else {
          // 두 값이 같지 않다면, 그냥 순서대로 인덱스 값을 넣는다.
          const indexOfPlay = plays.indexOf(sortedList[i])
          answer.push(indexOfPlay)
        }
      }
    } else {
      const indexOfPlay = plays.indexOf(sortedList[0])
      answer.push(indexOfPlay)
    }
  }

  return answer
}
