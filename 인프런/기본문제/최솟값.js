/*7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.*/

function solution(arr){         
    let answer, min=arr[0];
    
    arr.forEach((el) => {
                if(el < min){
                    min = el;
                }
    })
 return answer = min;
}

let arr=[5, 7, 12, 3, 2, 9, 11];
console.log(solution(arr));

////------------- answer

function solution(arr){         
    let answer, min=Number.MAX_SAFE_INTEGER; //안정적인 가장 큰 수로 min을 초기화해두기. 
    
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
 return answer = min;
}

let arr=[5, 7, 12, 3, 2, 9, 11];
console.log(solution(arr));

