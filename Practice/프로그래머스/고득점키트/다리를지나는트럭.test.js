const checkBridge = (bridgeLength, limitLength, bridgeWeigth, limitWeight) => {
  const isLengthOver = bridgeLength <= limitLength
  const isWeightOver = bridgeWeigth <= limitWeight
  return isLengthOver && isWeightOver
}

function solution(bridge_length, weight, truck_weights) {
  let seconds = 0
  const bridgeQueue = []
  let currentBridgeWeight = 0
  const totalTruckLength = truck_weights.length

  while (
    seconds < bridge_length + totalTruckLength ||
    truck_weights.length > 0
  ) {
    if (
      checkBridge(
        bridgeQueue.length,
        bridge_length,
        currentBridgeWeight + truck_weights[0],
        weight
      )
    ) {
      const shiftedTruck = truck_weights.shift() // O(n^2)
      bridgeQueue.push(shiftedTruck)
      currentBridgeWeight += shiftedTruck
      seconds++
    } else {
      if (seconds < bridge_length) seconds++
      else {
        const shiftedTruck = bridgeQueue.shift() // O(n^2)
        currentBridgeWeight -= shiftedTruck
        seconds++
      }
    }
  }

  return seconds
}

describe("다리를 지나는 트럭", () => {
  describe("100	100	[10,10,10,10,10,10,10,10,10,10]", () => {
    it("returns 110", () => {
      expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(
        110
      )
    })
  })

  describe("2	10	[7,4,5,6]", () => {
    it("returns 8", () => {
      expect(solution(2, 10, [7, 4, 5, 6])).toBe(8)
    })
  })

  describe("100	100	[10]", () => {
    it("returns 101", () => {
      expect(solution(100, 100, [10])).toBe(101)
    })
  })
})

/*
1.bridgeQueue를 만든다. bridgeQueue에 다리를 지나는 트럭을 넣는다. 
2.이 bridegeQueue에 트럭을 넣기 위해서 다리의 길이와 다리의 무게를 체크한다.
3.이 bridgeQueue에서 트럭을 빼기 위해서도 조건이 필요한데, 
최소 1초 + 다리의 길이만큼의 시간이 지나야한다. 이 시간이 지난 이후에야 다리에서 
트럭이 빠져나올 수 있다. 
4.해당 시간이 지나고나면 bridgeQueue에서 트럭을 빼고, 다리의 무게에서도 빼준다.
5. 이제 다시 bridgeQueue의 길이와 무게를 확인하고, 트럭을 넣을 수 있는지 확인한다.
6. 트럭을 넣을 수 있다면, truck_weights에서 트럭을 빼고, bridgeQueue에 넣고, 초수를 증가시킨다. 

*/

/*
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 한다. 정해신 순으로 건넌다. 
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 한다. 모든 트럭이 다리를 건널 때 걸리는 시간. 
다리에는 트릭이 최대 몇대 까지 올라갈 수 있는지 알려주며, 다리는 특정 무게 이하까지의 무게를 견딜 수 있다. 한번에 다리를 건널 수 있는 트럭의 갯수가 있고, 무게도 정해져있다. 그러면 이것을 확인해서 건너도록 만들어야 한다는 것이다. 

중요한 것은 정해진 순으로 다리를 건넌다는 것. 모든 배열에서 확인해서, 건너게 만드려는 것이 아니다. 그렇다면 정해진 댓수 안에서, 최대한 여러대의 트럭의 무게를 합한다. 그리고 그 트럭의 무게가 정해진 무게를 넘어가는지 아닌지를 확인한다. 정해진 무게를 넘어간다면, 해당 트럭은 함께갈 수 없다. 초수는 어떻게 잴 것인지.  answer => seconds

(또 최단 시간이라는 조건이 붙어있다.)


1.다리를 건너는 트럭 queue를 만든다. bridgeQueue이다. 이 bridgeQueue에는 조건이 있는데, 길이가 bridge_length를 넘어선 안되고, 무게가 weight를 넘어가서는 안된다. 
2.while이 돌아간다. truck_weights.length > 0일때까지. 
3.매 while문마다 bridgeQueue를 확인한다. 무엇을 확인하냐, 이 bridgeQueue의 길이를 확인하고, truck_weights[0]의 무게를 bridgeQueue전체의 무게와 합했을 때, wieght를 넘어가는지를 확인한다. 
4.만약 해당 조건을 통과한다면, bridgeQueue에 truck_weights[0]를 넣는다. 그리고 seconds를 ++ 한다. 
5.만약 해당조건을 통과하지 못한다면, bridgeQueue의 [0]번째 요소를 빼낸다. 그리고 seconds를 ++한다. 
6.while문이 끝나면 seconds를 반환한다. 

예상 시간복잡도 : O(N^2) -> while문 + 전체무게 합하는 것 포함. 만약, currentBridgeWeight라는 변수를 따로 가지고 있는다면 O(N)도 가능할 것 같다. 때문에 예상 시간 복잡도는 O(N)이다. 


문제를 다시 풀어야한다. 

1.bridgeQueue를 만든다. bridgeQueue에서 특정 트럭이 빠져나가려면 조건이 필요하다. 


*/
