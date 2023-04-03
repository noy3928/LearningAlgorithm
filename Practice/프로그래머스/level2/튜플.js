function solution(s) {
  const cleanS = s.substring(1, s.length - 1)
  let flag = false
  let tuple = []
  let tempArr = []
  let count = 0
  let map = new Map()
  const set = new Set()
  let eachNum = ""

  for (const char of cleanS) {
    if (char == "{") {
      flag = true
      continue
    }

    if (flag) {
      if (!isNaN(char)) eachNum += char
      if (char == ",") {
        tempArr.push(Number(eachNum))
        count++
        eachNum = ""
      }

      if (char == "}") {
        tempArr.push(Number(eachNum))
        count++
        eachNum = ""

        map.set(count, tempArr)
        tempArr = []
        count = 0
        flag = false
      }
    }
  }

  for (let i = 1; i <= map.size; i++) {
    const elements = map.get(i)

    elements.forEach(el => {
      if (!set.has(el)) {
        tuple.push(el)
        set.add(el)
      }
    })
  }

  return tuple
}

/*
1.s를 순회하며, 각 문자열을 확인한다.(s의 맨첫번째와 끝 문자를제거한다. temp 배열을 생성한다. count를 초기화한다. flag )
    1.1. { 이면, flag를 true로 바꾸어 배열에 담을 준비를 한다. 
    1.2. 숫자이고, flag가 true이면, temp에 담는다. count++ 한다.
    1.3. } 이면, count를 키값으로 해서, 객체에 해당 temp 배열을 담는다. temp와 count를 초기화한다. 
2.만들어진 객체를 1-n 순서대로 순회한다. 
    2.1 1번 key에 있는 값을 튜플의 첫번째 요소에 넣는다. 
    2.2.2번 key에 있는 요소 중 튜플에 존재하지 않는 요소를 넣는다. 
        2.2.1 튜플에 존재하는지 확인하기 위해서 set을 만든다. set.has false인 경우에만 값을 튜플에 넣는다. 
    2.3 2.1 부터 2.2를 반복한다. 
3.만들어진 튜플을 반환한다. 
*/

/*
셀 수 있는 수량의 순서있는 열거. 순서를 따르는 요소. 튜플. n개의 요소. n-튜플. 
a1, a2, a3 ... an.
1.중복가능
2.원소에 순서가 있음. 
3.원소의 갯수는 유한. 

집합 자체는 원소의 순서가 바뀌어도 상관없다. 

문제는 직관적으로 생각했을 때, {}안에 들어가있는 요소의 갯수가 가장 큰 요소를 배열로 담으면 될 것 같다는 생각이 든다. -> 이건 틀린 생각.
문자열 문제? 

규칙을 생각해봤을 때, 튜플은 각 요소의 순서가 정해져있다. 이 순서를 찾는 방법은, 
요소의 갯수가 1개인 것이 1번째 자리가 되는 것이고, 요소의 갯수가 2인 곳에서 이미 튜플에 들어간 숫자가 아닌 숫자인 것이고, 
요소의 갯수가 3개인 곳에서 이미 튜플에 들어간 숫자가 아닌 숫자가 튜플에 들어가는 순서가 될 것이다. 
그렇다면, 각 요소를 돌아다니면서, {}를 만나면 그 안에 있는, 요소들을 배열에 넣고, 요소의 갯수를 객체의 키값으로 설정하는 것이 좋을 것 같다. 

요소를 돌아다니면서 {를 만나면, 배열을 만든다. 그 배열 안에 그 이후로 나오는 숫자들을 담는다. 숫자를 담을때마다, 카운트를 증가시킨다.
,를 만나면 무시. 
{}를 중심으로 배열에 담는 코드가 있을까? 이것들을 코드에 담아놓고, 
각각을 배열의 키값으로 해서 담는다. 
*/
