// 시간복잡도 : O(n^2)
// 공간복잡도 : O(n)
function solution(m, product){
    let answer=0;
    let n=product.length;
    product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
    for(let i=0; i<n; i++){
        let money=m-(product[i][0]/2+product[i][1]);
        let cnt=1;
        for(let j=0; j<n; j++){
            if(j!==i && (product[j][0]+product[j][1])>money) break;
            if(j!==i && (product[j][0]+product[j][1])<=money){
                money-=(product[j][0]+product[j][1]);
                cnt++;
            }
        }
        answer=Math.max(answer, cnt);
    }  
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));

//------------------------------------

/**
 * 1.각각 가격을 반값으로 할인하면서, 경우의 수를 계산해나간다. 
 * 2.
 */

function solution(m, product){
    let answer=0;    
    let n = product.length
    product.sort((a,b) => (a[0] + a[1]) - (b[0] + b[1]))

    for(let i = 0 ; i < n ; i ++){
        let money = m - (product[i][0]/2 + product[i][1])
        let cnt = 0 
        for(let j = 0; j < n ; j ++){
            const eachPrice = (product[j][0] + product[j][1])
            if(j !== i && eachPrice > money) break 
            if(j !== i && eachPrice <= money){
                money -= eachPrice 
                cnt ++ 
            }
        }
        answer = Math.max(answer , cnt)
    }

    return answer;
}


//-------------------------


function solution(m, product){
    let answer=0;    
    let n = product.length
    product.sort((a,b) => (a[0] + a[1]) - (b[0] + b[1]))

    for(let i = 0; i < n; i ++){
        let restMoney = m - ((product[i][0]/2) + product[i][1])
        let cnt = 1 
        for(let j = 0; j < n; j++){
            const eachStudentPrice = product[j][0] + product[j][1]
            if(j !== i && eachStudentPrice > restMoney) break 
            if(j !== i && eachStudentPrice <= restMoney) {
                restMoney -= eachStudentPrice
                cnt ++ 
            } 
        }
        answer = Math.max(answer, cnt)
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];