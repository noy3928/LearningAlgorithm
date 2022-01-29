/*Objective
In this challenge, we will use loops to do some math. Check out the Tutorial tab to learn more.

Task
Given an integer, , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: n x i = result.
*/


function main() {
    const n = parseInt(readLine().trim(), 10);
    
    for(let i=1; i<11; i++){
        console.log(`2 x ${i} = ${2*i}`)
    }
}