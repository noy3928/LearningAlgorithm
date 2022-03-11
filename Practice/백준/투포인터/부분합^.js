/*10,000 이하의 자연수로 이루어진 길이 N짜리 수열이 주어진다. 
이 수열에서 연속된 수들의 부분합 중에 그 합이 S 이상이 되는 것 중, 
가장 짧은 것의 길이를 구하는 프로그램을 작성하시오.*/

/*
1.연속된 수들의 합을 구한다.
2.연속된 수들의 합이 S이상인지 확인한다. 
3. answer에 넣는다. 
4.다음 연속된 수들의 합을 구한다. 
5. S이상인지 확인한다. 
6. answer = Math.min(answer, sum)과 같은 방식으로 가장 작은 수를 걸러낸다. 
*/

// 시간 초과한 방법....
const solution = (n, s, arr) => {
  let answer = (sum = j = length = 0);
  while (sum < s) {
    if (j < n) {
      sum += arr[j++];
      length++;
    } else break;
  }
  answer = length;
  sum = 0;
  for (let i = 1; i < arr.length; i++) {
    j = i;
    length = 0;

    while (sum < s) {
      if (j < n) {
        sum += arr[j++];
        length++;
      } else break;
    }

    if (sum >= 15) answer = Math.min(answer, length);
    sum = 0;
  }
  console.log(answer);
};

solution(N, M, nums);
