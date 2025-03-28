/*
23. Arrays                          

- objects allow us to store keyed collections of values.

- what if we need an ordered collection where we have a 1st, 2nd, and 3rd element and so on to store list of things in order.

- we can not use objects here because they are not ordered, they do not provide methods to manage the order of elements, or to elements at the beginning, at the end, or even between existing elements.

23.1 Arrays Declaration
- like objects:

const array = new Array();
const array = [];

- you can add any type of value to an array.
- almost all the time, the second syntax is used. we can supply initial elements in the brackets.

const array = ["Shawqi", "Hatem", "Something"];

- array elements are numbered, starting with zero. we can get an elements by its number in square brackets.

console.log(array[0]); -> "Shawqi" You, 2 weeks ago • New: Enhance this page!

                      we can replace elements.
array[0] = "Other Name";

-> ["Other Name", "Hatem", "Something"]

                      or add a new one to the array.
array [3] = "Fares";

-> ["Other Name", "Hatem", "Something", "Fares"]

- the total count of the elements in the array is its length.

array.length -> 4.

- an a_ _ _ store elements of any type.

- for negative index values we use at() method.


the total count of the elements in the array
is its 'length`.

array.length
4.

an array can store elements of any type.

for negative index values we use at()
method.

-------------------

23.2 A Queue and A Stack: Pop, Push, Shift, and
Un-Shift

A queue is one of the most common uses of an
array. In computer science this means an
ordered collection of elements which supports
two operations:   

Push: appends an elements to the end.   
Shift: get an element from the beginning, advancing the queue, so the 2nd element becomes the 1st.
Arrays support both operations.


------------
A stack supports two operations:
push: appends an element to the end.
pop: takes an element from the end.
For stacks, the latest pushed item is received first, that is also called LIFO (Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).

 
------------------
arrays in JavaScript can work both as a queue and as a stack at the same time,
 they allow you to add/remove elements, both to/from the beginning or the end.

in computer science, the data structure that allows this, is called dequeue.

pop: extracts the last element of the array and returns it.
push: append the elements to the end of the array.
shift: extracts the first element of the array and returns it.
unshift: add the element to the beginning of the array.
push and unshift: can add multiple elements at once.

Array in JAvaScript its deque


Internals // In short, you can't use an array as an object or an object as an array because it would cause them to lose their unique features.


an array is a special kind of object. the square brackets used to access a property array[0] actually come from the object syntax. that is essentially the same as object[key] where array is the object while numbers (indexes) are used as keys.

they extend objects providing special methods to work with the ordered collections of data and also the length property. but at the core it is still an object.

but what makes arrays really special in their internal representation? the engine tries to store its elements in the contiguous memory area, one after another, and there are other optimizations as well, to make arrays work really fast.

but they all break if we quit working with an array as with an ordered collection and start working with it as if it were a regular object.   

the engine will see that we are working with the array as with a regular object.

array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

--- **Misused in Array**  
The ways to **incorrectly use** an array:

Add a non-numeric properties like  => array.test = 5.
Make holes, like: add array[0] and then array[1000] (and nothing between them).

Fill the array in the reverse order.


please think of arrays as special structures to work with the ordered data. 
they provide special methods for that. 
arrays are carefully tuned inside JavaScript engines to work with contiguous 1  ordered data,
please use them this way.
 and if you need arbitrary keys, 
 chances are high that you actually require a regular object. 


  Performance

methods push/pop run fast, while shift/unshift are slow.

why it is faster to work with the end of an array than with its beginning?

here: array.shift()

the shift operation must do three things:

remove the element with the index 0.
move all elements to the left, re-number them from the index 1 to 0, from 2 to 1, and so on.
update the length property.
the more elements in the array the more time to move them, more in-memory operations. 

the similar thing happens with unshift, to add an element to the beginning of the array we need first to move existing elements to the right, increasing 1  their indexes.   

push/pop do not need to move anything, to extract an element from the end, the pop method cleans the index and shortens length.

again, the pop method does not need to move anything because other elements keep their indexes. that is why it is blazingly fast.


Loops for..in and for..of

the loop for..in iterates over all properties not only the numeric ones.

there are so-called "array-like" objects in the browser and in other environments, that look like arrays. that is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually do not need.   

the for..in loop will list them though. so if we need to work with array-like objects, then these extra properties can become a problem

there are so-called "array-like" objects in the browser and in other environments, that look like arrays. that is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually do not need.

the for..in loop will list them though. so if we need to work with array-like objects, then these extra properties can become a problem.

the for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. of course it is still fast, but we should be aware of the difference.

generally, we should not use for..in for arrays.


23.6 A word about 'length' and Truncating/Clearing Arrays.
23.7 'new Array()' syntax.
23.8 Multi-Dimensional Arrays.
23.9 'toString'.
23.10 Do not compare arrays with '=='.

*/

//review Objects
//keda collection => i can access the value in the collection by  the key
//objects its not orderd and thier is no way to order it.
let Object = {
    name: "Shawqi Hatem",
    age: 20,
    username: "@Shawqiasdasd",
    personal: {
        email: "Shawqi@gmail.com",
        phone: "01001234567",
    },
};


console.log(Object);

let obb = { 1: "adsa" };
console.log(obb[1]);

// if we need orderCollection will use Array
// Array its non-Premetve

//Arrayes ordered Collection but Object keda collection
const array = []; // qarly brackets
const arr = new Array();
const testa = arr;
console.log(typeof arr);
// console.log(typeof (testa));
console.log(arr === testa);

const Abood = [
    "Abood",
    "Ramez",
    "Mushtaha",
    20,
    true,
    "Unevirsity_Student",
    null,
    "undefined",
];
console.log(Abood);
console.log(Abood[(Abood.length - 1)]);

// Proof that an array is an object, but there is a risk in using this method.
//  pleas do not do like this npn-numaric probarity  to an array .
Abood.name = "AboodRamez";

console.log(Abood.name);

let objeAbo = {
    0: "Abood",
    1: "Ramez",
    2: "Mushtaha",
    3: 20,
    4: true,
    5: "Unevirsity_Student",
    6: null,
    7: "undefined",
};
console.log(objeAbo[0]);

// !so why need Array ?
// ! because we can  use the useful methods of arrays like push(), pop(), shift(), unshift(),sort(), etc.
//that methudes not exist in objects
//!used arrays when we need to store list of things in order 'ordered Collection';
// ! thier is performance optimization in arrays over objects 'mean:: somthinges  javascript Engine do it to enhace the performance youre code'

//we can use also Array with Objectes like

const ArrayOFobject = [
    {
        name: "Abood",
        age: 20,
        gpa: 80,
    },
    {
        name: "Hatem",
        age: 20,
        gpa: 90,
    },
    {
        name: "Ramez",
        age: 20,
        gpa: 100,
    },
];
let ArrUsers = [
    {
        name: "Abood",
        age: 20,
        gpa: 80,
    }, {
        name: "Hatem",
        age: 20,
        gpa: 90,
    }
];
console.log(ArrUsers[0].name, ArrUsers[0].gpa);

console.log(ArrayOFobject[0].name, ArrayOFobject[0].gpa);
console.log(ArrayOFobject[1].name, ArrayOFobject[1].gpa);

// Strings are immutable ➝ I cannot modify a string through its key.
const name = "Medhat";
name[0] = "SS";
console.log(name);

let name_2 = "JAber";
name_2[0] = "A";
console.log(name_2);

// ! Arrayes are mutapil
const mutapilArray = ["Roro", "Aboud"];
mutapilArray[0] = "Fify";//modify 

console.log(mutapilArray);
mutapilArray[5] = "Omar";

mutapilArray[mutapilArray.length] = {};// add empty object
console.log(mutapilArray[5]);


console.log(mutapilArray);


mutapilArray[20] = "Omar";

console.log(mutapilArray[15]);// undifinde

mutapilArray.length = 2; // reset to the lenght will trancate other elements
console.log(mutapilArray);

mutapilArray.length = 10;
console.log(mutapilArray);
console.log(mutapilArray[5]);

console.log("-------at()--------");
//role
// at()==> positive values --> convet to key ar[1]
// at()==> negative values --> convet to key ar.length + (negative index)

let ar = [0, 1, 2, 50, 4, 5];
console.log(ar.length);
console.log(ar[-1]); //undefined because negative values are not in the propartyName "indexed"
console.log(ar.at(-1)); //==> convert negative values to key how ??
console.log(`Location :: ${ar.at(3)}`);


console.log("---------------");

// There is nothing in JavaScript called:
// Stack, Queue, or DeQueue. They are all arrays.

// push is a method that arrays support in
// JavaScript.

// The code under is just an example.

// ! A Queue in JavaScript
// What we need?

// 1. ordered collection
let queue = [];
// 2.1 push operation: appends an element to the end.

// What push does is:
// 1. appends an element to the end of the array.

// 2. updates the length.
queue.push(1);
queue.push(2);
queue.push("Abood");
queue.push("OMar");
queue.push("ibrahem");

console.log(queue);

// 2.2 shift operation: get an element from the beginning of the array,
//  advancing the queue elements so the second one becomes the first one.
// What does shift do?
// 1. Returns the first element from the array.
// 2. Removes the first element from the array.
// 3. Advancing the elements, so the second one
// becomes the first one.
// 4. Updates the length.

queue.shift();//remove from first
console.log(queue);
console.log(queue.shift()); // return the number that removed

//! a stack in JavaScript
// 2.2 pop operation
// What does `pop` do?
// 1. Returns the last element from the array.
// 2. Removes the last element from the array.
// 3. Updates the length.

queue.push(30);
console.log(queue);

queue.pop();
console.log(queue);
console.log(queue.pop());

//! when add ,delet from first or from last called dequeue
let both = [];
both.push(1, 100);
both.unshift(2); // add form first
both.unshift(3);
both.push(4);
console.log(both);

both.shift();
both.pop();
console.log(both);


// ! consede theirs no  Arrays in JavaScript who can use Stack in real JavaScript.
//-1. CREATE A CONSTRUCTOR FUNCTION

function Stack() {
    //this={}.
    this.length = 0;


    this.push = function (element) {
        // impdeded the the element to the end of the array then increment the length
        this[this.length] = element;
        this.length++;
    };
    this.pop = function () {
        // delet the the element to the end of the array then deccrement the length
        // this[this.length - 1] = undefined
        let del = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        // Append the element to the end of the stack and increase the length
        return del;
    };
    // return this
}


//   Removes and returns the last element from the stack.
//   returns {*} The removed element. from Ai


// Get the last element of the stack
const st = new Stack();
console.log(st);
st.push(5);
// Remove the last element and decrease the length
st.push(10);
st.push(15);

console.log(st);
let de = st.pop();
console.log(st);
console.log(de);


// !the delete in object
let oob = { name: "Aloshre", age: 20 };
delete oob.name;
console.log(oob);

let Ail = { name: "Ali", age: 20, job: "student" }

console.log(Ail);
delete Ail.age;
console.log(Ail);

console.log("-------------------");
//! how to create a Queue
function Queue() {
    //this={}

    this.length = 0;
    this.push = function (element) {
        this[this.length] = element;
        this.length++;
    };

    this.shif = function () {
        let de = this[0];
        for (let r = 0; r < this.length; r++) {
            this[r] = this[r + 1];
            delete this[r + 1];
        }
        for (let key of this) {
            if (this[key] == undifinde) {
                delete this[key];
            }
        }
        this[this.length--]; //index
        return de;

    }
    this.shift = function () {
        //delet first element
        // return the deleted element
        //but the index  after the deleted element in the index who delete
        //return length after decrement

        let del = this[0];

        for (let cun = 0; cun < this.length; cun++) {
            this[cun] = this[cun + 1];
            delete this[cun + 1];
        }

        for (const key in this) {
            if (this[key] == undefined) {
                delete this[key];
            }
        }

        this[this.length--];
        return del;
    };

    // return this
}


const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
console.log(q);
console.log(q.shift());
console.log(q.shift());
console.log(q);

// push and unshift: can add multiple elements at once.

let w = [];
// console.log(w.push(40, 50, 60, 80));
console.log(w.unshift(40, 50, 60, 80));
console.log(w);

// plase  do not user this loop  in array  because it is not efficient do loop to numaric and non-numaric value 
for (let key in w) {
    console.log(w[key]);

}
console.log("---------------");

let arrae = ["Abood", "Ramez", "uper"];
// arrae.bad("Why are you do this in this Array");

// pleas do not use this in array 
for (let key in arrae) {
    console.log(key);
}
//use  for (of)
for (let l of arrae) {
    console.log(l);

}
//new Array ==> detrmmine the length
let arrar = new Array(2);
console.log(arrar[0]);
arrar[1] = 20;


console.log(arrar);

//toString convert array to line of string 
let test = ["Abood", "Nazle", "MONA"];
console.log(test.toString());


// multiDimentional array
// row and col
//row=3
//col=3 
// multi[row][col]
let multi = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// console.log(multi[0][0]);
// console.log(multi[0][1]);
// console.log(multi[0][2]);

// console.log(multi[1][0]);
// console.log(multi[1][1]);
// console.log(multi[1][2]);

// console.log(multi[2][0]);
// console.log(multi[2][1]);
// console.log(multi[2][2]);

row = 4;
coulm = 5;
let Ar = [];
for (let indexro = 0; indexro < row; indexro++) {
    Ar[indexro] = [];// To store each row in an array.
    for (let indexCol = 0; indexCol < coulm; indexCol++) {
        Ar[indexro][indexCol] = Math.random().toFixed(3);
        // console.log(`Ar[${indexro}][${indexCol}] `);

    }
}

row = 2;
coulm = 2;

let Ar2 = [];
for (let index = 0; index < row; index++) {
    Ar2[index] = [];
    for (let inerIndex = 0; inerIndex < coulm; inerIndex++) {
        Ar2[index][inerIndex] = Math.random().toFixed(2);
        console.log(`Ar_2 :: ${Ar2[index][inerIndex]}`);

    }
}

console.log(Ar2);


console.log(Ar);


//! task about dequeue
function DeQueue() {
    //this={}

    this.length = 0;
    this.push = function (element) {
        this[this.length] = element;
        this.length++;
    };
    this.shift = function () {
        //delet first element
        // return the deleted element
        //but the index  after the deleted element in the index who delete
        //return length after decrement

        let del = this[0];

        for (let cun = 0; cun < this.length; cun++) {
            this[cun] = this[cun + 1];
            delete this[cun + 1];
        }

        for (const key in this) {
            if (this[key] == undefined) {
                delete this[key];
            }
        }

        this[this.length--];
        return del;
    };

    this.unshift = function (element) {
        //delet first element
        // return the deleted element
        //but the index  after the deleted element in the index who delete
        //return length after decrement
        for (let cun = this.length - 1; cun >= 0; cun--) {
            this[cun + 1] = this[cun];
        }
        this[0] = element;
        this.length++;


        // return this
    }

}
const dee = new DeQueue();
console.log(dee.unshift(100));
console.log(dee.unshift(20));
console.log(dee.unshift(60));


console.log(dee);

//Array as 'Computer since' deque.