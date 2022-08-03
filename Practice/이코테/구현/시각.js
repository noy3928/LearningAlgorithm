let input = Number(require("fs").readFileSync("example.txt").toString())

function solution(N) {
  let count = 0
  for (let hour = 0; hour <= N; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
      for (let second = 0; second <= 59; second++) {
        let time = String(hour) + String(minute) + String(second)
        if (time.includes("3")) count++
      }
    }
  }
  console.log(count)
}

solution(input)
