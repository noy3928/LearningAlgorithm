/*
Objective
In this challenge, we learn about conditional statements. Check out the Tutorial tab for learning materials and an instructional video.

Task
Given an integer, , perform the following conditional actions:

If  is odd, print Weird
If  is even and in the inclusive range of  to , print Not Weird
If  is even and in the inclusive range of  to , print Weird
If  is even and greater than , print Not Weird
Complete the stub code provided in your editor to print whether or not  is weird.

Input Format

A single line containing a positive integer, .
*/

function main() {
    const N = parseInt(readLine().trim(), 10);
    
    if(N%2 == 1 ) {
        console.log('Weird')
    }
    if(N%2 == 0) {
        if(2<=N && N<=5){
            console.log('Not Weird')
        }
        if(5<N && N<21){
            console.log('Weird')
        }
        if(20<N){
            console.log('Not Weird')
        }
    }
    
}