// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign a number, and log the value to the console.
var taskOne = 25;
console.log(taskOne);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let taskTwo = "Hello World!";
console.log(taskTwo);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const taskThree = true;
console.log(taskThree);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let number = 7;
var firstName = "Hamza";
const response = true;

let data = {
    fullName: "Aslam Ali",
    age: 49,
    currentlyworking: true
}

let arr = [23, 45, 39, 20, 3, 6, 7]

console.log(typeof(number));
console.log(typeof(firstName));
console.log(typeof(response));
console.log(typeof(data));
console.log(typeof(arr));

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let email = 'abc@gmail.com';
console.log(email);

// Now changing the value of email.
email = 'xyz@gmail.com';
console.log(email);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
 const alive = ture;
 console.log(alive);

 // Now changing the value of alive.
alive = false;
console.log(alive);
// -------------------------------------------------------
// Result: Find an error which shows that the value of const variable cannot be update.
// -------------------------------------------------------

// Feature Request:
// Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

var subject = "Programming";
let marks = 87;
const isPass = true;

let student = {
    studentName : 'Hamza',
    studentAge : 22,
    subjectsEnroll : 4,
    isEligible : true
}

const MarksArr = [56, 87, 92, 76];

// Values Console
console.log(subject);
console.log(marks);
console.log(isPass);
console.log(student);
console.log(MarksArr);

// DataType Console
console.log(typeof(subject));
console.log(typeof(marks));
console.log(typeof(isPass));
console.log(typeof(student));
console.log(typeof(MarksArr));

// Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let isEmployed = ture;
console.log(isEmployed);

// Reassigning the vaule to let
isEmployed = false;
console.log(isEmployed);

// Reassignment with const
const RemoteWorking = "Yes";
console.log(RemoteWorking);

// Reassigning the value to const
RemoteWorking = "No";
console.log(RemoteWorking);

// Result: When we reassign the value to let variable is can change easily. But when we change the value of cosnt variable is shows the error that we cannot change the const variable value in a program.


// -------------------------------------------------------
//           DAY 1 CHALLENGE COMPLETED
// -------------------------------------------------------
