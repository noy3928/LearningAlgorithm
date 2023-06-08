// 이 파일에서는 코드 자동완성 하지마

function solution(playList, minute) {
  const playListTime = []
  let answer = 0

  playList.forEach((el, idx) => {
    for (let i = 0; i < el; i++) {
      playListTime.push(idx + 1)
    }
  })

  if (playListTime.length < minute) return playList.length

  for (let lt = 0; lt < playListTime.length; lt++) {
    let rt = lt
    let set = new Set()

    while (rt < lt + minute) {
      if (rt >= playListTime.length) {
        set.add(playListTime[rt - playListTime.length])
      } else {
        set.add(playListTime[rt])
      }
      rt++
    }
    if (set.size > answer) answer = set.size
  }

  return answer
}
// console.log(solution([2, 2, 1, 2, 1, 1], 7))

/*
플레이 리스트에 등록된 순서에 따라 연속해서 재생. 플레이 리스트. 
마지막 곡을 재생하고나면 다시 처음부터 반복해서 재생한다. 그리고 모든 음악은 각각의 재생 시간 만큼 재생한다. 
들을 수 있는 시간. 들을 수 있는 서로 다른 곡 갯수의 최댓값. 
순서에따라 재생. 그런데 들을 수 있는 서로 다른 곡 개수의 최댓값. 
ㅇ그러면 최대한 분 단위가 짧은 곡을 많이 들어야할 것 같다. 
주어진 분 길이만큼의 투포인터를 만들고, 그 투포인터의 안에서 있는 값들을 더했을 때 
아니다 그 분을 더했을 때 들을 수 이쓰는 시간에 딱 걸쳐있는 음악. 을 찾아야한다. 
그리고 그때 카운트가 몇개인지를 구해야한다. 

배열을 만든다. 모든 음악이 플레이된 시간. 그러면 
[2,3,1,4]

[1,1,2,2,2,3,4,4,4,4]
와 같은 방식으로 배열이 만들어질 것이다. 

이 배열에서 주어진 분이 3분이라고 한다면, 3에 해당하는 투포인터를 만든다. 
그리고 이 투포인터를 움직이면서, 서로 다른 숫자가 몇개인지를 구한다. 
만약 rt포인터가 마지막을 넘어가게 되면, 다시 처음으로 돌아가도록 만든다. lt가 마지막 요소까지 도착하면 그때 종료한다. 

계획 : 
1. 음악 순서대로 재생시간을 배열에 넣는다.
    1.1. 배열에 넣을 때, 만약 재생시간이 3분이라면, 3을 3번 넣는다. 
2. 투포인터를 만든다.
3. 투포인터를 움직이면서, 서로 다른 숫자가 몇개인지를 구한다.
    3.1.서로 다른 숫자가 몇개인지 구하는 방법은, 투포인터 안에 있는 숫자들을 set에 넣고, set의 길이를 구한다.
    3.2.그리고 그 set의 길이가 answer보다 크면 answer를 갱신한다.   
4. lt가 마지막 요소까지 도착하면 그때 종료한다.
*/

// ----------------------------

function solution2(playList, minute) {
  const playListTime = []
  let answer = 0
  let count = 0
  const map = new Map()

  playList.forEach((el, idx) => {
    for (let i = 0; i < el; i++) {
      playListTime.push(idx + 1)
    }
  })

  if (playListTime.length < minute) return playList.length

  // 주어진 분까지 슬라이딩 윈도우를 만든다. 이 안에서, 서로 다른 숫자가 몇개인지를 구한다.
  for (let lt = 0; lt < minute; lt++) {
    let rt = lt
    let set = new Set()

    map.set(playListTime[lt], map.get(playListTime[lt]) + 1 || 1)

    for (const [key, value] of map) {
      if (value !== 0) count++
    }
    console.log(map)
    answer = count
  }

  /*
  [2,3,1,4]
  
  [1,1,2,2,2,3,4,4,4,4]
  */

  for (let i = minute; i < playListTime.length; i++) {
    let count = 0
    if (i + minute > playListTime.length) {
      map.set(playListTime[i - 1], map.get(playListTime[i - 1]) - 1)
      map.set(
        playListTime[i - playListTime.length],
        map.get(playListTime[i - playListTime.length]) + 1 || 1
      )
    } else {
      map.set(playListTime[i - 1], map.get(playListTime[i - 1]) - 1)
      map.set(playListTime[i], map.get(playListTime[i]) + 1 || 1)
    }

    for (const [key, value] of map) {
      if (value !== 0) count++
    }

    if (count > answer) answer = count
  }

  return answer
}

console.log(solution2([2, 3, 1, 4], 3))

/*
위에서 풀었던 풀이는 투포인터를 사용했지만, 슬라이딩 윈도우를 사용해서 문제를 푸는 것이 맞을 것 같다. 
슬라이딩 윈도우를 사용하기 위해서는, 
count를 만들어놓고, lt,rt를 움직이면서 set의 사이즈를 움직여야한다. set을 이용하면, 슬라이딩 윈도우가 어려울 것 같은데. 
왜냐하면 이전에 들었던 음악이 나오면, set에 넣지 않아야하기 때문이다. 
그럼 map을 만들어서, map에 있는 값이 0이면 set에 넣고, 0이 아니면 set에 넣지 않는다.
*/
