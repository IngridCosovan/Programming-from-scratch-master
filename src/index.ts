
//1.1 Declare two variables of type boolean and apply the boolean unary and binary operators.
// assign different values and try again.
let valueOne: boolean = true; //declaring first variable
let valueTwo: boolean = false; //declaring second variable
console.log(!valueOne);
console.log(valueOne||valueTwo);


//1.2 Declare two variables of type number. Show the sum of the two.
let a: number  = 12;
let b: number = 5;
console.log(a + b);

//1.3 Declare two variables of type number. Add both to a sum variable.
// The first one add twice. The second one add three times to the sum.
let c: number = 3;
let d: number = 2;
let sum: number = c + c + d + d + d;
console.log(sum);

//1.4 Declare a variable of type number. Increment and decrement it in two different methods.
let e: number = 1;
e++;
e--;
++e;
--e;
console.log(e);

//1.5 Declare two variables with value 0.1 and 0.2.
// Assign the multiplication result to another variable and show it. Discuss the result.

let valOne: number = 0.1;
let valTwo: number = 0.2;
let multiplication: number = 0.1 * 0.2;
console.log(multiplication);

//1.6 Declare a variable with a value over 100. Show the unitary digit and the tenths digit
// (e.g. for 123 unitary it's 3 and tenths is 2, with the sum of 5). Sum them in a different variable.
// let one: number = 157;

//1.7 Declare a variable with a value over 100. Show the sum of the digits (e.g. for 123 it's 1 + 2 + 3 = 6).
// let x: number = 123;
// let sumS: number = 0;
// sumS = sumS + x % 10;
// x = x/10;
// console.log(sumS);




// 1.8 Declare a variable and assign 3 different values to it. Check for each value wether the variable is an even or an odd number (show true for even and false for odd on the console).
// let x: number = 2;
// let x: number = 7;


// Note: To show the result on the screen just use the console.log(value). Each exercise should be clearly separated. Use comments in the code to describe the steps (like thinking aloud).


//2.1 Check wether a variable of type number is even or odd, showing an appropriate message on the screen.
let r = 17;
if (r % 2 == 0){
    console.log("R is an even number");
}else{
    console.log("R is an odd number");
}

// 2.2 Check wether two variables are equal or not and show an appropriate message on the screen
let m = 23;
let n = 67;
if (m == n){
    console.log("m is equal to n");
}else{
    console.log("m is not equal with n");
}

// 2.3 Check wether a variable contains a number that is positive or negative.
let f = 9;
if (f > 0){
    console.log("f is a positive number");
}else{
    console.log("f is a negative number");
}

// 2.4 Check wether a year is a leap year or not.
let year = 1991;
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
    console.log("year " + year + " is a leap year");
}else {
    console.log("year " + year + " is not a leap year");
}

// 2.5 Check wether a person is able to vote based on their age as input.
// let input: number = "";
// 2.6 The program has input the height of a person and should be able to cathegorize the person (pick at least 4 cathegories).
//
// 2.7 Find the maximum of two numbers.
let one = 45;
let two = 78;

if (one == two){
    console.log("Number " + one + " is equal to number " + two);
}else if (one > two){
    console.log("Number " + one + " is bigger than number " + two);
}else if (one < two){
    console.log("Number " + one + " is smaller than number " + two);
}

// 2.8 Find the maximum of 3 numbers.
