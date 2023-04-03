/*문제: 현수는 연못에서 개구리로 변신했다. 
현수는 개구리로서 한 번에 앞으로 1, 앞으로 2, 앞으로 3의 거리를 뛸 수 있다. 
연못에는 돌이 놓여 있고, 현수는 돌 위에서만 뛸 수 있다. 
현수의 현재 위치와 목표 위치가 주어졌을 때, 최소 몇 번 뛰어야 목표 위치에 도착할 수 있는지 
구하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 현수의 현재 위치 S와 목표 위치 E가 주어진다. 
직선의 좌표 점은 1부터 10,000 까지이다.

▣ 출력설명

뛰는 최소횟수를 구한다. 답은 1이상입니다.

▣ 입력예제 1 => 5 10
▣ 출력예제 1 => 2
*/

const solution = (me, you) => {
  const check = Array.from({ length: 10001 }, () => 0)
  const distance = Array.from({ length: 10001 }, () => 0)
  const queue = [me]

  while (queue.length) {
    const v = queue.shift()
    for (const nv of [v + 1, v + 2, v + 3]) {
      if (nv === you) return distance[v] + 1
      if (nv > 0 && nv <= 10000 && check[nv] === 0) {
        check[nv] = 1
        distance[nv] = distance[v] + 1
        queue.push(nv)
      }
    }
  }
}
