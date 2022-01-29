/*길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.*/

function solution(a, b, c){
    let answer="YES", max;

    let inputArr = [a,b,c]
    max = inputArr[0]

    inputArr.forEach((el) => {
        if(max < el){
            max = el
        }
    })

    const otherSidesSum = inputArr.filter(el => el !== max).reduce((acc, cur) => {
        return acc + cur
    })
    console.log(otherSidesSum)
    
    if(otherSidesSum > max){
        answer = "YES"
    }else{
        answer = "NO"
    }
 

    return answer;
}

console.log(solution(13, 33, 17));

//---------------------answer 

function solution(a,b,c){
    let answer ="YES", max; 
    let sum = a + b + c ; // 세 막대의 총 합
    //max에 a,b,c 중 가장 큰 값을 넣어줘야 한다. 
    if(a>b) max = a;
    else max = b;
    if(c>max) max = c;
    if((sum-max)<=max) answer = "NO";

    return answer;
}