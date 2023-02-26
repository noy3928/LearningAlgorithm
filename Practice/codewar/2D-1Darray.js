function to1D(x, y, size) {
  const [width, height] = size
  return y * width + x
}

function to2D(n, size) {
  const [width, height] = size
  const x = n % width
  const y = Math.floor(n / width)
  return [x, y]
}

/*
풀이 설명 : 
1. to_1D 함수는 x와 y 좌표와 size 튜플을 받아 1D 공간의 해당 인덱스를 반환합니다.
2. to_2D 함수는 n 인덱스와 size 튜플을 받아 해당 x와 y 좌표를 2개의 요소를 가진 배열로 반환합니다.
3. to_1D 함수는 size 튜플을 해체하여 width와 height 변수로 할당하고, y * width + x를 사용하여 인덱스를 계산합니다.
4. to_2D 함수는 size 튜플을 해체하여 width와 height 변수로 할당하고, n % width와 Math.floor(n / width)를 사용하여 x와 y 좌표를 계산합니다.
5. 예제 입력으로 함수를 사용하는 방법은 다음과 같습니다.
6. to_1D(1, 2, [3, 4]) // 7
7. to_2D(7, [3, 4]) // [1, 2]

*/
