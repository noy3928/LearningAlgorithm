const isObject = obj => {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

const stringifyNumbers = obj => {
  const newObj = {}

  for (const key in obj) {
    if (Number.isInteger(obj[key])) newObj[key] = String(obj[key])
    else if (isObject(obj[key])) newObj[key] = stringifyNumbers(obj[key])
    else newObj[key] = obj[key]
  }

  return newObj
}
