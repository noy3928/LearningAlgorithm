function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const solution = (board, moves) => {
  const bucket = [];
  let answer = 0;

  for (const x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        if (
          bucket.length !== 0 &&
          bucket[bucket.length - 1] == board[i][x - 1]
        ) {
          bucket.pop();
          answer += 2;
        } else {
          bucket.push(board[i][x - 1]);
        }
        board[i][x - 1] = 0;
        break;
      }
    }
  }
  console.log(answer);
};

solution(board, moves);
