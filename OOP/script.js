// oop

// in other languages
//  class User {

// }
// int Object = new User();

// this is not in aby languge
let Object = {};

//in javascript we use constructor function
function Cons() { }
let c1 = new Cons();

// OOP
// my code style or design pattern will be
// based on constructor functions (classes) and
// objects (instances).
// in react we use  function programming

//inheritance in js mean prototypes
// prototype by defult is object itself

let User = {
    logIN() {
        console.log("Login Acount....");
    },
    sin_up() {
        console.log("sin_up Acount....");
    },
    delete() {
        console.log("deleted Acount.....");
    },
};

let Admin = {
    delete() {
        console.log("deleted user.....");
    },
};

Admin.__proto__ = User;

// adding prototype
// Admin.prototype.sayLoveCoding = function () {
//     console.log("love coding");
// };

let SuperAdmin = {};
SuperAdmin.__proto__ = Admin;

console.log(Admin);
console.log(Admin.sayLoveCoding);

console.log(SuperAdmin);

Admin.logIN();
SuperAdmin.sin_up();
SuperAdmin.delete();

// User.__proto__=SuperAdmin;//cyclic .__prot__ Error

// user => Addmin => SuperAdmin

let ErrorMothud = {
    ErrorCode() {
        console.log(this.code);
    },
    ErrorMass() {
        console.log(this.massege);
    },
};

// We previously mentioned that a constructor is a template we define to create objects that share the same common properties.
function HTTPREQUEST(code, mass) {
    this.code = code;
    this.massege = mass;
    otherconst = "LOver ??";
    console.log(otherconst);
}

// HTTPREQUEST.prototype = "ErrorMothud";//will ignor should be  Object

console.log(HTTPREQUEST.prototype.constructor);
console.log(HTTPREQUEST.prototype.constructor === HTTPREQUEST);

HTTPREQUEST.prototype = ErrorMothud;

// in evrey new for HTTPREQUEST will be inherit from ErrorMothud
// errorMothud.__proto__=MyErrorMothud;

let errorMass = new HTTPREQUEST(404, "not found");

let serverMass = new HTTPREQUEST(500, "server error");
let autherrize = new HTTPREQUEST(401, "not autherize");

console.log(errorMass);
console.log(serverMass);

errorMass.ErrorCode(); // this  return  the object Befor Code
errorMass.ErrorMass();

serverMass.ErrorCode();
serverMass.ErrorMass();

autherrize.ErrorCode();
autherrize.ErrorMass();

console.log("----Class basic syntax----");

// Class basic syntax
/*
In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

In practice, we often need to create many objects of the same kind, like users, or goods or whatever.

As we already know from the chapter Constructor, operator "new", new function can help with that.

But in the modern JavaScript, there’s a more advanced “class” construct, that introduces great new features which are useful for object-oriented programming.

In the past, before React 16 was released, there were class components and functional programming. After React 16 was released, hooks were introduced, so you couldn't use them in classes. In React 18, async functions and server components were introduced, which gave a push toward using functions more than classes.

 What is a class?
So, what exactly is a class? That’s not an entirely new language-level entity, as one might think.

Let’s unveil any magic and see what a class really is. That’ll help in understanding many complex aspects.

In JavaScript, a class is a kind of function.

What class User {...} construct really does is:

Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
Stores class methods, such as sayHi, in User.prototype.
After new User object is created, when we call its method, it’s taken from the prototype, just as described in the chapter F.prototype. So the object has access to class methods.

function component(type, mass){


        this.type = type;
        this.mass = mass;

        console.log("here we go agin");
}
        component.prototype.printDetal =  function() {
        console.log(`Type :: ${this.type} Mass :: ${this.mass}`);

    }



    Not just a syntactic sugar
Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new), because we could actually declare the same thing without using the class keyword at all 
The goal is to write the code in a simpler way without making any additions to it.


The result of this definition is about the same. So, there are indeed reasons why class can be considered a syntactic sugar to define a constructor together with its prototype methods.
Still, there are important differences. There is no difference, which is why the simplified method is used

First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.

The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with new

It means there is a hidden property that determines whether it is a class or not. Then, it tells you that a function can be called directly, whereas a class must be instantiated before calling it.

New 

All the differences are within the language itself and don't matter to developers.



Classes always use strict. All code inside the class construct is automatically in strict mode.
Besides, class syntax brings many other features that we’ll explore later.

An important difference for developers is that a class is strict, whereas a function is not, depending on how the code is written.  
For example, you can't declare variables inside a class without specifying a datatype like `let`, `var`, or `const`.
*/

class component {
    //its constructor function but the defrint here will excuted automatically
    constructor(type, mass) {
        this.type = type;
        this.mass = mass;

        console.log("here we go agin");

        otherconst = "Lover ??"; // otherconst is not difinded
    }
    printDetal() {
        console.log(`Type :: ${this.type} Mass :: ${this.mass}`);
    }
}
let com1 = new component("<p>", "we are learning CLASSES !");
com1.printDetal();
console.log(com1);

console.log(typeof component); //function
// ! In the future, you need to know what the  # target browser is.  
// This means understanding which browsers support your code and which do not.

/*
Class Expression
Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

Here’s an example of a class expression:

let otherComponent = class {
    constructor(type) {
        console.log("this is class expression");
        this.type = type;
    }
}

I can use the class as an expression, and I can use it as a value, meaning it can be placed anywhere a value is normally used.
 We can even make classes dynamically “on-demand”, like this:
 function makeClass(phrase) {
 declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

 Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello
*/

//imilar to Named Function Expressions, class expressions may have a name.
// If a class expression has a name, it’s visible inside the class only
// You won’t fully grasp these two pieces of information until you learn recursion.

// Getters/setters
// Just like literal objects, classes may include getters/setters, computed properties etc.

// Here’s an example for user.name implemented using get/set

console.log("------Getters/setters-----");
// As usual, you recognize them as functions, but you use them as properties.
class component_2 {
    propName = "TestFirstTimePrpro";// It does not inherit from anywhere; each class has its own **Class Fields**.
    //its constructor function but the defrint here will excuted automatically
    constructor(type) {
        this.type = type;

        console.log("here we go agin");
    }

    set mass(value) {
        // Why does the variable name differ?  
        // We said it's because we want to use it with `get`, so we need to create another variable to store the value and return it.
        this._mass = value;
    }

    get mass() {
        return this._mass;
    }

    printDetal() {
        console.log(`Type :: ${this.type} Mass :: ${this._mass}`);
    }

    //Computed names […]
    // Here’s an example with a computed method name using brackets [...]:
    ["Marhaba"]() {
        // `alert("السلام عليكم");` Run it later.
    }
    ["say" + "Hi"]() {
        alert("Hello");
    }
}
// Here, it will inherit the methods, setter, and getter, but each object will have its own class fields, while the rest is inherited from the class.

let com2 = new component_2("<h1>");

com2.mass = "content has ben updated using Setters  !";
com2.printDetal();
console.log(com2);
console.log(com2.mass);
console.log(com2["Marhaba"]());
console.log(com2.propName);
com2.propName = "Editing";
console.log(com2.propName); //result =>> Editing
// console.log(com2.prototype.propName);//result =>> undefined Cannot read properties of undefined (reading 'propName')

// Class fields =>> like proparties in objects ' {name : "ALI" } '
// Old browsers may need a polyfill
// Class fields are a recent addition to the language.
//polyfill ::

// In short, I translate my code to an older version because the browser might not support the code I wrote. I use tools like **Babel** for this.

//-------------------------------
console.log("------ Class inheritance -----");

// Class inheritance
// Class inheritance is a way for one class to extend another class.
// So we can create new functionality on top of the existing.

class divesce {
    constructor(name, capacity, price) {
        this.name = name;
        this.capacity = capacity;
        this.price = price;
    }

    printDetal() {
        console.log(`Name :: ${this.name} Capacity :: ${this.capacity} Price :: ${this.price}`);
    }


}
class mobile extends divesce {
    constructor(name, capacity, price, color) {
        super(name, capacity, price);
        this.color = color;
    }
    // printDetal() {
    //     console.log(`Name :: ${this.name} Capacity :: ${this.capacity} Price :: ${this.price} color :: ${this.color}`);
    // }

    printDetal() {
        super.printDetal();
        console.log(`Color :: ${this.color}`);


    }

}

let iphone = new mobile("iphone", 50, 1000, "black");
iphone.printDetal();

console.log(divesce.prototype);
console.log(mobile.prototype);


// when using 'extends'

// iPhone [[Prototype]]) or __proto__ -> Device.prototype =>>

// mobile.prototype.__proto__= divesce.prototype;
//that what will happen when  we use extends automatically



/*

For instance, to find rabbit.run method, the engine checks (bottom-up on the picture):

The rabbit object (has no run).
Its prototype, that is Rabbit.prototype (has hide, but not run).
Its prototype, that is (due to extends) Animal.prototype, that finally has the run method. 
 # We talked about it before—it's a sequence. When I need a specific function, I first check the current object. If it's not there, I move up to the parent and ancestors it inherits from. In short, it's a lookup chain.

****************************************************************

Overriding a method
Now let’s move forward and override a method. By default, all methods that are not specified in class Rabbit are taken directly “as is” from class Animal
But if we specify our own method in Rabbit, such as stop() then it will be used instead
 # It will override and give priority to the child class always, not the inherited one.

 Usually, however, we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

Classes provide "super" keyword for that.

super.method(...) to call a parent method.
super(...) to call a parent constructor (inside our constructor only).
There are two ways to use `super`.

------------------------------------------------

! Arrow function do not have Super or This  keyWord   
As was mentioned in the chapter Arrow functions revisited, arrow functions do not have super.

If accessed, it’s taken from the outer function. For instance

------------------------------------------------------------------
Overriding constructor
With constructors it gets a little bit tricky.

Until now, Rabbit did not have its own constructor.

According to the specification, if a class extends another class and has no constructor, then the following “empty” constructor is generated
#In short, if the `Mobile` class doesn’t have a constructor and I create a new phone instance, what will happen? It will generate an empty constructor, pass the arguments, then call `super` to invoke the parent class’s constructor. But in our case, this wouldn’t make sense because a mobile phone has its own specific data.

Constructors in inheriting classes must call super(...), and (!) do it before using this.

…But why? What’s going on here? Indeed, the requirement seems strange.

Of course, there’s an explanation. Let’s get into details, so you’ll really understand what’s going on.

In JavaScript, there’s a distinction between a constructor function of an inheriting class (so-called “derived constructor”) and other functions. A derived constructor has a special internal property [[ConstructorKind]]:"derived". That’s a special internal label.

That label affects its behavior with new.

When a regular function is executed with new, it creates an empty object and assigns it to this.
But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.
So a derived constructor must call super in order to execute its parent (base) constructor, otherwise the object for this won’t be created. And we’ll get an error.

For the Rabbit constructor to work, it needs to call super() before using this
### **Summary of what happens when using `new`**  

We said that `new` creates `this = {}` and allows modifications before returning `this`.  

#### **In Classes:**  
- A **constructor** is created for both the current class and the parent class it inherits from.  
- Using `super`, the parent class's constructor is executed first.  
- Then, the current class's constructor runs.

------------------------------------------
Instance => We said it refers to an object created from a class.


*/


//   Static && Overriding class fields: a tricky note
// In a class declaration, they are prepended by static keyword

// The value of this in User.staticMethod() call is the class constructor User itself (the “object before dot” rule). 
// - The `this` refers to what comes before the dot.


//Static methods aren’t available for individual objects
// Static methods are callable on classes, not on individual objects.

// Usually, static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it.



class A {
    static test = "test";
    letter = "A";
    constructor() {
        console.log(this.letter);

    }
    static internal(letter = "A") {// `static` => Means it belongs to the method itself.
        console.log(`Im Class ${letter}`);
    }

}

class B extends A {
    //Static properties are also possible,
    //  they look like regular class properties,
    //  but prepended by static
    letter = "B";
    // if thers no constructor =>>the defult  =>>
    // constructor(){
    //     super();    
    // }
    constructor() {
        super();
        console.log(this.letter);
    }
}

let a = new A();
let b = new B();

//Inheritance of static properties and methods
// Static properties and methods are inherited.

// For instance, Animal.compare and Animal.planet in the code below are inherited and accessible as Rabbit.compare and Rabbit.planet

A.internal();
B.internal("B");

console.log(A.test);


// console.log(a.internal());
// console.log(b.internal());

