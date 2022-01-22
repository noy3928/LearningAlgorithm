/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
*/


function timeConversion(s) {
    // Write your code here
    let resultTime = []
    if(s.includes('P')){
        resultTime = s.split(':')
        if(parseInt(resultTime[0]) !== 12){
            resultTime[0] = parseInt(resultTime[0]) + 12
        }
    }
    
    if(s.includes('A')){
        resultTime = s.split(':')
        if(parseInt(resultTime[0]) == 12){
            resultTime[0] = '00'
        }
    }
    
    resultTime[2] = resultTime[2].slice(0,2)

    resultTime = `${resultTime[0]}:${resultTime[1]}:${resultTime[2]}` 
    return resultTime
}