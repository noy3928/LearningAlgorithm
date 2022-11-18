let fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.shift()

const mergeSort = (arr, p, r) => {
  if (p < r) {
    let q = Math.floor((p + r) / 2)
    mergeSort(arr, p, q)
    mergeSort(arr, q + 1, r)
    merge(arr, p, q, r)
  }
}

const merge = (arr, p, q, r) => {
  let i = p,
    j = q + 1,
    t = 1
  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
    }
  }
}

// # A[p..q]와 A[q+1..r]을 병합하여 A[p..r]을 오름차순 정렬된 상태로 만든다.
// # A[p..q]와 A[q+1..r]은 이미 오름차순으로 정렬되어 있다.
// merge(A[], p, q, r) {
//     i <- p; j <- q + 1; t <- 1;
//     while (i ≤ q and j ≤ r) {
//         if (A[i] ≤ A[j])
//         then tmp[t++] <- A[i++]; # tmp[t] <- A[i]; t++; i++;
//         else tmp[t++] <- A[j++]; # tmp[t] <- A[j]; t++; j++;
//     }
//     while (i ≤ q)  # 왼쪽 배열 부분이 남은 경우
//         tmp[t++] <- A[i++];
//     while (j ≤ r)  # 오른쪽 배열 부분이 남은 경우
//         tmp[t++] <- A[j++];
//     i <- p; t <- 1;
//     while (i ≤ r)  # 결과를 A[p..r]에 저장
//         A[i++] <- tmp[t++];
// }
