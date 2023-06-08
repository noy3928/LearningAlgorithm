/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const result = []
  let i = 0

  // 겹치기 이전 부분의 숫자들을 먼저 넣는다.
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i])
    i++
  }

  // 겹치는 부분의 arr를 구한다.
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0])
    newInterval[1] = Math.max(intervals[i][1], newInterval[1])
    i++
  }

  result.push(newInterval)

  while (i < intervals.length) {
    result.push(intervals[i])
    i++
  }

  return result
}

/** 
위 문제는 투포인터 유형의 한 문제라고 볼 수 있다. 
i를 0으로 초기화하고, i가 intervals의 길이보다 작고, intervals[i][1]이 newInterval[0]보다 작을 때까지 i를 증가시킨다.
그리고 result에 intervals[i]를 넣는다. 

*/

function insert2(intervals, newInterval) {
  // 시작점이 겹치는 부분을 찾는다.
  let start = binarySearch(intervals, newInterval[0])

  // 만약 시작점이 겹치는 부분이 있다면, 시작점을 겹치는 부분의 시작점으로 바꾼다.
  if (start < intervals.length && intervals[start][0] < newInterval[0]) {
    newInterval[0] = intervals[start][0]
  }

  // 끝점이 겹치는 부분을 찾는다.
  let end = binarySearch(intervals, newInterval[1])

  // 만약 끝점이 겹치는 부분이 있다면, 끝점을 겹치는 부분의 끝점으로 바꾼다.
  if (end < intervals.length && intervals[end][0] <= newInterval[1]) {
    newInterval[1] = intervals[end][1]
    end++
  }

  // 겹치는 부분을 제외한 나머지 부분을 합친다.
  return [...intervals.slice(0, start), newInterval, ...intervals.slice(end)]
}

// 이진 검색으로 시작과 끝점을 찾는다.
function binarySearch(intervals, target) {
  let left = 0
  let right = intervals.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (intervals[mid][1] < target) {
      left = mid + 1
    } else if (intervals[mid][0] > target) {
      right = mid - 1
    } else {
      return mid
    }
  }

  return left
}
/*
삽입할 위치가 어디인지를 찾는다는 점에서, 이진검색 방법을 활용할 수도 있겠다는 생각이 들었다. 
*/
