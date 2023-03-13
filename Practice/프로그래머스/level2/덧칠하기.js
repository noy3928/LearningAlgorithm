function solution(n, m, section) {
  let answer = 0

  while (section.length > 0) {
    const rollRange = section[0] + m // 첫번째 섹션으로부터 칠할 수 있는 범위
    const tempSection = [...section] // section에서 값을 제거해도 for문을 안전하게 순회할 수 있는 tempSeciton
    section.shift() // 첫번째 값은 어차피 제거되는 상황

    for (let i = 1; i < tempSection.length; i++) {
      // 첫번째 값 이후로부터 하나씩 확인
      if (tempSection[i] < rollRange)
        section.shift() // 현재 순회중인 섹션값이 범위안에 들어온다면, section에서 값을 제거.
      else break // 그렇지 않으면 for문 종료
    }

    answer++
  }
  return answer
}

/*
길이가 n 미터인 벽. 벽에 페인트가 벗겨지는 상황. 페인트를 덧칠할 것이다. 
1미터 길이의 구역 n개로 나눌 것이다. 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙인다. 

롤러의 길이는 m미터이다. 
- 롤러가 벽에서 벗어나면 안 된다.
- 구역의 일부분만 포함되도록 칠하면 안된다. 

어떤 유형의 문제인지는 모르겠다. 
*/

/*
전체 범위가 주어진다. 그리고 칠해야하는 구역에 대한 배열이 주어진다. 
한번에 칠해서 없앨 수 있는 범위인지 확인해야한다. 

주어진 section을 순회한다. 
section의 값을 순회하면서, section의 첫번째 값으로부터, 롤러의 길이의 범위에 해당하는 것만큼 제거한다. 
그렇게해서 section의 내용을 한 번씩 제거하는데, section의 내용이 남지 않으면 멈춘다. 
한번씩 제거할 때마다 count를 한개씩 더한다. 

*/

/*
첫번째 값으로부터 해당 범위에 해당하는지 확인하는 방법. 
const rollRange = section[0] + m을한다. 
그리고 section[1]부터 section[i]번까지 차근차근 확인하면서 rollRange 이하의 범위인지를 확인한다. 
rollRange이하라고 판단된다면, section에서 제거한다. 
*/
