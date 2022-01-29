/*
Objective
In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages. Check out the Tutorial tab for learning materials and an instructional video!

Task
Write a Person class with an instance variable, , and a constructor that takes an integer, , as a parameter. The constructor must assign  to  after confirming the argument passed as  is not negative; if a negative argument is passed as , the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

yearPasses() should increase the  instance variable by .
amIOld() should perform the following conditional actions:
If , print You are young..
If  and , print You are a teenager..
Otherwise, print You are old..
To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

Note: Do not remove or alter the stub code in the editor.

Input Format

Input is handled for you by the stub code in the editor.

The first line contains an integer,  (the number of test cases), and the  subsequent lines each contain an integer denoting the  of a Person instance.
*/


function Person(initialAge) {
    // Add some more code to run some checks on initialAge
    if (initialAge < 0) {
      console.log("Age is not valid, setting age to 0.");
      this.age = 0;
    } else {
      this.age = initialAge;
    }
  
    this.amIOld = function() {
      // Do some computations in here and print out the correct statement to the console
      if (this.age < 13) {
        console.log("You are young.");
      } else if (this.age >= 13 && this.age < 18) {
        console.log("You are a teenager.");
      } else {
        console.log("You are old.");
      }
    };
  
    this.yearPasses = function(){
      // Increment the age of the person in here
      this.age++;
    };
  }