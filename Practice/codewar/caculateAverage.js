// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



//1
function find_average(array) {
    // your code here
    let sum = 0
    let average = 0
    
    if(array.length !== 0){
      sum = array.reduce((acc, cur) => {return acc + cur;})
      average = sum / array.length
    }else{
      average = 0
    }
    
    return average;
  }

//2
  function find_average(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum/array.length;
  }