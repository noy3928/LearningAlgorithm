/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers */



function miniMaxSum(arr) {
    // Write your code here
    const sortedArr = arr.sort()
    const minimumSum = sortedArr.filter((el, idx) => idx !== (sortedArr.length-1)).reduce((acc,cur) => acc + cur)
    const maximunSum = sortedArr.filter((el, idx) => idx !== 0).reduce((acc,cur) => acc + cur)
    console.log(minimumSum, maximunSum)
}