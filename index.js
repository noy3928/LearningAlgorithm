let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");
const [S, T] = input;

const compare = (hashT, hashS) => {
  for (const [key, value] of hashS) {
    if (!hashT.has(key)) return false;
    if (hashT.get(key) !== value) return false;
  }
  return true;
};

const solution = (S, T) => {
  const N = T.length;
  const hashT = new Map();
  const hashS = new Map();
  let answer = 0;

  [...T].forEach((char) => {
    if (hashT.has(char)) return hashT.set(char, hashT.get(char) + 1);
    else return hashT.set(char, 1);
  });

  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < N + i; j++) {
      if (hashS.has(S[j])) hashS.set(S[j], hashS.get(S[j]) + 1);
      else hashS.set(S[j], 1);
    }

    if (compare(hashT, hashS)) answer++;
    hashS.clear();
  }
  console.log(answer);
};

solution(S, T);

/**
 * 1. T에 대한 해쉬 테이블을 구한다.
 * 2. T의 문자열 갯수를 구한다.
 * 3. S를 순회하면서, T의 문자열 갯수만큼 해쉬 테이블을 구한다.
 * 4. 두 해쉬 테이블을 비교하고, 두 해쉬 테이블이 같으면 answer에 1 ++ 한다.
 * 5. 이렇게 순회하면 끝!
 * 시간 복잡도는 : O(N)
 */
