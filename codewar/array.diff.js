// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    for(let j = 0; j < b.length; j++){
        for(let i = 0; i < a.length; i++) {
            if(a[i] === b[j])  {
                a.splice(i, 1);
                i--;
            }
        }
    }
    return a
}

//b 배열 안에 있는 내용이 a 배열안에 있다면 지운다. 
//b 배열 안에 있는 내용을 하나씩 꺼내서 확인한다. 하나씩 a배열 안에 그 내용이 있는지 확인한다. 
//a 배열안에 내용물이 있다면, 그 값을 지운다.

// 이 문제에 대한 다양한 풀이 :
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}