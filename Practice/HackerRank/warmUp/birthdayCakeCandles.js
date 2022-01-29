/* You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example


The maximum height candles are  units high. There are  of them, so return .

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
*/


function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = 0 
    let tallestNum = 0
    candles.forEach((candle) => {
        if(candle > tallest ){
            tallest = candle
        }
    })
    
    candles.forEach((candle) => {
        if(candle === tallest){
            tallestNum += 1
        }
    })
    
    return tallestNum
}