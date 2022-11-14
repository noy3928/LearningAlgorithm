const numbers = [5, 2, 1, 3, 1, , 25, 6, 1, 7, 8]
const max = Math.max(...numbers)

const array = new Array(max + 1)
array.fill(0)

for (let i = 0; i < numbers.length; i++) {
  array[numbers[i]]++
}

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i)
    }
  }
}
