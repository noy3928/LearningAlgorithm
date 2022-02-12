/*
Today, we are learning about an algorithmic concept called recursion. Check out the Tutorial tab for learning materials and an instructional video.
*/

function factorial(n) {
    // Write your code here
    let sum = 1
    
    for(let i = 0; i < n ; i ++){
        sum = sum * (n - i) 
    }
    return sum 
}