# Programming from scratch
To run the code you write in the file index.ts:

> npx tsc

> node dist/index.js

Exercices will be done on a separate branch
#

1. Variables

Basic variable types
There are three cathegories of **basic** variable types: boolean, number, string. 

Boolean can be either true or false. 

Numbers can be further splitter into short, int long, double, depending on the need, but in TypeScript there's only `number` type that covers all. 

And string type used to store characters.

To declare a variable in TS one can use the syntax: 

`let variableName: number = 1;`

where `let` is used to let TS know that the name afterwards will be a new variable.

`varaiableName` can be any name one wants as long as it starts with a letter or underscore.

`: number` defines the type of the declared variable (it is optional in the language, but mandatory throughout the course)

` = 1` is assigning the variable to a value;

All of these create a statement, or an instruction, that TS will execute. Statements are executed one at the time, one after the other.

Statements are separated by a new line and/or semicolon. Throughout the course the semicolon is mandatory since it it a good practice.

# 

There are some basic operations that are available with the types of boolean and number.

All the variables support the assignment operation `=` where the left side gets assigned the value from the right.

And the equality operation `===` which compares whether the values from the left and right side are the same. It works with both values and variables.

Try using the assignment operator when there's a number on both sides (e.g. `1 = 2`). What is the expected output and the actual output. Why?

For Boolean there are logical operators of and (&&), or (||) and not (!).

For Number there are mathematical operations such as addition (+), substraction (-), multiplication (*), division (/) and modulo (%) which returns the remainder of the division.

Exercices:

1.1 Declare two variables of type boolean and apply the boolean unary and binary operators. assign different values and try again.

1.2 Declare two variables of type number. Show the sum of the two.

1.3 Declare two variables of type number. Add both to a `sum` variable. The first one add twice. The second one add three times to the sum.

1.4 Declare a variable of type number. Increment and decrement it in two different methods.

1.5 Declare two variables with value 0.1 and 0.2. Assign the multiplication result to another variable and show it. Discuss the result.

1.6 Declare a variable with a value over 100. Show the unitary digit and the tenths digit (e.g. for 123 unitary it's 3 and tenths is 2, with the sum of 5). Sum them in a different variable.

1.7 Declare a variable with a value over 100. Show the sum of the digits (e.g. for 123 it's 1 + 2 + 3 = 6).

1.8 Declare a variable and assign 3 different values to it. Check for each value wether the variable is an even or an odd number (show true for even and false for odd on the console).

Note: To show the result on the screen just use the console.log(value).
Each exercise should be clearly separated. Use comments in the code to describe the steps (like thinking aloud).

# 

2. Conditional structures

On a flow of a program, some instructions may need to be skipped because they are not necessary. To check for conditions, the most used instruction is `if`.

Since `if` is an instruction, a block of code inside an if can contain another if. 

It is composed out of two parts: the part that contains the code when the condition is true.

```
let isOne: boolean = true;
if (isOne) {
    console.log('is 1');
}
```

And optionally the part to be executed when the condition is false.


```
let isOne: boolean = true;
if (isOne) {
    console.log('is 1');
} else {
    console.log('is not 1');
}
```

Multiple if conditions can be combined to create a more complex workflow.

```
let isOne: boolean = true;
let isTwo: boolean = false;

if (isOne) {
    console.log('is 1');
} else if (isTwo) {
    console.log('is 2');
} else {
    console.log('is not 1 nor 2');
}
```

In some situations, it is possible to compare a variable against a known set of expected values. This can be done by using an if, but becones herd to read quite easy.

Instead, a `switch` statement can be used.

```
let knownNumber: number = 10;
switch (knownNumber) {
    case 0: console.log(0);
            break;
    case 1: console.log('not 0 but 1')
            break;
    case 2: console.log('increased to 2')
            break;
    default: 
            console.log('otehr number')
}
```

`switch` is a case-based instruction that compares the values to be equal with the value from the case. It is good practice to have exact values at the case, no variables, since not all languages support switch instructions with variables.

The default branch is optional, but good practice, to catch an unexpected case.

Try having a switch with and without the break; instruction. What are your observations. Put break only at certain cases. What happens?

Exercices:

2.1 Check wether a variable of type number is even or odd, showing an appropriate message on the screen.

2.2 Check wether two variables are equal or not ans show an appropriate message on the screen

2.3 Check wether a variable contains a number that is positive or negative.

2.4 Check wether a year is a leap year or not.

2.5 Check wether a person is able to vote based on their age as input.

2.6 The program has input the height of a person and should be able to cathegorize the person (pick at least 4 cathegories).

2.7 Find the maximum of two numbers.

2.8 Find the maximum of 3 numbers.

2.9 Given 5 number variables, find the average and show wether it is positive or negative.

2.10 Given the temperature outside, classify the weather (Freezing, Very Cold, Cold, Normal, Pleasant, Hot)

2.11 Given three inputs that are the lengths of a triangle, find out wether it is Equilateral, Isosceles or other

2.12 Given a letter, check if that letter is a vowel or a consonant

2.13 Given two values the value in the bank account before a transaction and after a transaction. Show whether it was a profit or a loss the transaction.

2.14 Given a digit display the corresponding spelling (e.g. for 4 -> Four).

#

3. Repetitive structures

while / for

#

4. Arrays

#

5. Functions

#

6. Algorithms

#

7. JS Objects (Structures)

#

8. CRUD operations

#

9. Domain Structures

#

10. Layered architecture

#

11. OOP

#

12. Collections (List, Set, Map) + implementation

# 

13. Practice

#

14. SOLID

#

15. Dependency injection

#

16. HTTP

#

17. Generics <>



