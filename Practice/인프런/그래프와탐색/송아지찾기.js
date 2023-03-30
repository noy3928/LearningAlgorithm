// function solution(s, e) {
//   let answer = 0
//   let ch = Array.from({ length: 10001 }, () => 0)
//   let dis = Array.from({ length: 10001 }, () => 0)
//   let queue = []
//   queue.push(s)
//   ch[s] = 1
//   dis[s] = 0

//   while (queue.length) {
//     let x = queue.shift()
//     for (let nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) return dis[x] + 1
//       if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//         ch[nx] = 1
//         queue.push(nx)
//         dis[nx] = dis[x] + 1
//       }
//     }
//   }
// }

// function solution(s, e) {
//   let answer = 0
//   let ch = Array.from({ length: 10001 }, () => 0)
//   let queue = []
//   queue.push(s)
//   ch[s] = 1
//   let L = 0
//   while (queue.length) {
//     let len = queue.length
//     for (let i = 0; i < len; i++) {
//       let x = queue.shift()
//       for (let nx of [x - 1, x + 1, x + 5]) {
//         if (nx === e) return L + 1
//         if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//           ch[nx] = 1
//           queue.push(nx)
//         }
//       }
//     }
//     L++
//   }
// }

//----------------------

const solution = (me, you) => {
  const distance = Array.from({ length: 10001 }, () => 0)
  const check = Array.from({ length: 10001 }, () => 0)
  const queue = [me]

  check[me] = 1
  distance[me] = 0

  while (queue.length) {
    const v = queue.shift()

    for (const nv of [v + 1, v - 1, v + 5]) {
      if (nv === you) return distance[v] + 1
      if (nv > 0 && nv <= 10000 && check[nv] === 0) {
        check[nv] = 1
        queue.push(nv)
        distance[nv] = distance[v] + 1
      }
    }
  }
}

console.log(solution(5, 14))

/*
- check 배열을 통해서 한번 들렸던 숫자에 대해서는 다시 계산을 하도록 하지 않는 이유는, 
똑같은 숫자에 대해서는 거기서부터 뻗어나올 수 있는 경우의 수가 똑같기 때문이다. 
그렇기 때문에 check를 통해서 한번 들렸던 숫자에 대해서는 다시 계산을 하지 않도록 한다.

- distance를 배열을 만들어서 각각의 숫자들이 어떤 레벨에 속해있는지를 계산하도록 한다. 
*/
