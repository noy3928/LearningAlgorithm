/*앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.
*/

function solution(s){
    let answer="YES";
    const upperCaseS = s.toUpperCase()
    const n = s.length;

    for(let i = 0; i < n; i ++){
                if(upperCaseS[i] !== upperCaseS[n-i-1]){
                            answer = 'NO'
                }
    }
          
    return answer;
}

let str="goooG";
console.log(solution(str));

// ----------------- 

function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    let len=s.length;
    //굳이 다 돌 필요없이, 절반만 돌아도 된다. 
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i]!=s[len-i-1]) return "NO";
    }
    return answer;
}

let str="goooG";
console.log(solution(str));


//---------------------

function solution(s){
    let answer="YES";
    const S=s.toLowerCase();
    const reversedS = [...S].reverse().join('')

    if(S !== reversedS) return 'NO'
    return answer;
}

let str="goooG";
console.log(solution(str));