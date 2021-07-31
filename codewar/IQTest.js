/*Bob is preparing to pass IQ test. 
The most frequent task in this test is to find out which one of the given numbers 
differs from the others. Bob observed that one number usually differs from the others 
in evenness. Help Bob — to check his answers, 
he needs a program that among the given numbers finds one that is different in evenness, 
and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, 
which means indexes of the elements start from 1 (not 0)*/


//내가 풀었던 풀이.
function iqTest(numbers){

    const numArray = numbers.split(" ").map(l => parseInt(l))
    let even = 0;
    let odd = 0;
    let result = 0;

    numArray.forEach((l) => {
        if(l % 2 === 1){
            odd++;
        }else{
            even++;
        }
    })

    if(odd === 1){
        result = numArray.findIndex((l) => {
            return l%2 === 1
        })
    }else{
        result = numArray.findIndex((l) => {
            return l%2 === 0
        })
    }
  
    return result + 1
}


//다른 사람들의 풀이 

//1번 풀이 
function iqTest(numbers){
    numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
    
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
  }


//두번째 풀이 : 이건 천잰가 싶었다. 

function iqTest(numbers){
    var nums = numbers.split(" ").map(x => x % 2); 
    var sum = nums.reduce((a,b) => a + b);  
    var target = sum > 1 ? 0 : 1;
    
    return nums.indexOf(target) + 1;
  }
  