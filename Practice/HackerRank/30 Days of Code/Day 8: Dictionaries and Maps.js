/*Objective
Today, we're learning about Key-Value pair mappings using a Map or Dictionary data structure. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

Input Format

The first line contains an integer, , denoting the number of entries in the phone book.
Each of the  subsequent lines describes an entry in the form of  space-separated values on a single line. The first value is a friend's name, and the second value is an -digit phone number.

After the  lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a  to look up, and you must continue reading lines until there is no more input.

Note: Names consist of lowercase English alphabetic letters and are first names only.

*/

function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var N = parseInt(input[0])
    const phoneBook = input
        .filter((data, idx) => {if(idx < N + 1 && idx > 0) return data})
        .reduce((phoneBookObj, data, idx) => {
            const personName = data.split(' ')[0]
            const personPhoneNum = data.split(' ')[1]
            phoneBookObj[personName] = personPhoneNum
            return phoneBookObj
        }, {})
    const theOthers = input.filter((data, idx) => {if(idx > N) return data})
    
    Object.keys(phoneBook).forEach((person) => {
        if(theOthers.includes(person)){
            console.log(`${person}=${phoneBook[person]}`)
        }else{
            console.log('Not found')
        }
    })
} 


// ------- solve by Map collection i think it's really cool

function processData(input) {
    //Enter your code here
    const inputData = input.split('\n');
    const dataLength = Number(inputData.shift());
    const phoneBook = new Map();
    const queryData = inputData.reduce((target, item, index) => {
        index < dataLength ? phoneBook.set(item.split(' ')[0], item.split(' ')[1]) : target.push(item);

        return target;
    }, []);

    queryData.forEach((val, index) => { 
        console.log(phoneBook.get(val) ? `${val}=${phoneBook.get(val)}` : 'Not found');
    })
}
