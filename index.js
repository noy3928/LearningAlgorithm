let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

/*
 1. 현재 현수가 있는 위치를 구한다. i > i +1 인 상황이면 i번째에 현수가 있는 것이다.
 2. 그리고 현수의 값을 구한다. 
 3. 주어진 학생들을 키순으로 정렬한다.
 4. 현수의 원래 번호를 구한다. indexof를 통해서 구한다. 
 */

// 틀린 답

const solution = (input) => {
  let answer = [];
  let 현수의키 = 0;
  let 현수의번호 = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i + 1]) {
      answer.push(i + 1);
      현수의키 = input[i];
      break;
    }
  }

  for (let i = 0; i < input.length; i++) {
    let idx = i;
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[idx]) idx = j;
    }
    [input[idx], input[i]] = [input[i], input[idx]];
  }

  현수의번호 = [...input].indexOf(현수의키);
  answer.push(현수의번호 + 1);

  console.log(answer.join(" "));
};

solution(input);
