function solution(record) {
  const splitedRecord = record.map(str => str.split(" "))
  let answer = []
  const userMap = new Map()

  for (const info of splitedRecord) {
    const result = []
    if (info[0] == "Enter") result.push("님이 들어왔습니다.")
    if (info[0] == "Leave") result.push("님이 나갔습니다.")
    if (info[0] == "Change") continue
    result.push(info[1])
    answer.push(result)
  }

  for (const info of splitedRecord) {
    if (info[0] == "Enter") {
      userMap.set(info[1], info[2])
    }
    if (info[0] == "Change") {
      userMap.set(info[1], info[2])
    }
  }

  answer = answer.map(info => {
    const nickname = userMap.get(info[1])
    return nickname + info[0]
  })

  return answer
}
/*
계획 : 
1.splitedRecord = record를 순회하며 split한다. // ["Enter", "uid1234", "Muzi"]
2.splitedRecord 한번 더 순회하면서, result에 담는다. [0]이 "Enter이면" "님이 들어왔습니다."라는 문자열을, "Leave"이면~ . uid도 [1]에 담는다.
3.splitedRecord를 통해서 각 uid별로 객체를 만든다. Enter가 나오거나, Change가 나올때마다, uid의 닉네임을 최신화한다. 
4.result를 한번더 순회하며, [1]을 확인하고, [1]에 알맞게, [0]에 값을 더한다. 
*/

/*
오픈채팅방. 사람들. 가상의 닉네임. 김크루. 관리자창. 닉네임이 들어어왔다. 닉네임이 나갔다. 나갔다가 새로운 닉네임으로 들어ㅗ어간, 방 안에서 닉네임을 변경하거나. 
최종적으로 방을 개설한 사람이 보게 되는 메시지. 결국. 마지막에. 특정 아이디에 해당하는 사람이. 어떤 닉네임을 가지고 있느닞. 
Enter와 Change를 통해서만 유저아이디에 대해서 닉네임이 변경된다. 
배열을 순회하며, 최종적으로 각 uid에 대해서 어떤 닉네임을 가지고 있는지 확인할것. 
각 배열들을 split할 것. 각 배열들의 [0]을 확인해서. "들어왔습니다"인지, 나갔습니다.인지. 확인해서 배열에 넣을 것. 그리고 배열에는 uid도 함께 넣을 것. 
배열을 순회하며 각 uid를 확인할것. 
*/
