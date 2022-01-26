/*
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
*/

function solution(s){  
    let answer="";
    //console.log(s.indexOf("K"));
    for(let i=0; i<s.length; i++){
        //console.log(s[i], i, s.indexOf(s[i]));
        if(s.indexOf(s[i])===i) answer+=s[i];
    }
    return answer;
}
console.log(solution("ksekkset"));

// k의 갯수 구하기 

const solution = () => {
    let answer = 0;
    let pos = s.indexOf('k');
    while(pos!==-1){
        answer ++;
        pos = s.indexOf('k', pos+1);
    }
    return answer;
}