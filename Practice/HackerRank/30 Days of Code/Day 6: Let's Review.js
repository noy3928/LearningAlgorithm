/*
Objective
Today we will expand our knowledge of strings, combining it with what we have already learned about loops. Check out the Tutorial tab for learning materials and an instructional video.

Task
Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

Note:  is considered to be an even index.

Example


Print abc def

Input Format

The first line contains an integer,  (the number of test cases).
Each line  of the  subsequent lines contain a string, .

Constraints

Output Format

For each String  (where ), print 's even-indexed characters, followed by a space, followed by 's odd-indexed characters.
*/

function processData(input) {
    //Enter your code here
    
    const inputArray = input.split('\n')
    
    // const loopCount = inputArray[0]
    
    for(let i = 1; i < inputArray.length ; i++){
        const evenIndexed = []
        const oddIndexed = []
        for(let j = 0; j < inputArray[i].length; j ++){
            if(j % 2 === 0){
                evenIndexed.push(inputArray[i][j])
            }else{
                oddIndexed.push(inputArray[i][j])
            }
        }
        const joinedEven = evenIndexed.join('')
        const joinedOdd = oddIndexed.join('')
        console.log(`${joinedEven} ${joinedOdd}`)
    }
} 