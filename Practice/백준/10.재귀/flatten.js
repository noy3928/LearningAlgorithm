function flatten(element) {
  if (typeof element !== "object") return element
  else {
    const newArr = []

    for (let i = 0; i < element.length; i++) {
      const returnedValue = flatten(element[i])

      if (typeof returnedValue === "object") newArr.push(...returnedValue)
      else newArr.push(returnedValue)
    }

    return newArr
  }
}

//--------------

function flatten(oldArr) {
  var newArr = []
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr
}
