let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim()

const solution = str => {
  const group = new Set()

  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      const newStr = str.slice(j, j + i)
      group.add(newStr)
    }
  }

  console.log(group.size)
}

solution(input)
/*
하나의 문자열에서 만들어질 수 있는 조합을 만들어내야한다. 
패턴을 보아하니, 1개씩 자르고, 2개씩 자르고, 3개씩 ... 문자열의 길이만큼 자르는 방식으로 이루어진다. 
그렇게해서 구해진 그룹을 set에 넣고, 그 set의 갯수를 구하면 이 문제는 풀릴 것이다. 

이 문제의 핵심 포인트는 조합을 만들어내는 것이다. 

1.가장자리 for문에서는 몇개씩 자를 것인지(i)를 결정한다. 
2.2번째 for문에서는 해당 문자열을 순회하면서, 그 위치로부터 i만큼 자른다. 
3.자른 내용물을 set에 넣어준다. 
*/
