/*
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91 
*/


const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString()
input = input.split('\n')
const hi = "hi "
console.log(hi)
console.log(input)
const testCaseNum = +input[0]
console.log(testCaseNum)


for( let i = 1; i <= testCaseNum; ++i){
    const arr = input[i].split(' ').map((item) => +item);
    console.log('arr: ', arr)
    break
}