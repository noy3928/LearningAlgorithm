let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input.shift().split(" ");

const siteList = input.slice(0, M).map((item) => item.split(" "));
const targetList = input.slice(-N);

const solution = (arr1, arr2) => {
  const list = new Map();
  const pwdList = [];
  let answer = "";

  arr1.forEach((item) => {
    list.set(item[0], item[1]);
  });

  arr2.forEach((item) => {
    pwdList.push(list.get(item));
  });

  pwdList.forEach((item) => {
    answer += item + "\n";
  });

  console.log(answer);
};

solution(siteList, targetList);
