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

console.log(characterPosition, map)

const getLeftDir = currentDirection => {
  return currentDirection - 1 < 0 ? 3 : currentDirection - 1
}

const checkLeft = (position, map) => {
  // 북 동 남 서
  const dx = [0, 1, 0, -1]
  const dy = [-1, 0, 1, 0]
  const leftDirection = getLeftDir(position[2])
  const yPos = position[1] + dy[leftDirection]
  const xPos = position[0] + dx[leftDirection]

  if (map[yPos][xPos] == 1) {
    return true
  } else {
    return false
  }
}

const moveLeft = (position, map) => {
  const x = position[0]
  const y = position[1]
  const dir = position[2]

  if (dir === 0) {
    map[y][x - 1] = 1
    position[0] -= 1
  } else if (dir === 1) {
    map[y - 1][x] = 1
    position[1] -= 1
  } else if (dir === 2) {
    map[y][x + 1] = 1
    position[0] += 1
  } else if (dir === 3) {
    map[y + 1][x] = 1
    position[1] += 1
  }
  return [position, map]
}

function solution(characterPosition, map) {
  let isMovable = true
  let answer = 0

  const dx = [0, 1, 0, -1]
  const dy = [-1, 0, 1, 0]
  while (isMovable) {
    if (checkLeft(characterPosition, map)) {
      const [newPos, newMap] = moveLeft(characterPosition, map)
      characterPosition = newPos
      map = newMap
    } else {
      characterPosition[2] = getLeftDir(characterPosition[2])
    }
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
