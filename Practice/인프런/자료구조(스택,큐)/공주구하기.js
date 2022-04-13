/**
 * 1.k번째에 해당하는 숫자를 전후로 배열을 자른다.
 * 2.왼쪽편에 있는 배열을 오른쪽 편 배열 뒤에 붙인다.
 * 3.k번째에 해당하는 숫자를 전후로 배열을 자른다.
 * 4.왼쪽편에 있는 배열을 오른쪽 편 배열 뒤에 붙인다.
 * 5.배열의 갯수가 1이 될 때까지 반복한다.
 */

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
