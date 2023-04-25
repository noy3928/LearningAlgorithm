function solution(land) {
  let answer = 0
  let lastIndex = -1

  for (const row of land) {
    const max = Math.max(...row) // 1 2 3 5
    const index = row.indexOf(max)
    console.log(index)

    if (lastIndex == index) {
      row[index] = 0
      const newMax = Math.max(...row)
      const newIndex = row.indexOf(newMax)
      console.log(newIndex)
      lastIndex = newIndex
      answer += newMax
    } else {
      lastIndex = index
      answer += max
    }
  }

  return answer
}

// ----------------------------
