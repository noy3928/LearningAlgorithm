/*
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 
그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
*/


/*
1.n개의 자연수가 들어있는 배열의 각 자연수들의 합을 구한다. 
2.그것을 배열로 만든다. 
3.그 중 가장 큰 수를 뽑아낸다. 
4.그리고 그 수가 배열내에 몇개인지 찾는다. 
5.2개 이상인 경우, 각각의 inx를 찾는다. 
6.각 idx에 해당하는 원래 배열의 수를 찾는다. 
7.원래 배열의 수 중 같은 숫자인 친구들을 배열로 만든다. 
8.그 배열 중 가장 큰 수를 더한다. 

*/


function solution(n, arr){
    let answer
    const sumArr = arr.map((el) => {
        const sum = [...String(el)].reduce((cur, acc) => {
            return cur + parseInt(acc)
        }, 0)
        return sum 
    })

    const maxNum = Math.max(...sumArr)

    const countingMaxNum = sumArr.filter((num) => num === maxNum).length

    if(countingMaxNum > 1){
        const eachIdx = []

        sumArr.forEach((num, idx) => {
            if(num === maxNum){
                eachIdx.push(idx)
            }
        })

        const maxNumArr = []

        eachIdx.forEach((idx) => {
            maxNumArr.push(arr[idx])
        })
                    
        answer = Math.max(...maxNumArr)
    } else {

        const indexOfMaxNum = sumArr.indexOf(maxNum)
                console.log(indexOfMaxNum)
        answer = arr[indexOfMaxNum]
    }

    return answer;
}


//-------------------------------






function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=0, tmp=x;
        while(tmp){
            sum+=(tmp%10);
            tmp=Math.floor(tmp/10);
        }
        if(sum>max){
            max=sum;
            answer=x;
        }
        else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));