/* 
주어진 격자판을 탐색한다. 
탐색하다가 1을 만나면 DFS를 호출한다. 
DFS를 반환할 때, answer가 ++ 될 것이다.  
나오고 나면 다시 격자판을 탐색하다가 1을 만나면 DFS를 호출한다.  
*/

function solution(length, board) {
  let answer = 0
  let dx = [-1, 0, 1, 0, 1, -1, -1, 1]
  let dy = [0, 1, 0, -1, 1, 1, -1, -1]

  function isInside(x, y) {
    if (x >= 0 && x <= 6 && y >= 0 && y <= 6) return true
    else false
  }

  function checkOnePosition(x, y) {
    if (isInside(x, y) && board[x][y] === 1) return true
    else false
  }

  // 전 방위적으로 확인해봤더니, 섬이 없으면 true를 반환한다.
  function checkILOmnidirectional(x, y) {
    let check = true
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]
      if (checkOnePosition(nx, ny)) {
        check = false
      }
    }
    return check
  }

  function DFS(x, y) {
    console.log(x, y)
    if (checkILOmnidirectional(x, y)) {
      return
    } else {
      for (let k = 0; k < 8; k++) {
        let nx = x + dx[k]
        let ny = y + dy[k]
        if (checkOnePosition(nx, ny)) {
          board[nx][ny] = 0
          DFS(nx, ny)
        }
      }
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0
        DFS(i, j)
        console.log("answer++")
        answer++
      }
    }
  }

  console.log(answer)
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
]

solution(7, arr)
