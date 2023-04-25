function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

//--------------------------

function solution(m, arr) {
  let sum = (answer = p2 = 0);

  for (let p1 = 0; p1 < arr.length; p1++) {
    sum = arr[p1];
    while (sum <= m) {
      answer += 1;
      p2 += 1;
      sum += arr[p2];
    }
    p2 = p1 + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

//--------------------------

function solution(m, arr) {
  let sum = (answer = lt = 0);

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
