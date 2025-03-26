// "use strict";

/*
-- constructor , Operator "NEW"
-- Optinal Chaning
-- Methouds Of Pramitves
-- Primitive AS an Object

In short, a constructor is like a schema or a clone, so I don’t have to repeatedly create the same data for different people. It allows for creating similar copies or instances of an object.

let user={
name:"",
}
let age={
name:"",
}
- Instead of repeating this process, we create a copy of it using the constructor with `new`.
constructor its ticknikly function  with tow convinctiones

# You're not forced to do it, and it won't throw an error in the result, but it will cause a logical error.
Constructor, Operator 'new
the regular (...) syntax allows us to create on object, but often we need to create many
similar objects, like multiple users, menu items, and so on.

that can be done using constructors functions and "new" operator.

a constructor function is technically a function with two conventions: 1. they are named
with a capital letter first. 2. they should be executed using the new operator.
You,

18.1 What Happens When We Use new With A Constructor Function?

the new operator creates a new empty object and assigns it to this.

the function body executes.

the function returns the this value.

this is the main purpose of constructors: to create and object and return it (in order
to implement reusable object creation code).

technically, any function can be used as a constructor (except for the arrow functions).

18.2 Constructor Mode Test: new.target

*/

function greet() {

    console.log(`AlSalam Alikom baby i am ${this.name} have data od Berith ${this.dop}  and i miss you .my age ${this.age}`);

}

const user = {
    name: "Noman",
    age: 20,
    greet,
    dop: "2002-01-23"
}

console.log(user);
user.greet();
// Suppose I have 20 parameters of data, and I have to modify each person I create manually—this isn't practical.  
// The solution is to create a copy of this object using the constructor and `new`.

const nada = user;
nada.name = "nada";
nada.age = 22;


//counstracur Function

function User(name, age, dop = "0000-00-00") {
    //new=> its do this={}
    this.name = name;
    this.age = age;
    this.greet = greet;
    this.dop = dop;

    // this{name:name,age:age}
    // return this 
    // console.log(this);//normal function withOut strict  windowObject ,with strict undifinde 

}
let Mohamed = new User("Mohamed", 33);
console.log(Mohamed);
Mohamed.greet();

let Ramez = new User("Ramez", 50);
console.log(Ramez);
Ramez.greet();

let Rajab = new User("Rajab", 40, "2023-05-11");
console.log(Rajab);
Rajab.greet();
/*
The idea is that instead of writing like this to define a new object.
 const nada = user;
nada.name = "nada";
nada.age = 22;
I started writing and defining it in a single line.
let Rajab = new User("Rajab", 40, "2023-05-11");
And we mentioned the two conditions for the constructor.
*/

// programatly  true but logicaly ERROR ..
function ErrorLog(code, massege) {
    //this {}
    console.log("ERROR !");
    this.code = code,
        this.massege = massege
    //return this
}

//another example

let code = new ErrorLog(404, "THER is no ERROR");
console.log(code.code);


//another example
//! There is a difference between using `new` and not using `new`.
function Cart() {
    // this {}
    console.log("You should add some product for cart in cart function");
    //return this
}


Cart();

console.log(new Cart());//will excute the body and print objec 

//another example
let arrow = () => {
    console.log("You should add some product for cart in arrow function");
}
arrow();
// console.log(new arrow());//! Uncaught TypeError: arrow is not a constructor => 'arrow functio do not have own 'this' KeyWord '


let stupid = {
    name: "stupid",
    // funct() {
    //     console.log("You are soo stupid");
    // }
    funct: function () {
        console.log("You are soo stupid");
    }
}
stupid.funct();
// console.log(new stupid.funct());Uncaught TypeError: stupid.funct is not a constructor => when use short-Hande Function
console.log(new stupid.funct());


//its not constractor its object 
let item = new function () {
    //this {}
    console.log("this is item object");
    this.name = "item";
    //return this
}
console.log(item);
// console.log(new item());//Uncaught TypeError: item is not a constructor

// NOTE =>> The function of returning `this` is done by `new`.  
// We said `undefined` is not an object, but `window` is an object.

// constructor mode test =>
// The programmers who use the constructor without `new` are JS libraries.  
// They use this approach to simplify the syntax.
function Custemer(name, email, addriss) {
    // console.log(`new target----------`, new.target);
    //! If the user did not do NEW
    // what dose code do
    if (!new.target) {
        return new Custemer(name, email, addriss);
    }
    this.name = name;
    this.email = email;
    this.addriss = addriss;
    // return this
}

const custemer = new Custemer("Abood", "Abood@gmail.com", "56445642");
console.log(custemer);

const custemer2 = Custemer("Ali", "Ali@kmdfk", "6255261");
console.log(custemer2);

//return from Constructor
function Divaise(name = "UNkown_divise", price = 0) {
    //this{}
    // this.name = name|| "unkowndivice",

    this.name = name,
        this.price = price
    //return this
    // return {
    //     name: "test",
    //     price: 40000
    // };
    //IF return primitve type will ignor 
    //IF  return object will overRide the defult return.
    //NOTE =>'defult ,Nll' NOtObject 
}
const dvice_1 = new Divaise("Samsung", 1000);
console.log(dvice_1);

const dvice_2 = new Divaise("Redmi", 3000);
console.log(dvice_2);

//omiting OF pranthesces
const dvice_3 = new Divaise;
console.log(dvice_3);


// !Methouds in constractor
function Product(name, price = 0) {
    //this{}
    this.name = name || "unkown_Product";
    this.price = price;
    this.tax = price * 0.10;
    this.priceIncludingTax = price + this.tax;
    this.culucationTax = (tax = 0.1) => {
        this.tax = this.price * tax;
        return this.tax;
    };
    this.culucationPriceINcludingTax = function (taxRate = 0.1) {
        PriceINcludingTax = this.price + this.culucationTax(taxRate);
        return this.PriceINcludingTax;
    }
    // this.culucationPrice = () => {
    //     return this.price * 1.1;
    // };
    // this.culucationPriceSub = function () {
    //     return this.price / 50;
    // }
}
// let p1 = new Product("microav", 500);
// console.log(p1.culucationPrice());
// let p2 = new Product("tv", 700);
// console.log(p2.culucationPriceSub());
let p1 = new Product("microav", 500);
console.log(p1.culucationTax());
let p2 = new Product("tv", 700);
console.log(p2.culucationPriceINcludingTax(2.3));
console.log(p2);

console.log("************************************");

function Uber(name, type, driverName) {
    this.name = name;
    this.type = type;
    this.driverName = driverName;
    this.subscrip = null;
    this.carINfo = null;
    this.carINf = function () {
        return this.carINfo = `Car Name=>${name} driver=>${driverName}`;
    }
    this.subscri = (n = "yes") => {
        return this.subscrip = n;
    }


}

let car1 = new Uber("toyota", "4x4", "Nader");
console.log(car1);
console.log(car1.subscrip);
console.log(car1.carINfo);

car1.carINf();
car1.subscri();
console.log(car1);
console.log(car1.subscrip);
console.log(car1.carINfo);


// !Taskes

// -- Fixed this so output be True 

let Object = {};
function A() {
    this.a = "A";
    return Object;
}
function B() {
    this.b = "B";
    // return;void=>Undefinde
    return Object;
}
console.log(new A() === new B());//true

// NOTE: Cloan its copy Object to another Object with Diffrant address
//Remember to calculation
function Calculation() {
    this.num1 = undefined,
        this.num2 = undefined,
        this.input = function (num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        },
        this.sum = function () {
            return this.num1 + this.num2;
        },
        this.multiplication = function () {
            return this.num1 * this.num2

        },
        this.sub = function () {
            return this.num1 - this.num2;
        },
        this.modie = function () {
            return this.num1 / this.num2;
        }

}



let cal = new Calculation();
console.log(cal);
cal.input(Number(prompt("ENTER_First_Number :: ", 5)), Number(prompt("ENTER_SECOND_Number ::", 4)));
console.log(cal);
console.log(cal.multiplication());
console.log(cal.sum());
console.log(cal.sub());
console.log(cal.modie());

function Counter(intital) {
    this.value = intital;
    this.increment = function (val) {
        return this.value += val;
    };
    this.decrement = function (val) {
        return this.value -= this.value;
    };
    this.read = function () {
        return this.value;
    };
    this.reset = function () {
        return this.value = intital;
    }

}

console.log("-------------------");

const count = new Counter(10);
console.log(count.read());
count.increment(15);
console.log(count.read());
count.decrement(5);
console.log(count.read());
count.reset();
console.log(count.read());

// Optinal Chaining 
let Ob = {
    payment: {
        methoud: { type: "CartShop" },
        amount: 100
    }
}

let another = {}

console.log(Ob.payment);
console.log(Ob.payment?.methoud);
console.log(Ob.payment?.methoud.type);

console.log("-------------------");
//falsy values
//undefined
//null
//NaNa
//false
//0
//""
// truthy valuesOhterwise
// nullish operator 
/*
false ?? "something";  // false (because false is NOT null or undefined)
0 ?? true;             // 0 (because 0 is NOT null or undefined)
"" ?? '';              // "" (because an empty string is NOT null or undefined)
null ?? true;          // true (because null is null)
undefined ?? true;     // true (because undefined is undefined)



 the optional chaining operator only works with declared variables
 const declared=fales; It must be known so that an error does not appear.
 console.log(declared?.value); // Uncaught ReferenceError: declared is not defined
const anotherDeclared=fales;
 the optional chaining operator considers the falsy values as the nullish operator
const anotherDeclared = {};

 console.log(anotherDeclared?.value.x); // Uncaught TypeError: Cannot read properties of null (reading 'x')

*/

console.log(another.payment);
console.log(another.payment?.methoud);
console.log(another.payment?.methoud?.type);

// !Short-circuiting
function Student(name) {
    this.name = name;
}
const std1 = new Student("Abood");
console.log(std1);
std1.greet = function () {
    console.log("AsalamAlicom every one");
}
const key = "age";
std1[key] = 20;
std1.greet();
console.log(std1.age);

const std2 = new Student("Omar Sharmot");
console.log(std2);
std2.greet?.();
// std2 = null;
console.log(std2?.[key]);//Uncaught TypeError: Cannot read properties of null (reading 'age')



std1.AboodtestFun = function () {
    console.log("Abood");
}
console.log(std1.AboodtestFun());

