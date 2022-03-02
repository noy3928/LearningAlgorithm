// 시간복잡도 : O(n)
// 공간복잡도 : O(n)

function solution(phone_number) {
    let answer = '';
    const convertingNum = phone_number.length - 4;
    
    const convertedNumber = [...phone_number].map((el, idx) => {
        if(idx < convertingNum){
            return '*'
        }else { 
            return el
        }
    })
    answer = convertedNumber.join('')
    return answer;
}