/*A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
예를 들어 N=5이면
두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.
*/

function solution(a, b){         
    let answer=[];
    console.log(a.length)
    
    for(let i = 0; i < a.length; i ++){
                if(a[i] === b[i]){
                            answer.push('D')
                }
                if(a[i] === 1){
//                                     console.log('a가1이다.')
                        if(b[i] === 2){
//                                     console.log('a가 1이고, b가 2이다.')
                        answer.push('B')
//                                     console.log(answer)
                        }else if(b[i] === 3){
                        answer.push('A')
                        }
                }
                if(a[i] === 2){
//                                     console.log('a가 2다')
                        if(b[i] === 1){
//                                     console.log('a가 2고, b가 1이다.')
                        answer.push('A')
//                                     console.log(answer)
                        
                        }else if(b[i] === 3){
                        answer.push('B')
                        }
                }

                if(a[i] === 3){
//                                     console.log('a가 3이다')
                        if(b[i] === 1){
//                                     console.log('a가 3이고, b가 1이다.')
                        answer.push('B')
//                                     console.log(answer)
                        
                        } else if(b[i] === 2){
//                                     console.log('a가 3이고, b가 2이다.')
                        answer.push('A')
//                                     console.log(answer)
                        }
                }
    }
    console.log(answer);
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));

//             1.이기는 경우의 수를 생각한다. 
//              1-1. 가위(1) 바위(2) 보(3) 
//              1-2. 1,3 이면 1인 쪽이 승리 
//              1-3. 2,3 이면 3인 쪽이 승리 
//              1-4. 1,2 이면 2인 쪽이 승리 

//             2.a와 b의 i번째 값을 비교한다.  
 

//--------other solution 

function solution(a, b){         
    let answer="";
    for(let i=0; i<a.length; i++){
        if(a[i]===b[i]) answer+="D ";
        else if(a[i]===1 && b[i]===3) answer+="A ";
        else if(a[i]===2 && b[i]===1) answer+="A ";
        else if(a[i]===3 && b[i]===2) answer+="A ";
        else answer+="B ";
    }
    
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));