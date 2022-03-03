function solution(arr) {
    let answer = 0;
    const n = arr.length 
    const sum = arr.reduce((cur, arr) => cur + arr)
    return answer = sum / n;
}

//----------------

function solution(arr) {
    let answer = 0;
    const n = arr.length 
    let sum = 0; 
    for(x of arr){
        sum += x
    }
    return answer = sum / n;
}