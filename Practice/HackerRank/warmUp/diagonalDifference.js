/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers*/

function diagonalDifference(arr) {
    // Write your code here

    let arrLength = arr.length - 1;
    
    let rightDiagonalSum = 0
    let leftDiagonalSum = 0 
    
    arr.forEach((innerArray, i) => {
        innerArray.forEach((el, j) => {
            if(i === j ) rightDiagonalSum += el
            if(arrLength === j) leftDiagonalSum += el
        })
        arrLength -= 1
    })
    
    const absDiff = Math.abs(rightDiagonalSum - leftDiagonalSum);
    
    return absDiff;
}