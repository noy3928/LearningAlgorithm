/*
현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니 다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.
*/

function solution(test){
    let answer=0;
    m=test.length;
    n=test[0].length;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            let cnt=0;
            for(let k=0; k<m; k++){
                let pi=pj=0;
                for(let s=0; s<n; s++){
                    if(test[k][s]===i) pi=s;
                    if(test[k][s]===j) pj=s;
                }
                if(pi<pj) cnt++;
            }
            if(cnt===m) answer++;
        }
    }
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));


// -------- 
 
/*
1. 맨 처음 나온 수를 가지고 순서대로 경우의 수를 만든다.
2. 다음 배열에서도 순서대로 경우의 수를 만든다. 
3. 만약 수가 뒤집어진 경우가 있으면, 그 경우의 수를 뺀다. 
4. 만들어진 전체 경우의 수를 구한다. 
 */

const getEachCase = (array) => {
    const eachCaseArr = []
    for (let i = 0; i < (array.length / 2); i++) {
        for(let j = 1; j < array.length; j ++){
            if(i !== j){
            const eachTuple = [array[i], array[j]]
            eachCaseArr.push(eachTuple)   
            }            
        }
    }
    return eachCaseArr
}


function solution(test){
    let answer=[];
    let firstCases = getEachCase(test[0])

    for(let i = 1; i < test.length - 1 ; i++){
        const eachCase = getEachCase(test[i])
        const tmpArr = eachCase.filter((x) => {
            const tuple = JSON.stringify(x)
            const comparisonArr = JSON.stringify(firstCases)

            if(comparisonArr.includes(tuple)){
                return x
            }
        })

        // for( x of eachCase ){
        //     if(firstCases.includes(x)){
        //         tmpArr.push(x)
        //     } 
        // }
        firstCases = tmpArr
    }

    console.log(firstCases)
    
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));



//-------------------------
const solution = (arr) => {
    const m = arr[0].length
    const n = arr.length
    let answer = 0
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= m; j++){
            let cnt = 0
            for(let k = 0; k < n; k ++){
                    let pi = pj = 0
                for(let s = 0; s < m; s ++){ 
                    if(arr[k][s] === i) pi = s    
                    if(arr[k][s] === j) pj = s
                }
                    if(pi > pj) cnt ++
            }
            if (cnt === n) answer ++
        }
    }
    console.log(answer)
}


let test=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(test));


//-----------------------

const solution = (test) => {
    const m = test[0].length
    const n = test.length
    let answer = 0

    for(let i = 1; i <= m ; i ++){
        for(let j = 1; j <= m; j++){
            let cnt = 0
            for(let s = 0; s < n; s ++){
                let pi = pj = 0
                for(let k = 0; k < m; k++){
                    if(test[s][k] == i) pi = k
                    if(test[s][k] == j) pj = k 
                }
                if(pi < pj) cnt ++ 
            }
            if(cnt === n) answer ++
        }
    }

    console.log(answer)
}

let test=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(test));





