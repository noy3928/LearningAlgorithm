let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const [N, M] = input.shift().split(" ").map(Number)
const students = input.shift().split(" ").map(Number)

students.sort((a, b) => b - a)
console.log(students[M - 1])

// --------------------

const sort = arr => {
  let nums = arr
  for (let i = 0; i < nums.length; i++) {
    let idx = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[idx]) idx = j
    }
    ;[nums[idx], nums[i]] = [nums[i], nums[idx]]
  }
  return nums
}

const sortedStudents = sort(students)

console.log(sortedStudents[M - 1])
