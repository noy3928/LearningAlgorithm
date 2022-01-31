/* 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
▣ 출력설명 최대합을 출력합니다.
*/

function solution(arr){
    const arrLength = arr.length - 1
    const columnSumArray = []
    const diagonalArray = []
    let answer = 0
    const rowSumArray = arr.map((eachArray) => {
        return eachArray.reduce((acc, cur) => acc + cur)
    })

    for(let i = 0; i < arr.length ; i ++){
         columnSumArray.push(arr.reduce((eachColumnSum, array) => {
                return eachColumnSum + array[i]
         }, 0))
    }

    diagonalArray.push(arr.map((array, idx) => {
                return array[idx]
    }).reduce((sum, el) => sum + el ))

    diagonalArray.push(arr.map((array, idx) => {
                return array[arrLength - idx]
    }).reduce((sum, el) => sum + el))

    
return answer = Math.max(...rowSumArray, ...columnSumArray, ...diagonalArray)

}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];

console.log(solution(arr));


//------------------

function solutions(arr){
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = sum2 = 0;
    for(let i = 0; i < n; i ++){
        sum1 = sum2 = 0;
        for(let j = 0; j < n ; j ++){
            sum1 = arr[i][j]
            sum2 = arr[j][i]
        }
        answer = Math.max(answer, sum1, sum2)
    }
    sum1 = sum2 = 0;
    for(let i = 0; i < n; i++){
        sum1 = arr[i][i]
        sum2 = arr[i][n - i - 1]
    }
    answer = Math.math(answer, sum1 , sum2)
}
