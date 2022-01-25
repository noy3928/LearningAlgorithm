/*
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
*/

function solution(s){  
    let answer="";

    const sArray = [...s]

    sArray.forEach((el) => {
        if(el == el.toUpperCase()){
            answer += el.toLowerCase()
            return
        }
        if(el == el.toLowerCase()){
            answer += el.toUpperCase()
            return
        }

    })                

    return answer;
}

console.log(solution("STuDY"));