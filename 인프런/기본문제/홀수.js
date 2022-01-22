/*홀수
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.*/

//---- my answer
function solution(arr){
    let answer = []
    const oddArr = arr.filter((el) => el%2 == 1)
    const oddSum = oddArr.reduce((acc, cur) => acc + cur)
    let oddMinimum = oddArr[0] 
    oddArr.forEach((el) => {
        if(el < oddMinimum){
            oddMinimum = el 
        }
    })

        
    return answer = [oddSum, oddMinimum];
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));



//---- teacher's answer 


function solution(arr){
    let answer=[];
    let sum=0, min=1000;
    for(let x of arr){
        if(x%2===1){
            sum+=x;
            if(x<min) min=x;
        }
    }
    answer.push(sum);
    answer.push(min);     
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
