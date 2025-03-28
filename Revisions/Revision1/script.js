"use strict";
// Revision ::
/*
NOTES::
! JS enverment diffrent => brwoser enverment or server enverment or disckTop enverment 
The difference is that some things work with one but not the other. For example, `alert` does not work in a server environment.

!windo =>Global Object oF browser

!window Object in browser call => Dom Tree
!why we need to understande the the node enveroment ??
there alot of files need to run in server and another in browser 'cilent Side','Frontend enviermernt'

! -- in Enverment => Node Enverment JSEngin will be v8 engane
! 1. JavaScript Engines

! JavaScript can run in many different environments, such as web browsers, Node.JS (V8 Engine) or Bun for web servers, and Electron for desktop applications.

It can run on any device that has a special program called a JavaScript engine.

The JavaScript engine is responsible for running and executing JavaScript code.

Web browsers have an embedded engine sometimes called a JavaScript Virtual Machine.

! Different engines have different code-names. For example:

! V8 (Chromium Based Browsers - Chrome, Edge, and Opera)
! SpiderMonkey (Firefox Based Browsers - Firefox and Zen).
! Others (fun assignment search for it).

We separate lines with a semicolon (`;`) or by moving to a new line.

*/

//JavaScript Enveroment
// if (typeof window === "object") { }
if (typeof window !== "undefined") {// be this way the code will excuted in clint enveroment but in serverEnveroment will not excuted
    console.log(window);//is not difende in node enverment but in browser enverment exeste 
    console.log(this);
    // window.alert("Donia samer ghanem");// Since the alert Exists in window we can use it 
}

// how to excution the code in both envirment 
let alert = (window === undefined) ? function (massege) {
    console.log(massege);
} : window.alert;
// alert("This code must apply in both Enverment ");


// !JavaScript Varible

/* Differences between let, const and var:
 1. only variables declared with var will be available in
the window object.

*/

let x1 = "Alosh";//undifinde
const x3 = 50;//undifinde
var x2 = "bona";//bona

console.log(window.x1);//undifinde
console.log(window.x2);//bona
console.log(window.x3);//undifinde

/*
2. block-scoped: variables declared with let and const
will not be available outside the block (if, while, for,
etc.).

function-scoped: variables declared with const, let, and
var will not be available outside the function.
*/
let cond = true;
let testLet = 40;
let testConst = 70;
//In block scope (`if`, `while`, `for`...), variables declared inside are not accessible outside, except for `var`, which is accessible.
if (cond) {
    let q = 1;
    const qq = 11;
    var qqq = 111;
    console.log(q, qq, qqq, testLet, testConst);
}
// console.log(q);//Uncaught ReferenceError: q is not defined
// console.log(qq);//Uncaught ReferenceError: q is not defined
console.log(qqq);

// Variables inside a function are not accessible from outside, but if the variables are defined outside, they can be accessed from inside.

// const a = 10;
// let aa = 20;
// var aaa = 30;

function printSomthig() {
    const a = 10;
    let aa = 20;
    var aaa = 30;
    console.log(a, aa, aaa);
}
printSomthig();
console.log("-------------");

// console.log(a);
// console.log(aa);
// console.log(aaa);

//another example ::
let z = 10; //can change the value
const zz = 20;//can not change the value
var zzz = 30;//can change the value

function somthing() {
    // var ,let  You can modify values normally, but `const` does not allow reassignment.
    // let ,const  cant do re assign befor  declarition in this function
    // z = 100;//Uncaught ReferenceError: Cannot access 'z' before initialization
    // let z = 300;
    zzz = 200;//var zzz=200;
    var zzz = 0;//zzz=0;
    console.log(zzz);

}
// in strict Mode cannot use undeclared varible  NOTE=> React by defult use strict Mode 
// b1 = 10020;
// console.log(b1);

console.log(zzz);
somthing();
console.log(zzz);


/*
Data Type :: 
primitve DataType :
sting 
number 
boolean 
undifinde
null

UnPrimitve DataType::
object
Array
*/

//eaxple about undifinde null
function getMassage(hasSin, hasNotifcation) {
    if (!hasSin) return;//undifinde=> will end the excution Function

    //fetch notifcation form Data Base....

    return {
        massege: hasNotifcation ? "you have 12massage" : null,// ternary operator
        count: hasNotifcation ? 12 : 0// !null=>will  give Empty value
    }
}

let userNotifcationes = getMassage(true, true);
//Abood revue its not with lecture
console.log(userNotifcationes);
for (let element in userNotifcationes) {
    console.log(userNotifcationes[element]);

};


//another Example
function setSeiting(user, optiones) {
    if (!user) return;//undefinde
    if (!optiones) return {};// The user doesn't want settings or null.  



    let sitinges = {
        userName: user.user_name || "unkown_Value",
        thems: optiones.thems || "light",
        language: optiones.language || "en",
        hasNotifcation: optiones.hasNotifcation ?? true

    }

    return sitinges;

}
const user = {
    user_name: "Abood"
}
const Option = {
    them: "dark",
    language: "ar",
    hasNotifcation: false
}

let test = setSeiting(user, Option);
console.log(test);
for (let element in test) {
    console.log(test[element]);

};



//type OF convertion 
console.log(Number(""));
console.log(Number(false));
console.log(Number(null));
console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number("10"));
console.log(Number("10 Abood"));

console.log(String(0));
console.log(String(false));
console.log(String(true));
console.log(String(undefined));
console.log(String(null));
console.log(String(NaN));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(" "));

console.log("10" + 5);// string+ number //concat
console.log(10 - 5);




//comparisons
// > < <= >= corvite thier operandes to Numbers befor comparision
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);

//!Strange rule operator
console.log(null == 0);//false
console.log(null == undefined); //normal eqlauity


console.log(Number(undefined) == Number(null));//flase ,Number(null)=>NaN



console.log(Number(NaN)); //NaN
console.log(Number("String"));//NaN
console.log(Number(NaN) == Number("String"));//NaN


console.log(0 == false);
console.log(0 == true);
console.log(0 == 1);

console.log("Test" ? 10 : 20);// !turnary operator

console.log(true ?? false);
console.log(null ?? "Naheds");//nulish operator
console.log(undefined ?? "Naheds");//nulish operator

// And(&),OR(||),NoT(!),Nullish(??)
console.log("" || null || undefined || false || NaN);
console.log("" || false || true || null);

// 1. convert the operands to boolean values before applying the operator -> false || false || false || false.

// 2. return the first truthy value or the last value if all are falsy -> false (NaN).

// 3. convert the result to the original type -> NaN.

console.log(true && 10 && 1 && "Shawqi");
console.log(true && null && 1 && "Shawqi");


// 1. convert the operands to boolean values before applying
// the operator -> true || true || true || true.

// 2. return the first falsy value or the last value if all
// are truthy -> true ("Shawqi").

// 3. convert the result to the original type -> "Shawqi"
// (string).

if (NaN) {
    console.log("truthly");

} else {
    console.log("falsely");

}


let operator_1 = true || console.log("test") || false;
console.log(operator_1);

let operator_2 = false || console.log("test") || true;//reurn value of consolLog undifinde
console.log(operator_2);

function doSomthing() {
    console.log("do Somthig after or");
    return {
        name: "Abood",
        age: 20
    }
}

let UserFromDB;

//featch data from data base

let user0 = UserFromDB || doSomthing();
console.log(user0);


console.log(!0);
console.log(!!0);
console.log(!!0 == Boolean(0));
console.log(!!0 === Boolean(0));

//loops
function factoriall(numuber) {
    let result = 1;
    for (let i = 1; i <= numuber; i++) {
        result *= i;
    }
    return result;
}
console.log(factoriall(5));


let userCart = {};

function insertItemsCart(cart, quantity) {
    let i = 0;
    while (i < quantity) {
        const ItemName = prompt("Enter item name", "Test");
        const itemQuantity = prompt("Enter item Quantity", 2);
        const ItemPrice = prompt("Enter item Price", 10);

        cart[ItemName] = {
            quantitye: itemQuantity,
            price: ItemPrice
        }


        i++;
    }


}
let outPut = {
    apple: {
        quantity: 2,
        price: 50
    },
    egges: {
        quantity: 2,
        price: 50
    },
    Orange: {
        quantity: 2,
        price: 50
    }
}

insertItemsCart(userCart, 2);
console.log(userCart);



function culculationPrice(cart) {
    let prices = {}
    for (let key in cart) {
        // console.log(cart[key]);
        //apple.price=cart.appple.price*cart.apple.quantity
        prices[`${key}_Price`] = cart[key].price * cart[key].quantitye;
    }

    let TotalPrice = 0;
    for (let key in prices) {
        TotalPrice += prices[key];
    }


    // console.log(price);
    // console.log(TotalPrice);


    return {
        TotalPrice,
        prices
    }
}

// console.log(culculationPrice(userCart));


//!function
function Declar() {
    console.log("DEclarittion");
    greet();
    // gater();  ReferenceError: Cannot access 'gater' before initialization
    // at Declar 
}
const Exprition = function exp() {
    console.log("Exprition");

}
Declar();
Exprition();
// exp();Uncaught ReferenceError: exp is not defined

function anotherfunc(callback, runcallback) {
    if (runcallback) {
        callback();
    }
}
anotherfunc(() => {
    console.log("CallBack Function ");

}, true);



function greet() {
    console.log("greet function");
}

let gater = function () {
    console.log("grater function");
}

const sum = (a, b) => a + b;
