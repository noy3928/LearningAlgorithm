/*
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
*/

function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}
function solution(arr){
    let answer=[];
    for(let x of arr){
        let res=0;
        while(x){
            let t=x%10;
            res=res*10+t;
            x=parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));


//---------------------------------

function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i
    for(let i = 2; num > i; i++) {
    if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
     }
    }
   // 소수는 1보다 큰 정수임으로
   // 1보다 작으면 false를 리턴한다
   return num > 1;
}


function solution(num) {
    // 수를 뒤집는다. 
    const reversedNum = num.map(el => String(el)).map(el => Number(el.split('').reverse().join('')))

    reversedNum.forEach(eachNum => {
        if(isPrime(eachNum)) console.log(eachNum)
    })
}



//-----------------------
const isPrime = (num) => {
    if(num === 1) return false
    
    for(let i = 2; i < parseInt(Math.sqrt(num)); i ++){
        if(num%2 === 0) return false
    }

    return true
}

const solution = (numArr) => {
    for(x of numArr){
        let res = 0
        while(x){
            let t = x % 10
            res = res * 10 + t 
            x = parseInt(x/10)
        }
        if(isPrime(res)) return res
    }
}

