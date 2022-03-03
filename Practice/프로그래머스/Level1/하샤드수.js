//시간 복잡도 : O(1)
//공간 복잡도 : O(1)

function solution(x) {
    let answer = true;
    let tmpNum = 0 
    const num = x; 
    
    while(x){
        let t = x % 10 
        tmpNum += t 
        x = parseInt(x/10)
    }
    
    if(num%tmpNum === 0) answer = true
    else answer = false
    
    return answer;
}


//-------------------- other solution 

//시간 복잡도 : O(1)
//공간 복잡도 : O(1)

function solution(x) {
    let answer = true;
    let tmpNum = [...String(x)].reduce((cur,acc) => {
       return cur + Number(acc) 
    },0)
    
    if(x%tmpNum === 0) answer = true
    else answer = false
    
    return answer;
}