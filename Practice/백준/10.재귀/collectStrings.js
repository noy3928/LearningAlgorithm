const collectStrings = obj => {
  const newArr = []

  for (const x of Object.values(obj)) {
    if (typeof x === "string") newArr.push(x)
    else if (typeof x === "object") newArr.push(...collectStrings(x))
  }

  return newArr
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
}

collectStrings(obj) // ["foo", "bar", "baz"])
