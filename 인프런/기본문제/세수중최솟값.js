function solution(a, b, c){
    let answer;

    if(a<b){
        answer = a
    }else{
        answer = b
    }

    if(answer > c){
        answer = c
    }

    return answer;
}

console.log(solution(12, 5, 13));