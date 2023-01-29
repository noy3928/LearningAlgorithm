function likes(names) {
  const count = names.length

  switch (count) {
    case 0:
      return "no one likes this"
    case 1:
      return `${names[0]} likes this`
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${count - 2} others like this`
  }
}

// --------

function likes(names) {
  names.length === 0 && (names = ["no one"])
  let [a, b, c, ...others] = names
  switch (names.length) {
    case 1:
      return `${a} likes this`
    case 2:
      return `${a} and ${b} like this`
    case 3:
      return `${a}, ${b} and ${c} like this`
    default:
      return `${a}, ${b} and ${others.length + 1} others like this`
  }
}
