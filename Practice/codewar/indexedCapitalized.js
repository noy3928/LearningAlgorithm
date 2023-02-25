function capitalize(s, arr) {
  const settedIndex = new Set(arr)
  let result = ""

  for (let i = 0; i < s.length; i++) {
    if (settedIndex.has(i)) {
      const capitalized = s[i].toUpperCase()
      result += capitalized
    } else {
      result += s[i]
    }
  }
  return result
}

/*
  문제이해 : 
  문자열이 주어지고, 숫자가 들어있는 배열이 주어진다. 
  숫자배열에 들어있는 숫자의 index에 해당하는 문자열을 대문자로 바꿔주는 작업을 수행하기 
  
  1.숫자 배열을 set으로 만든다. 
  2.문자열의 길이만큼 순회한다. 
    2-1.if문으로 확인한다.해당 순서의 인덱스가 set에 존재한다면, 
      2-1-1.해당 index의 문자를 대문자로 바꾼다. 
      2-1-2.대문자로 바꾼 문자를 result[index]에 넣는다. 
  */

// ---------------------

function capitalize(s, arr) {
  var capS = s.split("")

  for (var i = 0; i < arr.length; i++) {
    if (capS[arr[i]]) {
      // if문을 통해 undefined가 나오는 것을 방지한다.
      capS[arr[i]] = capS[arr[i]].toUpperCase()
    }
  }

  capS = capS.join("")
  return capS
}
