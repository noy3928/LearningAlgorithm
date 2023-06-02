/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */

var getLastMoment = function (n, left, right) {
  let t = 0
  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)

  while (left[left.length - 1] > 0 || right[0] < n) {
    left[left.length - 1]--
    right[0]++
    t++
  }

  return t
}

/** 
개미가 판자 위를 걷고 있다. 각 개미는 1초에 1유닛 씩 움직인다. 
어떤 개미는 왼쪽으로 움직이고, 어떤 개미는 오른쪽으로 움직인다. 
만약 개미가 서로 만나는 지점이 있으면, 거기서 서로 방향을 바꾸게 된다. 방향을 바꾸는건 어떤 
추가적인 시간도 들지 않는다. 
t시간에 판자 끝에 도달하면 개미는 떨어진다. 

개미가 마지막까지 남아있는 순간이 몇 초인지 구할것. 
왼쪽, 오른쪽으로 개미가 움직이는 것을 표현. 
만나는 것은 어떻게 표현하며, 만나서 방향을 바꾼 것은 어떻게 표현을 할까?

판자 배열을 따로 만들고, 

right의 숫자를 하나씩 증가한다. 
1, 2

left는 하나씩 뺀다. 
3, 2

이렇게 서로 값을 움직이다가. 
같은 값을 발견하면, 
right, left로 움직인다. 

4,3  0,1 (0)
3,2  1,2 (1)
2,1  2,3 (2)
1,0  3,4 (3)
0,-1 4,5 (4)
-1,-2, 5,6 (5) 

while문에서 t를 하나씩 증가시킨다. 
left에 있는 요소들을 전부다 하나씩++
right에 있는 요소들도 전부다 하나씩-- 

left의 마지막 요소가 0일때. 
그리고 right의 첫번째 요소가 0일때. 

t가 된다. 
*/
