/* 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요. */

function solution(s){         
    let answer=[];                
    let sArray = [...s]

    sArray.forEach((character) => {
        if(character == character.toLowerCase()){
            answer.push(character.toUpperCase())
            return
        }
        answer.push(character)
    })

    answer = answer.join('')

    return answer;

}

let str="ItisTimeToStudy";
let str1 = "Be sure to use precise"
console.log(solution(str1));

//--------------------------------------------

function solution(s){         
    let answer="";
    for(let x of s){
        let num=x.charCodeAt();
        if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
        else answer+=x;

        //if(x===x.toLowerCase()) answer+=x.toUpperCase();
        //else answer+=x;
    }

    return answer;

}