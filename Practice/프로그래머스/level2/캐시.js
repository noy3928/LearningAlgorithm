function solution(cacheSize, cities) {
  let hours = 0
  const cacheQueue = []

  for (const city of cities) {
    const upperCasedCity = city.toUpperCase()
    const indexOfCity = cacheQueue.indexOf(upperCasedCity)
    if (indexOfCity !== -1) {
      hours += 1
      cacheQueue.splice(indexOfCity, 1)
      cacheQueue.push(upperCasedCity)
    } else {
      hours += 5
      cacheQueue.push(upperCasedCity)
      if (cacheQueue.length > cacheSize) cacheQueue.shift()
    }
  }

  return hours
}

/*
지도. 검색. 성능측정. 캐시 적용. 캐시의 크기. 실행시간 측정 프로그램? 
순서대로 처리할 때. 
*/

/*
캐시는 LRU이기 때문에, queue로 처리한다. 
캐시는 []이다. 
처음 검색된 검색어를 queue에 넣는다. 
다음 검색어가 들어올 때마다, 캐시안에 검색어 있는지 확인을 한다. 
없으면, queue에 넣는다. 그리고 전체 시간을 ++한다. 
    없을 때는 +5
    있을 때는 +1 만큼 전체 시간을 ++한다. 


1.cacheQueue를 배열로 만든다. 
2.cities를 순회한다. 
3.각 검색어별로, cacheQueue에 존재하는지 확인한다. 
    3-1.cacheQueue에 존재한다면, cache hit이기 때문에, hours를 +1한다. 그리고 cacheQueue에서 맨 뒤로 보낸다. 
    3-2.cacheQueue에 존재하지 않는다면, hours를 +5한다. 그리고 cacheQueue에 넣는다. 
    3-3.만약 cacheQueue의 length가 3이 넘어갔다면, cacheQueue의 맨 앞에 있는 요소를 빼낸다. 
4.hours를 반환한다. 

시간복잡도 : O(n^2)
공간복잡도 : O(n)
*/

function solution(cacheSize, cities) {
  const map = new Map()
  const cacheHit = (city, map) => {
    map.delete(city)
    map.set(city, city)
    return 1
  }
  const cacheMiss = (city, map, size) => {
    if (size === 0) return 5
    map.size === size && map.delete(map.keys().next().value)
    map.set(city, city)
    return 5
  }
  const getTimeCache = (city, map, size) =>
    (map.has(city.toLocaleLowerCase()) ? cacheHit : cacheMiss)(
      city.toLocaleLowerCase(),
      map,
      size
    )
  return cities
    .map(city => getTimeCache(city.toLocaleLowerCase(), map, cacheSize))
    .reduce((a, c) => a + c, 0)
}

/*
다른 사람의 풀이 중에서 map을 이용한 풀이가 있었다. 
이렇게하면 시간도 더 빨리질 수 있을거라고 생각했지만, 내가 선택하지 못했던 이유는 
map을 이용하면 순서대로 값을 제거할 수 없을 거라고 생각했기 때문이다. 
하지만, 위 코드를 보니, map.keys().next().value를 이용하면, 순서대로 값을 제거할 수 있는 것 같다. 
이런 방법도 있구나.
다음부터는 이런 방법도 활용해보면 좋을 것 같다는 생각이 들었다. 
*/
