function solution(arr1, arr2){
    let answer=[];
    arr1.sort((a,b) => a - b);
    arr2.sort((a,b) => a - b);
    
    let p1=p2=0;
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]==arr2[p2]){
            answer.push(arr1[p1++]);
            p2++;
        }
        else if(arr1[p1]<arr2[p2]) p1++;
        else p2++;
    }              
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));


//------------------------

function solution(arr1, arr2){
    let answer=[];
    arr1.sort((a,b) => a - b);
    arr2.sort((a,b) => a - b);

    for(let i = 0; arr1.length; i ++){
        for(let j = 0; arr1.length; j++){
            if(arr1[i] === arr2[j]) answer.push(arr2[j])
        }
    }
    
    return answer;
}


function solution(arr1, arr2){
    let answer=[];
    arr1.sort((a,b) => a - b);
    arr2.sort((a,b) => a - b);
    pi=pj=0

    for(let i = 0; i < arr1.length; i ++){
        if(arr1[pi] === arr2[pj]) {
            answer.push(arr1[pi])
            pi ++
            pj ++
        }else if(arr1[pi] < arr2[pj]){
            pi ++
        }else if(arr1[pi] > arr2[pj]){
            pj ++
        }
    }
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));