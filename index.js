let fs = require("fs");
let input = fs.readFileSync("example.txt").toString();

/**
 * 1.괄호를 배열에 넣는다.
 * 2.(가 나오면
 */

const solution = (text) => {
  const stac = [];
  for (const x of text) {
    if (x === "(") {
      stac.push(x);
    } else {
      if (stac.length === 0) {
        return console.log("NO");
      }
      stac.pop();
    }
  }
  if (stac.length > 0) return console.log("NO");
  else return console.log("YES");
};

solution(input);
