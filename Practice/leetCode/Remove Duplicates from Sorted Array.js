var removeDuplicates = function (nums) {
  let prev = nums[0]
  const N = nums.length
  let count = 1
  for (let i = 1; i < N; i++) {
    if (prev == nums[i]) {
      nums[i] = "_"
    } else {
      count++
      prev = nums[i]
    }
  }
  nums.sort()
  nums.splice(count)
  nums.sort((a, b) => a - b)
  console.log(`${count}, nums = [${nums}]`)
}
