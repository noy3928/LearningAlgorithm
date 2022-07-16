function solution(board) {
  let answer = 0
  let dx = [-1, 0, 1, 0]
  let dy = [0, 1, 0, -1]
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k]
        let ny = y + dy[k]
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1
          DFS(nx, ny)
          board[nx][ny] = 0
        }
      }
    }
  }
  board[0][0] = 1
  DFS(0, 0)
  return answer
}

//-----------------------

/*
위치 좌표를 찾을 수 있도록. 
좌표를 하나씩 움직인다. 
0,0 부터 시작해서 
시계방향으로 사방을 훑는다. 
만약에 길이 뚫려있다면 그 길로 움직인다. 
움직일 때, 해당 길을 방문 처리 해준다. 
그 길에서 나오면 다시 방문해제를 한다. 
좌표가 6,6이 되면 answer++를 한다. =
*/

function solution(board) {
  let answer = 0
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]

  function DFS(x, y) {
    if (x === 6 && y === 6) answer++
    else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i]
        const ny = y + dy[i]
        if (nx >= 0 && nx >= 0 && nx <= 6 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1
          DFS(nx, ny)
          board[nx][ny] = 0
        }
      }
    }
  }
  board[0][0] = 1
  DFS(0, 0)
  console.log(answer)
}
solution(arr)
