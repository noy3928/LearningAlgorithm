function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

/*
문제의 접근 : 
1. map 객체를 통해서 각각의 값들을 저장한다. 
2. 저장된 값들 중에서 가장 큰 값을 가진 키 값을 찾는다. 
*/

function solution(s) {
  let answer;
  let sH = new Map();
  let maxArr = [0, 0];

  for (const x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (const [key, value] of sH) {
    if (value > maxArr[1]) {
      maxArr = [key, value];
    }
  }

  return (answer = maxArr[0]);
}

let STR = "BACBACCACCBDEDE";
console.log(solution(str));
