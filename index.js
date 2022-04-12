let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [board, moves] = input;
console.log(typeof board);

/**
 * 1.moves에 있는 숫자는 탐색할 열을 의미한다.
 * 2.moves에 있는 숫자에 해당하는 열로 이동해서, 그 열을 순차적으로 순회한다.
 * 3.순회하면서 0이 아닌 숫자를 만나면, 그 숫자를 빼서 bucket에 넣어준다. 그리고 원래 있던 자리에 0을 넣어준다.
 * 4.bucket에 넣어줄 때, 마지막 숫자와 지금 들어올 숫자가 같다면, answer 를 +1 한다. 그리고 지금 들어가는 숫자와 마지막에 있던 숫자를 제거한다.
 * 5.이 루틴을 반복한다.
 */

const solution = () => {};
