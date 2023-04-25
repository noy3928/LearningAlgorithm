/*
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.
*/

function solution(arr1, arr2){
    let answer=[];
    let n=arr1.length;
    let m=arr2.length;
    let p1=p2=0;
    while(p1<n && p2<m){
        if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]); 
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));



//---------------------------------------


function solution(arr1, arr2){
    let answer = arr1.concat(arr2).sort((a,b) => a - b)
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));


//----------------------------------------


/*
1.한 배열에 다른 배열을 합친다. 
2.합친 배열을 돌면서, i번째와 i+1번째를 확인한다. 
3.i번째 수가 i+1번보다 크다면, i번째와 i+1번째를 바꾼다. 
4.i번째 수가 i+1번과 같거나 작다면, 그대로 진행한다.
*/

function solution(arr1, arr2){
    let answer = []
    let n = arr1.length
    let m = arr2.length
    let p1 = p2 = 0

    while(p1 < n && p2 < m){
        if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++])
    }

    while(p1 < n) answer.push(arr1[p1++])
    while(p2 < m) answer.push(arr2[p2++])

    return answer
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));