const convertTime = time => {
  let t = time.split(":").map(Number)
  return t[0] * 60 + t[1]
}

function sumOfDifference(numbers) {
  let sum = 0

  for (let i = 0; i < numbers.length - 1; i += 2) {
    sum += numbers[i + 1] - numbers[i]
  }

  return sum
}

function calcFees(fees, accTime) {
  if (accTime <= fees[0]) return fees[1]
  else return fees[1] + Math.ceil((accTime - fees[0]) / fees[2]) * fees[3]
}

function solution(fees, records) {
  var answer = []
  const map = new Map()

  for (const car of records) {
    const [time, carNum, status] = car.split(" ")
    const carNumber = Number(carNum)
    if (map.has(carNumber))
      map.set(carNumber, [...map.get(carNumber), convertTime(time)])
    else map.set(carNumber, [convertTime(time)])
  }

  for (const [key, value] of map) {
    if (value.length % 2 !== 0) value.push(1439)

    const sum = sumOfDifference(value)

    answer.push([key, calcFees(fees, sum)])
  }

  return answer.sort((a, b) => a[0] - b[0]).map(el => el[1])
}
