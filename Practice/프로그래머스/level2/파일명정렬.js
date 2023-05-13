function separate(str) {
  const regex = /(\D*)(\d*)(.*)/

  const result = regex.exec(str)

  return [result[1], result[2], result[3]]
}

function solution(files) {
  var answer = []
  const separatedStr = files.map(file => separate(file))

  separatedStr.sort((a, b) => {
    const firstComparison = a[0].toLowerCase().localeCompare(b[0].toLowerCase())

    if (firstComparison !== 0) return firstComparison

    return Number(a[1]) - Number(b[1])
  })

  return separatedStr.map(str => str.join(""))
}
/*
계획 : 
1.주어진 files를 숫자를 기준으로 분리한 문자열을 만든다. 
2.separatedStr에서 첫번째 요소를 기준으로 정렬한다. 
3.separatedStr에서 두번째 요소를 기준으로 정렬한다. 정렬할 때, 숫자로 변환한 다음 비교하여 정렬한다. 
4.반환된 문자열들을 join으로 합쳐 반환한다. 
*/

/*
프로그램의 과거버전. 이름 순으로 정렬. 이름 순으로 정렬하면 안됨. 
숫자가 포함되면 관리가 어려움. 
문자 코드 순이 아닌, 숫자를 반영한 정렬 기능을 저장소 관리 프로그램에 구현하기로 함. 
정렬하는 문제. 주어진 요소 내에서 숫자와 문자를 구분해내야함.
구분한 후, 문자에 해당하는 요소들을 먼저 정렬하고, 이 친구들을 정렬하고 나면 숫자에 해당하는 요소들을 정렬해야함. 
만약 두개가 같다면, 기존의 배열안에 있던 순서를 유지해야하마. 
그럼 주어진 배열을 가지고, 다시 배열을 만들어보는게 좋을 것 같다. 
*/
