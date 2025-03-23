/*
function exprition 
arrow function 


Note:: the function its not statment its varible
Note:: consol.log();by defult return undefind
*/

//This is function declarition
function funcTest(name) {
  return `Alsalame aliqome ${name}`;
}

/*

let x =10;

its save in Main memory like :: 
x:10
funcTest :function(name){body}

Note ::
Function Expretion >> use function as value 
let x=10 ;here 10 its value 

let cluc =function (type){
body
} 
*/

//This is function Exprition
let truthe = function (type) {
  if (type == 1) {
    console.log("free palestine");
  }
  if (type == 2) {
    console.log("fu**k ISrael");
  } else {
    console.log("free palestine/fu**k ISrael");
  }
};
// console.log(desc);  Uncaught ReferenceError: desc is not defined

console.log(typeof funcTest); // tack the refranse
console.log(typeof funcTest("Ali")); //excountion

// Took a copy of the function reference, then executed it, stored the return value, and printed it.
const copyOFfunc = funcTest;
let greeter = copyOFfunc("sama");
console.log(greeter);

const CopyOFfun = funcTest("SAMER");
// console.log(CopyOFfun("Ramy")); ERROR >>why ?? becuse its not a function its String

//A callback function is a function passed as an argument to another function. When the main function is called, it can execute the callback function whenever needed and return its value.
function calculas(num1, num2, FrirstFunction, SecondFunction) {
  console.log(FrirstFunction(num1, num2));
  console.log(SecondFunction(num1, num2));
}
//call function
calculas(
  10,
  5,
  function sum(a, b) {
    return a + b;
  },
  function multiplication(a, z) {
    return a * z;
  }
);

function askUser(question, yes, no) {
  if (confirm(question)) yes();
  else no();
  console.log("Thank you for anwser");
}

const yes = function () {
  console.log("YOU are lorde in this place");
};
const No = function () {
  console.log("YOU are Fuc***ing idiot ..!");
};

askUser("Are you palestinen ?", yes, No);

/*
Function Declartion VS Function Expretion 
>>syntanx >> Function Declartion with name in script 
>> syntax >>Function Expretion  withOut name Sub of another syntax inside in expression 

                            *****   important   *****
Function Declartion u can use it befor or after declarition 
Function Expretion  u can use it only after declare

why?? 
because javaScript injen will search about Function Declartion to be visable  first 
and Function Expretion  will be unvisable at this time

*/

print(18);
function print(num) {
  console.log(num);
}
print(16);

// anotherprint(50); REEFRANCE ERROR ::
const anotherprint = function (num) {
  console.log(num);
};
anotherprint(90);

/*  Arrow Function    'its like function Exprition'

dosnt need name or function key word  just parathesses 

*/
let arrowSum = (a, b) => a + b;

let MultiplicationArrow = (a, b) => {
  console.log(a, b);
  return a * b;
};
console.log(arrowSum(10, 20));
console.log(MultiplicationArrow(10, 20));

let askuser = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
  console.log("Thank you for anwser");
};

askuser(
  "Are you palestinen ?",
  () => {
    console.log("YOU are lorde in this place");
  },
  () => {
    console.log("YOU are fu**ing idiot");
  }
);

let answer = prompt("do you love here");
console.log(answer);

console.log(null == null);
console.log(undefined == null);
console.log(undefined == undefined);

/* 
NOTES::
-- Debugging in the browser:
   Use debugger to pause execution and inspect values.

-- Logging:
   Use console.log to display values and track data flow.

-- Coding Style:
   Format the code properly for better readability and maintenance.
*/
