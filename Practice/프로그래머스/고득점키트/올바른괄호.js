function funDevelopment(progresses, speeds) {
  const result = []
  while (progresses.length > 0) {
    let count = 0
    while (progresses[0] >= 100) {
      count += 1
      progresses.shift()
      speeds.shift()
    }
    for (index in progresses) {
      progresses[index] += speeds[index]
    }
    console.log(count, progresses)
    if (count > 0) {
      result.push(count)
    }
  }
  return result
}

// --------

function getRemainDay(remainDay, workSpeed) {
  return Math.ceil((100 - remainDay) / workSpeed)
}

function solution(progresses, speeds) {
  const mappedProgresses = []
  progresses.forEach((cur, i) => {
    mappedProgresses.push([cur, speeds[i]])
  })

  const remainDays = []
  for (const [remainDay, speed] of mappedProgresses) {
    remainDays.push(getRemainDay(remainDay, speed))
  }

  const result = []
  let count = 1
  const queue = []

  remainDays.forEach((cur, i) => {
    if (i == 0) queue.push(cur)
    else if (queue[queue.length - 1] < cur) {
      result.push(count)
      count = 1
      queue.push(cur)
      queue.shift()
    } else {
      count++
    }
  })

  if (queue.length > 0) result.push(count)

  return result
}
