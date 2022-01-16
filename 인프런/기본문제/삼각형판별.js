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
        answer = "NO"
    }else{
        answer = "YES"
    }
 

    return answer;
}

console.log(solution(13, 33, 17));