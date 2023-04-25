let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

const nums = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

/*
현수의 아빠는 제과점을 운영합니다. 
현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.
*/

/*
- 문제 풀이의 프레임 워크 -

1.내가 이해한 바 : 
각 배열을 돌면서, k의 갯수만큼 더한 값들 중, 가장 큰 값을 구하는 문제

2. 가정확인하기 : 
k가 n보다 큰 경우는 없는지? 

3. 실제예를 들어 확인하기 : 
k가 2라고 한다면, 20 + 25 가 최대 매출액이 맞을까? 

4.해결책 : 
1)투 포인터로 풀기 

5. 시간복잡도 :
1) O(n)

6.코드 작성 
*/

function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

//---------------------

function solution(k, arr) {
  let answer = (sum = rt = 0);

  for (let lt = 0; lt < arr.length; lt++) {
    rt = lt;
    let margin = rt + k;

    while (rt < margin && margin < arr.length) {
      sum += arr[rt];
      rt++;
    }

    answer = Math.max(answer, sum);
    sum = 0;
  }

  console.log(answer);
}

solution(M, nums);

//------------------------------------

/*
슬라이딩 윈도우  :

창문을 만들어놓고, 그 창문을 옆으로 밀어나가는 것.  

제일 오른 쪽 수를 더하고, 제일 왼쪽 수를 뺴는 식으로 합을 구해나가는 방식  

이렇게 하면 합해지는 수가 옆으로 밀려나게 된다. 

sum + (arr[i] - arr[i-k])

*/

function solution(k, arr) {
  let answer = (sum = rt = 0);

  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    answer = Math.max(answer, sum);
  }

  console.log(answer);
}

solution(M, nums);
