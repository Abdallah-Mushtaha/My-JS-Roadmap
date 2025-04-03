// revision OOP CLASS, Inheritance....
//There’s a well-known convention for private or protected fields: `_name` or `_method()`. This method was used in the past and always indicated private.

// public, private, protected
// public: accessible from anywhere (class itself, its
// sub-classes, and its instances).

// protected: accessible from class itself and its
// sub-classes (it is not supported in JS).

// private: accessible only from class itself.

// Protected fields are inherited
// If we inherit class MegaMachine extends CoffeeMachine, then nothing prevents us from accessing this._waterAmount or this._power from the methods of the new class.

// So protected fields are naturally inheritable. Unlike private ones that we’ll see below.

// --------------------------------
// There’s a finished JavaScript proposal, almost in the standard, that provides language - level support for private properties and methods.

// Privates should start with #.They are only accessible from inside the class.

// For instance, here’s a private #waterLimit property and the water - checking private method #fixWaterAmount:

// On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.

// Private fields do not conflict with public ones. We can have both private #waterAmount and public waterAmount fields at the same time.

// Unlike protected ones, private fields are enforced by the language itself. That’s a good thing.

// But if we inherit from CoffeeMachine, then we’ll have no direct access to #waterAmount.
// ! We’ll need to rely on waterAmount getter/setter:

// Private fields are not available as this[name]
// Private fields are special.

// As we know, usually we can access fields using this[name]:
// With private fields that’s impossible: this['#name'] doesn’t work. That’s a syntax limitation to ensure privacy.


class user {
    //fild,variable,property
    _vertion = 0.01;
    id = null;
    #role = null;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set role(value) {
        this.#role = value; // access private field here
    }

    get role() {
        return this.#role; // access private field here
    }

    set vertion(value) {
        this._vertion = value;
    }

    get vertion() {
        return this._vertion;
    }

    isAutherized() {
        return this.#role === "ADMIN";
    }
    deletedUSer() {
        if (this.isAutherized()) {
            console.log("deleted");
        } else {
            console.log("not autherized");
        }
    }

    //method
    login() {
        console.log(`${this.name} login........`);
    }

    static logOut() {
        console.log(`${this.name} logOut........`);
    }

    AddID(id) {
        this.id = id;
    }

    display() {
        console.log(this.name, this.age, this.id);
    }
}

class admin extends user {
    //if thiers no constructor by defult do this
    // constructor(name, age) {
    //     super(name, age);
    // }
    constructor(name, age, email) {
        super(name, age);
        this.email = email;
    }
    AddID(id) {
        super.AddID(id);
    }

    display() {
        super.display();
        console.log(this.email);
    }
}

let user1 = new user("Abood", 20);
user1.login();
user1.AddID(1);
user1.deletedUSer();
user.logOut();
user.role = "USER";
user.vertion = 0.5;
console.log(user.role);
console.log(user.vertion);

//  what extend KeyWorde do??
//by new keyWorde
//admin.prototype.__proto__ = user.prototype;
let admin1 = new admin("Nizar", 20, "Abood@gmail.com");
admin1.role = "ADMIN";
admin1.vertion = 0.12;
admin1.AddID(2);
admin1.display();
console.log(admin1.role);
console.log(admin1.vertion);
admin1.deletedUSer();

//---------------------------------------

class CoffeeMachine {
    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) value = 0;
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
// alert(machine.#waterAmount); // Error
// alert(machine.waterAmount);//true


console.log("---------");

//-----------------------------------------------
// OOP: Object-Oriented Programming
// Code style/pattern based on classes/objects.

// Constructor functions or classes: blueprint for creating objects.

// Classes: syntax sugar for constructor functions with some differences or additional features. In classes, we use strict mode by default.

// The "extends" keyword does prototype inheritance for us.
// Classes consist of properties (variables) and methods (functions).

// constructor() is a special method that gets called when we create an instance of a class.

// super() is for using the parent class constructor and methods (the "this" keyword for the parent class).

//AccessMOdifer...
// public, private, protected
// public: accessible from anywhere (the class, its subclasses, and its instances).

// protected: accessible from the class and its subclasses (no enforcement from the language level) - (underscore syntax).

// private: accessible only from the class (hashtag syntax).


class counter {
    static name = "counter";
    #value = 0;
    constructor(value = 0) {
        this.#value = value
    }

    #validationFunction(value) {
        return value < 0 || value == 0 || typeof value !== "number";
    }

    increment(value) {
        if (this.#validationFunction(value)) return;
        this.#value += value;
    }

    decrement(value) {
        if (this.#validationFunction(value)) return;

        this.#value -= value;
    }
    rest() {
        this.#value = 0
    }

    get value() {
        return this.#value;
    }


}

class counterB extends counter {
    constructor(value = 0) {
        super(value);
        // this.#value = value // you can not use this.#value priveate field
    }




}



let counterA = new counter(10);
let counterC = new counterB();

console.log(counterA.value);
counterA.increment(10);
console.log(counterA.value);
counterA.increment(10);
console.log(counterA.value);
counterA.decrement(2);
console.log(counterA.value);
counterA.rest();
console.log(counterA.value);

console.log("-----------");

console.log(counterC.value);
counterC.increment(5);
console.log(counterC.value);
counterC.increment(2);
console.log(counterC.value);
counterC.decrement(2);
console.log(counterC.value);
counterC.rest();
console.log(counterC.value);
console.log(counter.name);

let counterr = new counter(1);
console.log(counterr instanceof counter);
console.log(counterA instanceof counter);


console.log(counterC instanceof counter);
console.log(counterB instanceof counter);

console.log(counter instanceof counter);



class A { }
class B extends A { }



let a = new A();

alert(a instanceof A);
alert(B instanceof A); 
