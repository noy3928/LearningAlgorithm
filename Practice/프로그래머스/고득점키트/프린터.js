function isMax(number, array) {
  let result = true
  for (const [eachNum, i] of array) {
    if (eachNum > number) result = false
  }
  return result
}

function solution(priorities, location) {
  var answer = 1
  // O(n)
  const queue = priorities.map((list, i) => {
    return [list, i]
  })

  //O(n)
  while (queue.length > 0) {
    //O(n) => O(n^2)
    if (!isMax(queue[0][0], queue)) {
      const tmp = queue.shift() //O(N) => O(N^2)
      queue.push(tmp)
    } else {
      if (queue[0][1] === location) return answer
      else {
        answer++
        queue.shift()
      } // O(N) => O(N^2)
    }
  }

  return answer
}

/*
문제이해 : 프린터는 요청이 들어온 순서대로 인쇄한다. 때문에 중요한 문서가 나중에 인쇄될 수 있다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했다. 이 프린터는 아래와 같은 방식으로 인쇄작업을 수행한다. 

1.인쇄 대기 목록의 가장 앞에 있는 문서 J를 대기 목록에서 꺼낸다. 
2.나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재한다면 J를 대기 목록의 가장 마지막에 넣는다. 
3.그렇지 않으면 J를 인쇄한다. 

Queue 문제. 

4개의 문서 A,B,C,D가 있다. 중요도가 2 1 3 2다. 
C는 1번째로 A는 3번째로 인쇄된다. 
queue = [A, C, D], print : B
queue = [A, D], print : C 
print = A, D

내가 요청한 문서가 몇번째로 인쇄되는지 확인하기. 

------

[2,1,3,2] 2 => 3

2를 Print하려고 봤더니 뒤에 더 큰수가 존재한다. 
2를 queue의 마지막에 넣는다. 

1을 Print하려고 봤더니 뒤에 더 큰수가 존재한다. 
1을 queue의 마지막에 넣는다. 

3을 Print하려고 봤더니 뒤에 더 큰 수가 없다. 
그러면 shift() 한다. 그리고 count를 1한다. 
만약 index가 location이라면 count를 반환한다. 


1. 각각의 목록에 대해서, 초기의 중요도와 Index를 배열로 저장한다. 
ex) [[2,0], [1,1], [3,2], [2,3]] 

2. while문을 돌린다. queue.length > 0일때까지. 
그리고 각각의 요소의 맨 앞 자리수를 빼낸다. 

3. 매 while문마다 queue[0]을 확인한다. queue[0]이 가장 큰 수라면, shift한다. 
가장 큰 수가 아니라면, shift를 하고 다시 Push한다. 그리고 count를 +1 한다.

3-1.queue[0]이 가장 큰 수인지 확인하는 방법 : 이거 확인하면 O(n^2)이 되어버린다. 

4.가장 큰 수인 경우, 해당 값의 index가 location인지 확인한다. 
location이라면 return count를 한다. 
*/
