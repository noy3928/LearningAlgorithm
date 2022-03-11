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

const solution = (n, s, arr) => {
  let answer = (sum = j = length = 0);

  for (let i = 0; i < arr.length; i++) {
    j = i; // i 번째부터 값을 더해나간다.

    //sum 이 s이상이 되기 전까지 while문을 돌린다. s이상이 되면 탈출
    while (sum < s) {
      //j는 전체 길이 n보다 커서는 안된다.
      if (j < n) {
        sum += arr[j++]; // j번째부터의 값을 하나씩 더한다.
        length++; // 하나씩 더할때마다 길이를 늘린다.
      } else break;
    }

    if (sum >= 15) answer = Math.min(answer, length);
    sum -= arr[i];
    length -= 1;
  }
  console.log(answer);
};

solution(N, M, nums);
