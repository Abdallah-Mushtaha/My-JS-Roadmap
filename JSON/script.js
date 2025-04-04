//JSON
// JavaScript Object Notation

//  supose we have invoices web application  Like invoices app . 
// get/create/update/delete invoice

// invoices -> data
// Requests: index.html/index.css/index.js
// (front-end application/env, browser, client)

// Responses: server.(js/php/py) (back-end
// application/env server and database)

// Request -> Server -> Get Invoices
// Response -> Client -> Invoices Data

// JSON => JavaScript Object Notation used to exchange data between front-end and back-end
//convert Array,object to String
//convert String to Array,object
// when we send data from server to client or from client to server we used JSON


/*
The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is described as in RFC 4627 standard. Initially it was made for JavaScript, but many other languages have libraries to handle it as well. So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.


Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.


JSON.stringify can be applied to primitives as well.

JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.

*/
console.log("-----JSON------");


let user = {
    name: "Abood",
    age: 20,
    email: "Abood@gmail.com",
    getData() { //its not useful  way
        return `{name:${this.name},age:${this.age}} `;
    }
};
// console.log(object.getData());
//insted of this use json.stringify,json.parse

let json = JSON.stringify(user);//convert from non-primitive data to object to=> string
console.log(json);
let object_json = JSON.parse(json);//convert string to object
console.log(object_json);


let json_2 = JSON.stringify([user, user, user]);//convert from non-primitive data to object to string
console.log(json_2);

object_json_2 = JSON.parse('[{"name":"Abood","age":20,"email":"Abood@gmail.com","paide":true},{"name":"noha","age":20,"email":"noha@gmail.com"},{"name":"Bilal","age":20,"email":"Bilal@gmail.com"}]');
console.log(object_json_2);

// ! JSON will ignore the functions and undifinde value


console.log("----- Seter,geter------");

// Seter,geter
/*
There are two kinds of object properties.

The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

The second type of property is something new. It’s an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

*/


let ob = {
    owner: "Aloshre",
    username: "Abood",
    age: 20,
    email: "Abood@gmail.com",
    isOwner() {
        if (this.owner !== "Aloshre") {
            console.log("You are not owner");
            return false;
        } else
            return true;
    },

    // setNmae(value) {
    //     if (this.owner !== "Aloshre") {
    //         console.log("You are not owner");
    //     }
    //     else this.name = value;
    // } // in this case u cant use sentax =>> ob.name = "Ramez";

    set name(value) {
        // if (this.isOwner()) {
        //     this.username = value;

        // } else undefined;
        return this.isOwner ? this.username = value : undefined;

    },

    get name() {
        if (this.isOwner()) {
            return this.username;
        } else return undefined;
    }

}


console.log(ob.name);//get
ob.name = "Ramez";//set

console.log(ob.name);//get


//-----------------------------

console.log("------Prototypes, inheritance-----");
/*
In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

[[Prototype]]
In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:


*/

let userobj = {
    _type: undefined,
    name: "jehan",
    age: 20,
    email: "Abood@gmail.com",
    delet() {
        console.log("deleted");
    },
    say() {
        console.log(this);
        console.log("hello");
    },
    set name(value) {
        this._type = value;
    },
    get name() {
        return this._type;
    }

};

let adminobj = {
    name: "Abood",


}
let superAdminobj = {
    DeletDB() {
        console.log("deleted DB");

    }
}


// __proto__ => prototype

// userobj =>> prototype object
adminobj.__proto__ = userobj;
// adminobj=>> prototype object
superAdminobj.__proto__ = adminobj;




console.log(adminobj);
console.log(adminobj.name);// cheke if name in adminobj it look like override the inhertance or userobj
adminobj.delet();
adminobj.say();


console.log(superAdminobj);

superAdminobj.DeletDB();
console.log(superAdminobj.name);
superAdminobj.delet();
superAdminobj.say();




// userobj.__proto__ = superAdminobj;// Cyclic __proto__ value
// at set __proto__ (<anonymous>)
// NOTE:: Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters, for now let’s just keep it in mind, as we build our understanding of JavaScript language.

console.log("--------sert and get in prototypes---------");
//will handling in prototype suppose copy properties from user to admin and superAdmin

user.name = "user_type";
console.log(user.name);
adminobj.name = "adminobj_type";
console.log(adminobj.name);
superAdminobj.name = "superAdminobj_type";
console.log(superAdminobj.name);


console.log("--------this in prototypes---------");

//!The answer is simple: this is not affected by prototypes at all.
//! No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

//refer to current object dose not effect the prototype 'in this case refer THE object before the dot'
userobj.say();
adminobj.say();
superAdminobj.say();

// Object.keys only returns own keys
// for..in loops over both own and inherited keys


/*
In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
The object referenced by [[Prototype]] is called a “prototype”.
If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.
*/

//! constructor with prototype
function User() {
    this.name = "Tesla";
    this.great = function () {
        console.log("Aslaam Alicom evrey one");
    }

}
function Admin() {
    this.delete = function () {
        console.log("deleted");
    }

}
Admin.prototype = User;

function SuperAdmin() {
    this.DeletDB = function () {
        console.log("deleted DB....");
    }
}

SuperAdmin.prototype = Admin;



console.log("--------constructor with prototype =>> F.prototype---------");

let rr = new User();
let admin = new Admin();
let superAdmin = new SuperAdmin();


rr.great();
admin.delete();
superAdmin.DeletDB();

console.log("Name::", admin.name);

console.log(admin);
console.log(superAdmin);

// let animal = {
//     eats: true
//   };

//   function Rabbit(name) {
//     this.name = name;
//   }

//   Rabbit.prototype = animal;

//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

//   alert( rabbit.eats ); // true


console.log("--------------------");

// Summary of `F.prototype`  
// I have a single object, and I want to create multiple admins who have the same properties as this object.

let users = {
    name: "Abood",
    age: 20,
    sittinges: {
        classesName: "JS",
    }
}

function AdminS() {
    //  this ={}
    this.great = function () {
        console.log("Aslaam Alicom evrey one");
    }
    //return this
}


let d = new AdminS();
let z = new d.constructor();// will do  new AdminS();
console.log("Value Z :: ", z);

AdminS.prototype = users;// will do  Admins.__proto__=users when excution 



let a1 = new AdminS();
let a2 = new AdminS();
console.log(a1);

let a3 = new a2.constructor();
console.log("A3 value :: ", a3);


a1.great();

// === === Default F.prototype, constructor property === === //

// Every function has the "prototype" property even if we don’t supply it.

// The default "prototype" is an object with the only property constructor that points back to the function itself.
// Every function has a `prototype` property.  
// So, what does this property contain?  
// It contains a `constructor`, and its value is the function itself.

function Greet() { }
console.log(Greet.prototype.constructor == Greet);  //function greet(){}
// Naturally, if we do nothing, the constructor
// property is available to all rabbits through [[Prototype]]:
let g1 = new Greet();
console.log(g1.constructor == Greet);  //function greet(){}

let g2 = new g1.constructor();// Since the constructor points to the function itself, I can do this.
console.log(g2.constructor == Greet);
// Another example
function Rabbit() { }
// by default:
// Rabbit.prototype = { constructor: Rabbit }

Rabbit.prototype.New_prp = "New_prp";// add new property to prototype

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)
console.log(rabbit);



// That’s handy when we have an object, don’t know which constructor was used for it (e.g. it comes from a 3rd party library), and we need to create another one of the same kind.

// But probably the most important thing about "constructor" is that…

// …JavaScript itself does not ensure the right "constructor" value.

// Yes, it exists in the default "prototype" for functions, but that’s all. What happens with it later – is totally on us.

// The summary here is that I might have installed a library that provides me with an object, and I want to create copies of it.
// For example, `adminB`, I want to create multiple copies of it.
// But what is the constructor function? It’s unknown.
// However, I know that the object has a `prototype` that contains a `constructor`, which in turn holds the constructor function.


// Because I changed the default and made it inherit from another one, as in a previous example.
// console.log(AdminS.prototype.constructor == AdminS);



/*
In this chapter we briefly described the way of setting a [[Prototype]] for objects created via a constructor 
It means setting the constructor for every object created from this object. Later, we’ll see more advanced programming patterns that rely on it.

Everything is quite simple, just a few notes to make things clear:

The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects when new F() is called.
The value of F.prototype should be either an object or null: other values won’t work.
The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.

 When I modify the `prototype`, it means I can no longer access the constructor function through `constructor`.  
`AdminS.prototype = users;` has overridden what was there before.
let a2 = new a1.constructor();


 By default -> function -> prototype p. -> constructor -> function
 Admin.prototype = userObject;
*******************************

 Method no. 01
 Admin.prototype.myProperty = "Hey from prototype!";

 Method no. 02
 Admin.prototype = {
    myProperty: "Hey from prototype!",
    constructor: Admin,
};

These are the two methods so that I can do it.
let a2 = new a1.constructor(); 


*/
