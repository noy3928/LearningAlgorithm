const solution = (input) => {
  let arr = input;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
};

solution(input);
