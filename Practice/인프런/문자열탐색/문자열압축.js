/*
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.
*/

function solution(s){
    let answer="";
    let cnt=1;
    s=s+" ";
    for(let i=0; i<s.length-1; i++){
        if(s[i]===s[i+1]) cnt++;
        else{
            answer+=s[i];
            if(cnt>1) answer+=String(cnt);
            cnt=1;
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));



//-------------------------


function solution(s){
    let answer="";
    let count = 0
    const sArr = [...s]
    let memorizedChar = sArr[0] 

    

    sArr.forEach((char, idx) => {
        
        if(char === memorizedChar){
            count ++ 
            if(idx === sArr.length - 1 ) {
                
                answer += `${memorizedChar}${count}`
            }
        }else{                        
            answer += memorizedChar + (count === 1 ? "" : count)
            count = 1
            memorizedChar = char
            
            if(idx === sArr.length - 1 ) {
                answer += `${memorizedChar}`
            }
        }
        
    })
    
    return answer
}

let str="KKHSSSSSSSE";
console.log(solution(str));


/*
문자열이 입력되면, 
반복문을 돌린다. 

특정 문자가 나오면 그 문자를 기록한다. 

그 문자가 다음 문자열에서도 나오는지 확인한다.

그 문자가 다음 문자열에서도 나오면, count를 +1 한다. 

다음에 나온 문자가 이전에 나온 문자와 다른 문자열이라면, result에 
해당 문자와 count를 push 한다. 

이렇게 반복 


*/

