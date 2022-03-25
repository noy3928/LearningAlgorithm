var twoSum = function (nums, target) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer = [i, j];
      }
    }
  }

  return answer;
};

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difNum = target - nums[i];

    if (numMap.has(difNum)) return [numMap.get(difNum), i];

    numMap.set(nums[i], i);
  }
}
