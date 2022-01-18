/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000 */

function plusMinus(arr) {
    // Write your code here
    
    const length = arr.length;
    
    const plusNum = arr.filter((el) => el > 0).length
    const minusNum = arr.filter((el) => el < 0).length 
    const zeroNum = arr.filter((el) => el === 0).length
    
    const plusDecimal = (plusNum / length).toFixed(6)
    const minusDecimal = (minusNum / length).toFixed(6)
    const zeroDecimal = (zeroNum / length).toFixed(6)
    
    const returnArr = [plusDecimal, minusDecimal, zeroDecimal]
    
    returnArr.forEach((El) => { console.log(El)})

}