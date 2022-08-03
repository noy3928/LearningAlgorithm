let input = require("fs").readFileSync("example.txt").toString().split("\n")

let mapSize = input.shift()

let directions = input.shift().split(" ")

function solution(mapSize, directions) {
  const pos = { x: 1, y: 1 }
  directions.forEach(direction => {
    if (direction == "R" && pos.x < mapSize) pos.x++
    if (direction == "L" && pos.x > 1) pos.x--
    if (direction == "D" && pos.y < mapSize) pos.y++
    if (direction == "U" && pos.y > 1) pos.y--
  })
  console.log(pos.y, pos.x)
}

solution(mapSize, directions)
