"use strict";
/*  

Object Methods, 'this' Keyword
objects are usually created to represent entities of the real world 'Complex Data', such as users,
orders, etc.



and in the real world, the user can act: select something from the shopping cart, log
in, log out, etc.

actions are represented in JavaScript by function. I You, 2 weeks ago
New: Enhance-

a function that is a property of an object is called a method.

of course we can use a pre-declared function as a method.

17.1 Object-Oriented Programming (OOP)

when we write our code using objects to represent entities, that is called
object-oriented programming (OOP).

-O0P is a big thing, an interesting science of its own. How to use the right entities?

How to organize the interaction between them?... etc. 

*/
const user = {
    name: "Ali",
    age: 20,
};

console.log(user);

//we use function to represent about action 
// -- The object include information  And actiones ,information=>proparty thier value primitve type
user.saySomThing = () => {
    console.log("Alssalam alicom evry one");
};

user.saySomThing();

// can pre-Declarition

function responseSalam() {
    console.log("Walekom Al salam ...");
}
user.responseSalam = responseSalam;

user.responseSalam();

//Methode Sort-Hande

user.MidName = "Soliman";

const admin = {
    name: "Admin",
    userName: "Admin0_0",
    // Assign function directly to proparty  object as u see its exprition function
    DoSomting: function () {
        console.log("I want play this game plase");
    },
    TheGamePrice() {
        console.log("30$ Bounde");
    },
    saySomThing: user.saySomThing,
    responseSalam: responseSalam,
};

admin.DoSomting();
admin.saySomThing();
admin.responseSalam();
admin.TheGamePrice();

//this keyWord => the value oF tihs current Object  use to ineract "interconect"with information in the same object
let customer = {
    Name: "noha",
    username: "noha210",
    age: 30,
    getinfo() {
        console.log(this);
        // console.log(
        //   `Name ::${customer.Name}, username :: ${customer.username} , age:: ${customer.age}`
        // );
        console.log(
            `Name ::${this.Name}, username :: ${this.username} , age:: ${this.age}`
        );
    },
};
customer.getinfo();
let test = customer;
test.getinfo();
customer = null;
test.Name = "Amer";
test.age = 23;
test.username = "Amera1212";
test.getinfo();

// !Note => this wihtSpace named " main code flow"
/*
 this is not bound

 1. in "non-strict mode", the value of this keyword inside normal function is the
(window) global object

 2. in "strict mode", the value of this keyword inside normal function is undefined
 3. in methods, the value of this keyword is the object that calls the method
 4. in nested functions (inside methods), the value of this keyword is the same as
rule no. 1 and 2

 5. arrow functions do not have their own this keyword and they inherit it from the
outer function
*/

/*
1. normal function or arrow function? ->
normal function -> is it in strict mode? yes -> undefined | no -> (window) global object
arrow function -> always (window) global object

2. normal method or arrow method? ->
normal method -> the current object
arrow method -> (window) global object

*/

// "This" key Word is not Bound using this any where

var nameo = "moansore"; //This varible storid in global object "window Object" Exp:: varible storge in global object => promt() ,alert(),cosole.log()

//normal function
let a = function () {
    //   console.log(this.nameo); //this=>Reffer to global object
    this.alert("Aslam Alicom"); //this=>Reffer to global object
    console.log(window === this);
    console.log(window.nameo);
};
// a();

// in strict mode=> '"use strict";'=>write the firstLine the value of 'This KeyWord'=>undifinde
let b = function () {
    console.log(this);
};
b(); //return  undifinde

let Object = {
    name: "Shawqi Hatem",
    intruduseYourSelf: function () {
        console.log(this); //Current Object
        let nanafun = function () {
            console.log(this); //global Object "Window Object"
        };
    },

    arrwfunction: () => {
        console.log(
            this
        ); /*this is the current object because arrow function do not have their own
      'this'Key word will take the same value of  puter function  */
    },
};
Object.intruduseYourSelf();
Object.arrwfunction();

console.log(this); //withOut Function  => global Object (windw)

// arrow Function
let arr = () => {
    console.log(this); //Window
};

//  Task-01
let creatinfo = function (name) {
    return {
        name,
        ref: this,
    };
};
let data = creatinfo("Abood");
console.log(data.ref);

//    Task-02

const creatdata = function (name, age) {
    let ob = {
        name,
        age,
        ref: function () {
            this.ref = this;
        },
    };
    creatdata.ref;
    return ob;
};

const teste = creatdata("Adnan", 40);
console.log(test);



let otherConcept = {
    name: "A",
    age: 10,
    nada: function () {
        console.log(this);
        let r = function () {
            console.log(this);
        }
        r();
        let t = () => {
            console.log(this);

        }
        t();
    }

}
otherConcept.nada;
//Note :: normal Function Effcting with "USE Strict "

let calculation = {
    a: undefined,
    b: undefined,
    input: function (a, b) {
        this.a = a;
        this.b = b;
    },
    sum: function () {
        return this.a + this.b;
    },
    multiplication: function () {
        return this.a * this.b

    },
    sub: function () {
        return this.a - this.b;
    },
    modie: function () {
        return this.a / this.b;
    }

}
console.log(calculation);
calculation.input(10, 15);
console.log(calculation);
console.log(calculation.multiplication());
console.log(calculation.sum());
console.log(calculation.sub());
console.log(calculation.modie());
