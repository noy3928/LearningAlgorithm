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
