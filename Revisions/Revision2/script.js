"use strict";

//function Declaration, Function Expiration,Arrow Function 

n();
function n() {
    console.log("asdaa");
}
// s();ReferenceError: Cannot access 's' before initialization
let s = function a() {
    console.log("jdkamkldsa");
};

s();
n();

const a = "Ali";

// a();//ReferenceError: a is not defined

// if a is defined: TypeError: s is not a function
// if a is not defined: ReferenceError: s is not defined

//Arrow function (spical type of function expritions)
let arr = () => {
    console.log("Arrow Function...");
};
arr();
let arrow = (n) => n + 10;
console.log(arrow(10));

(() => {
    console.log("Abood habibe");
})(); //imidtiatle invoke function expritiones

//global/locaal varible var=>Stored window
const q = 10;
let qq = 12;
var qqq = 13;

// console.log(window.q);
// console.log(window.qq);
// console.log(window.qqq);

//normal function +withOut strict =>window
//normal function +with strict =>undifinde
function greet(name_1, name_2, name_3) {
    //   "use strict";

    // Accessing global varible
    //   console.log(window.q);
    //   console.log(window.qq);
    //   console.log(window.qqq);

    // Accessing global varible using ::this
    console.log(this?.q);
    console.log(this?.qq);
    console.log(this?.qqq);
    console.log("Accessing Global Variables Using: `this`");

    //NOTES ::
    // this in normal functions + non-strict mode: window (global object).

    // this in normal functions + strict mode: undefined.
    // we used optional chaining to ensure that we will not face any errors..
    // even if we are using strict mode.

    console.log(`AsSalam Alaikum, ${this?.q}`); //undifind not object
    console.log(`AsSalam Alaikum, ${this?.qq}`);
    console.log(`AsSalam Alaikum, ${this?.qqq}`);
}
greet();

/*
We understand that this in strict mode is equal to window if it's outside of a function, whether strict mode is enabled or not. But if it's inside
function  
strict => undifind
nonStrict=>window

-------------------------------------------------------------------------------------------
function type  ->                  normal  ->  mode  ->                strict  ->  undefined
                                                     -> non-strict ->              window (global object).

          -> arrow -> window

--------------------------------------------------------------------------------------------
*/

//Accessing Varble in functions=>is it Paramerter?/Local Varible =>yes=>inerValue
//                                                               =>NO =>outer value
function aa(name = "Ehab", naame) {
    let namee = name + " " + (naame || "Samer");
    console.log(name ?? "Ramez");
    console.log(naame ?? "Ibra");
    console.log(namee ?? "Abood");
}

aa("Hacona", "Matata");

let cc = () => {
    //inhert the outer this
    console.log(this);
};

//A callback function is a function that is called inside another function based on a certain condition.
function doSom(condition, truthlyFUN, FalsyFun) {
    if (condition) truthlyFUN();
    else FalsyFun();
}
doSom(
    10 > 20,
    () => {
        console.log("TRUE condition");
    },
    () => {
        console.log("ERORR Condition");
    }
);

// !Object .. NOTE=> function,Arrays =>type OF Object
// const user = {}|| new Object();

const Setinges = { themes: "Dark" };
const user = {
    name: "Ali",
    age: 20,
    ["@" + "Username"]: "Alosh@hotmail.com",
    Setinges,
};
user.name = "Abood Ramez";
user.collge = "information Technology";
//computed value
let key = "gpa";
user[key] = 65;

console.log(user);
console.log(user["@Username"]);

//proparty Existance chicke
console.log(!user.id ? "NOT EXIST ID" : "EXIST ID");
console.log(!(user.id in user) ? "NOT EXIST ID" : "EXIST ID");

//loop
console.log("--------");

for (let key in user) {
    console.log(
        `${key} :: ${typeof user[key] === "object" ? "THIS is Object" : user[key]}`
    );
}

//comparison
// console.log({} === {});

//Cloning
// let user_2 = Object.assign({}, user);
let user_2 = structuredClone(user);

user_2.name = "NOha";
user_2.Setinges.themes = "light";
console.log(user_2.Setinges.themes === user.Setinges.themes);
console.log(user_2.Setinges.themes, user.Setinges.themes);
console.log(user.name === user_2.name);
console.log(user_2 === user);
console.log("--------");

//how StructerClone works  do function to understande
let objec = {
    first: "1",
    second: "2",
    third: "3",
    for: {
        first: 5,
        second: 6,
        third: 90,
    },
};
//imperative example about how to clone object works in js
function AboodClone(Ob) {
    if (typeof Ob != "object") {
        console.log("u Should insert Object not any thing else");

        return;//undifined
    }
    let ObjectColon = {};

    for (const key in Ob) {
        ObjectColon[key] = {};

        if (typeof Ob[key] === "object") {
            for (let nestedKey in Ob[key]) {
                ObjectColon[key][nestedKey] = Ob[key][nestedKey];
            }
        } else {
            ObjectColon[key] = Ob[key];
        }
    }

    return ObjectColon;
}




const colne = AboodClone(objec);

objec.third = "55";
objec.for.first = 88;
console.log(objec, colne);

console.log(objec === colne);
console.log("--------");

function AboodStructer(Source = {}) {
    /*
      shawqiStructured(s_1): execution no. 1
  - create e_1: {}
  - loop over s_1:
    - e_1.first = s_1.first
    - e_1.second = s_1.second
    - e_1.third = s_1.third
    - s_1.fourth is an object!
      - shawqiStructured(s_2 = s_1.fourth): execution no. 2
        - create e_2: {}
        - loop over s_2:
          - e_2.first = s_2.first
          - e_2.second = s_2.second
          - s_2.third is an object!
            - shawqiStructured(s_3 = s_2.third): execution no. 3
              - create e_3: {} 
              - loop over s_3:
                   - e_3.first = s_3.first
                   - e_3.second = s_3.second
                      - return e_3
                   - assign e_2.third = return e_3
                          - return e_2
              - assign e_1.fourth = e_2
  
      - return e_1
              
      */
    let clone = {};
    for (let key in Source) {
        if (typeof Source[key] === "object") {
            clone[key] = AboodStructer(Source[key]); //Recursion
        } else clone[key] = Source[key];
    }
    return clone;
}




let anotherClone = AboodStructer(objec);
objec.for.third = 975;
console.log(objec, anotherClone);
console.log(objec.for.first === anotherClone.for.first);

//using 'This'keyword in object
/*
method Type =>normal function=>this=>current object
            =>arrow function=>this=>window

*/

let Object = {
    name: "Abood",
    age: 20,

    greet: function () {
        console.log(`Hello, ${this.name}`); //curent object

        const nestedFun = function () {
            console.log(this);
        };
        nestedFun();
    },
    greet_2: () => {
        console.log(`Hello, ${this.name}`); //windo ...=>inhert the outer this
        console.log(this);
    },
};

Object.greet();
// Object.greet_2();







// Coustructors
function User(name) {
    // this={}
    //new keyword did the following:
    //1- create empty object and assign it to this:'this={}'.
    //2-the function body executed (and it supposed to modify this keyword).
    //3-return this.
    this.name = name;
    //return this
}

let TEstName = new User("Dinaa");
console.log(TEstName);

let object_1 = { name: "hader" };
let Object_2 = { name: "israa" };
function say_name() {
    console.log(this.name);
}
say_name.bind(object_1)();// ! Change the value of `this` and make it the object I want to bind.
say_name.bind(Object_2)();

function aBOOD(counstr, name) {
    let myThis = {};

    counstr.bind(myThis)(name);
    return myThis;
}

let testfun = aBOOD(User, "LOLA");
console.log(testfun);

function say(name) {
    console.log(this.name);
}

let testobject = { name: "Alosth" };

// say(testobject);//undefined.name ==>undifind its not object
say.bind(testobject)();
