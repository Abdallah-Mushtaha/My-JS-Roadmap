"use strict";
/*
Methods Of Primitives
JavaScript allows us to work with primitives as if they were objects.
it also provides methods to call as such.
but how does it work if primitives are not objects?
a primitive is a value of a single thing (string, number, bigint, boolean, symbol, null, and undefined).
an object is capable of storing multiple values as properties ({name: "Shawqi"}).

there is other kinds of objects in JavaScript such as functions and arrays.
one of the best things about objects is that we can store a function as one of its properties
(we called it methods).

there are many built-in objects already exists and they have different properties and methods (we will discover them soon).


there are many built-in objects already exists and they have different properties and methods (we will discover them soon).example: MAth.
but their features come with a cost, objects are heavier than primitives, they require additional resources to support the internal machinery

 A Primitive As An Object
a paradox faced by the creator of JavaScript.
these are many things one would want to do with a primitive, like a string or a number.
it would be great to access them using methods.   
also, primitives must be as fast and light-weight as possible.
the solution? primitives are still primitive, a single value, as desired.
the language allows access to methods and properties of strings, numbers, and booleans.

in order for that to work, a special "object wrapper" that provides the extra functionality is created, and then is destroyed.
the "object wrappers" are different for each primitive type and are called String, Number, and Boolean.   
for example, a string is a primitive.
the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods like toUpperCase().

the methods run and return a new string.
then the special object is destroyed, leaving the primitive text alone.
so primitives can provide methods, but they still remain light-weight.

the JavaScript engine highly optimizes this process, it may even skip the creation of the extra object at all, but it must still adhere to the specification and behave as if it creates one.
constructors String, Number, and Boolean are for internal use only.=>
    Meaning, it's not necessary to write `new` when using it, right? It's a constructor, but the JavaScript engine handles it automatically without our intervention.


some languages like Java allow us to explicitly create "wrapper objects" for primitives using a syntax like new Number(1), in JavaScript that is also possible for historical reasons, but highly unrecommended, things will go crazy in several places.

null/undefined have no methods. they are the exceptions, they have no corresponding "wrapper objects" and provide no methods.


Numbers
in modern JavaScript there are two types of numbers: regular numbers and BigInt numbers.
more ways to write a number:
underscore syntactic sugar: 1_000_000.
e syntactic sugar: 1e9 -> 1_000_000_000 / 1e3 -> 0.001.
toString, Hex, Binary, and Octal Numbers (fun assignment, search for it).

 Rounding
rounding is one of the most used operations when working with numbers.
Math is one of the built-in objects in JavaScript.
Math.floor() rounds down: 3.1 becomes 3, -1.1 becomes -2.
Math.ceil() rounds up: 3.1 becomes 4, -1.1 becomes -1.
Math.round() rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes1 4. In the middle case 3.5 becomes 4 and -3.5 becomes -3

    Floor  Ceil
N

1.1 I  1      2
1.5    1      2

1.9    1      2
-1.1   -2     -1

-1.5   -2     -1
-1.9   -2     -1



Math.trunc() removes anything after the decimal point without rounding 3.1 becomes 3, -1.1 becomes 1.
toFixed(n: number) rounds the number to n digits after the point and returns a string representation of the result. if the decimal part is shorter than required, zeros are appended to the end.
22.2 Imprecise Calculations

 Imprecise Calculations
internally, a (regular) number (not BigInt) is represented in 64-bit format, so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.
if a number is really huge, it may overflow the 64-bit storage and become a special numeric value1 
it happens quite often the loss of precision.



*/

//NOTE:: New iformation,revistion The diffrent between primitive and Non-primitive

let Primitve = "Abood Ramez";
console.log(Primitve.length);
console.log(Primitve.startsWith("Abo"));
console.log(Primitve.toUpperCase());
console.log("-------");

let num1 = 1;
let num2 = Number(1);
console.log(num1 === num2);

let num3 = new Number(num2);
console.log(num3);

if (Number(0)) {
    console.log("trouthly");
} else {
    console.log("Falsey");
}

let StringName = "String";
// StringName.num = 10;
// console.log(StringName.num);Uncaught TypeError: Cannot create property 'num' on string 'String'

console.log("-------");

let User = {
    name: "Abood Ramez",
    age: 20,
    Welcom() {
        console.log("Welcome " + this.name);
    },
};

let User_2 = User;
User_2.name = "Shawqi";
console.log(User.name);
console.log(User === User_2);

console.log(typeof String); // =>
console.log(typeof Number); // =>    >>have wrapper object but null ,undefined  does not have
console.log(typeof Boolean); // =>

//After finishing use wrapper object it will be destroyed by JavaScriptEngine by compiler

//Note:: in defult consol.log(); Return type is undefined
// console.log.name; now its Object
// null ,undefined  NOt object
// (new Array()).map =>Array its Object another syntax []

/*
Memory Allocation:
primitve =>"Abood Ramez"

User =>Address

Address =>{name:.....}

*/

//Methods of Numberes...
console.log("----Methods of Numberes-----");
console.log(1_000_000);
console.log(2_000_000);
console.log(3_000);

console.log(1e3); //=>1 * 1000;
console.log(4e4);//=>4*10000

console.log(2e9); //=>2 * 1000000000;

console.log(2.5e8); //=> 2.5 * 100000000
console.log(1e-6); //=> 1 * 0.000001 1/1000000
console.log(2e-3); //=> 2 * 0.002 2/1000
console.log(2e-2);//=>2*2/100


/*  
 Floor    Ceil    N

 1.1 I     1      2
 1.5       1      2

 1.9       1      2
-1.1      -2     -1

-1.5      -2     -1
-1.9      -2     -1

*/
console.log("----Math.floor-----");
// Round down.

console.log(Math.floor(1.1));
console.log(Math.floor(1.5));
console.log(Math.floor(1.9));
console.log(Math.floor(-1.1));
console.log(Math.floor(-1.5));
console.log(Math.floor(-1.9));
console.log("----Math.ceil-----");
// Round up.

console.log(Math.ceil(1.1));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.9));
console.log(Math.ceil(-1.1));
console.log(Math.ceil(-1.5));
console.log(Math.ceil(-1.9));
console.log("----Math.round-----");
// Rounding up from 5 and above.

console.log(Math.round(1.1));
console.log(Math.round(1.5));
console.log(Math.round(1.9));
console.log(Math.round(-1.1));
console.log(Math.round(-1.5));
console.log(Math.round(-1.9));
console.log(Math.round(-5.6));


console.log("----Math.trunc-----");
// Removing decimal points, it eliminates fractions.

console.log(Math.trunc(1.1));
console.log(Math.trunc(1.5));
console.log(Math.trunc(1.9));
console.log(Math.trunc(-1.1));
console.log(Math.trunc(-1.5));
console.log(Math.trunc(-145.546554));

console.log(Math.trunc(-1.9));
console.log("-----toFixed----");

// The number of decimal places to which it will be rounded.

console.log((1.25897).toFixed(3));
console.log((1.25897).toFixed(2));
console.log(+(1.25897).toFixed(3));

console.log((1.25897).toFixed(1)); // !return string
console.log(+(1.25897).toFixed(5)); // to return number add + before toFixed
console.log("---------");
console.log(+(0.4 + 0.2)); // the way to convert to number

/*
Disk Space: 256 GB (SSD or HDD)

Memory Space: 8 GB (RAM)

8 Bit: 0-1-0-1-0-1-0-1 (1 Byte).       (0,1)=> asymble code (Machine Code)
1024 Byte -> 1 KiloByte

1024 Kilo-Byte -> 1 MegaByte
1024 Mega-Byte -> 1 GigaByte

-1.12
number variable: 64-bit (8 Bytes)
64 -> 52-bit for digits + 11-bit for decimal point + 1-bit for the sign

consol.log(9e3000); => Infinity =>OVERFLOW (the number is too big to be stored in 64-bit)

consider this: 0.1 + 0.2 === 0.3 (false?) / 0.1 + 0.2 === 0.30000000000000004 (true?).
why does this happen? a number is stored in memory in its binary form, a sequence of bits - ones and zeros. but frictions like 0.1 and 0.2 that look simple in the decimal numeric system are actually unending frictions in their binary form.
In decimal notation, **1/3** is represented as the repeating decimal **0.333333...**.  
Similarly, in the **binary system**, numbers like **0.1** and **0.2** are also repeating decimals.  
That's why they **cannot be represented exactly** in binary.

0.1 is 1/10, one-tenth in the decimal numeric system, such numbers are easily representable. compare it to 1/3 one-third. it becomes an endless fraction 0.333333(3).


there is no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal friction.

the numeric format (IEEE-754) solves this by rounding to the nearest possible number. these rounding rules Normally, it prevents us from seeing the "tiny precision loss," but it exists.  

Repeating decimals and other imprecise numbers are rounded using `toFixed()`.  
Sometimes, due to the way numbers are stored and represented, there is no 100% accurate representation, leaving a small fraction at times.

we can see this in actions using 0.1.toFixed(20). and when we sum two numbers, their "precision loss" add up. that is why 0.1 + 0.2 is not exactly 0.3.
not only JavaScript has this issue. it exists in many other programming languages.

isNaN and isFinite
NaN, Infinity, and -Infinity are special numeric values but not normal numbers, so there are special functions to check for them: isNaN and isFinite.
!isNaN converts its argument to a number and then tests it for being NaN.
!isFinite converts its argument to a number and returns true if it is a regular number.


parseInt() and parseFloat()
they read a number from a string until they can not.
parseInt() reads integers, parseFloat() reads floating-point numbers.
parseInt("100rem") -> 100
parseFloat("100.20rem") -> 100.20

*/
console.log("----- isNaN , isFinite----");

//  isNaN , isFinite

let input = "Somthig";
// its check if the value is number or not if its number return false if not return true

console.log(isNaN(input)); //true
console.log(isNaN(true)); 1 //false
console.log(isNaN(false)); 0//false
console.log(isNaN("")); 0//false
console.log(isNaN(null)); 0//0 false
console.log(isNaN(undefined)); //NaN =>true

// console.log(input === NaN);
// console.log(NaN === NaN); // !false because `NaN` is not equal to anything and not even equal to itself.
console.log("----- isFinite----");
//in infinity its check if the value is number or infinity or -infinity if one of them return false not return true
// console.log(

//   typeof Infinity
// );

// console.log(Infinity === Infinity);
console.log(isFinite(input));
console.log(isFinite(true)); 1
console.log(isFinite(false)); 0
console.log(isFinite("")); 0
console.log(isFinite(null)); 0
console.log(isFinite(undefined));

console.log("-----ParseINt,ParceFlout----");
let height = "25.60rem";
let width = "100rem100";
let font = "rem10";

console.log(parseInt(width));
console.log(parseInt(font));
console.log(parseFloat(height));

console.log("-----Random----");
// It takes a random reading between 0 and 1 from RAM readings.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.min(5, 2, 4, 8));
console.log(Math.max(5, 2, 4, 8));
console.log(Math.pow(5, 2));
