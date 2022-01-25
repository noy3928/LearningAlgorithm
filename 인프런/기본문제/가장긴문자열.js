/*
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
*/


function solution(s){  
    let answer="", max=0

    s.forEach((word) => {
        if(word.length > max){
            max = word.length
            answer = word
        }

    })

    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
