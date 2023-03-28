function solution(n) {
  let battery = Number.MAX_SAFE_INTEGER

  const DFS = (target, usedBattery) => {
    if (target > n) return
    if (target === n) return (battery = Math.min(battery, usedBattery))

    for (const move of [target + 1, target * 2]) {
      if (move === target + 1) DFS(target + 1, usedBattery + 1)
      else DFS(target * 2, usedBattery)
    }
  }

  DFS(0, 0)

  return battery
}

/*
건전지를 사용

battery = 0 

1.DFS(target, usedBattery)로 재귀를 돌린다. 
    1.1. if(재귀문 안에서 target 숫자를 만나면) return Math.min(battery, usedBattery)한다. 
    1.2. 아니면 for(const move of [n + 1, n * 2])를 한다. 
        1.2.1. if(n + 1) 이면, DFS(target + 1, usedBattery + 1)을 한다. 
        1.2.2. if(n *2) 이면, DFS(target*2, usedBattery)를 한다. 
*/

function solution(N) {
  let battery = 0

  while (N > 0) {
    if (N % 2 === 1) {
      N -= 1
      battery += 1
    } else {
      N /= 2
    }
  }

  return battery
}
