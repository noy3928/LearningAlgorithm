let input = require("fs").readFileSync("example.txt").toString().split("\n")
input.shift()

const characterPosition = input
  .shift()
  .split(" ")
  .map(v => Number(v))

const map = input.map(line =>
  line
    .trim()
    .split(" ")
    .map(v => Number(v))
)

const checkLeft = currentDirection => {
  const directions = [0, 1, 2, 3]
  if (currentDirection == 0) return directions[3]

  const index = direction.indexOf(currentDirection) - 1
  const leftDiretion = directions[index]
  return leftDiretion
}

function solution(characterPosition, map) {
  let isMovable = true
  let answer = 0

  const dx = [0, 1, 0, -1]
  const dy = [-1, 0, 1, 0]

  while (isMovable) {
    if()
  }
}

/*

우선 게임 캐릭터의 움직임을 정의해야 한다. 

1.왼쪽 방향부터 차례대로 갈 곳은 어떻게 정하는가? 
-> enque를 활용 본인 보다 -1에 있는 값을 사용 
2.왼쪽 방향 enqueue[n-1]에 가보지 않은 칸이면, 방향을 바꿔준다. 

3.그리고 그 방향으로 앞으로 전진 

4.네 칸이 모두 가봤거나, 바다이다. 
-> if문으로 다 확인해보기. 

5.그러면 뒤로 한 칸 이동한다.  
-> 뒤로 한칸 이동이라는 것은. 바라보고 있는 방향에서 반대 방향으로 이동. enqueue[n+2] 방향으로 1칸 이동하면 된다.

*/
