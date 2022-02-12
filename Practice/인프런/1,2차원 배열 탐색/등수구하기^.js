/*
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
*/

function solution(arr){  
    let n=arr.length;
    let answer=Array.from({length:n}, ()=>1);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j]>arr[i]) answer[i]++;
        }
    }             
    return answer;
}

//--------- other solution 

function factorial(n) {
    // Write your code here
    const factorialArray = []
    
    for(let i = 1; i < n + 1 ; i ++){
        factorialArray.push(i) 
    }
    return factorialArray.reduce((acc, cur) => {
        return acc * cur
    }, 1) 
}


//---------- 

function factorial(n){
    if (n == 0)
        return 1;
    else
        return (n*(factorial(n - 1)));
}

