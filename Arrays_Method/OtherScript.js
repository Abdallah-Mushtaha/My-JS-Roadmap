//Revition and new lecture
// Array OF object the most popular data structure in JavaScript Front End
let developers = [
    {
        id: 1,
        name: "Abood",
        email: "Abood@gmail.com",
        jop: "Front-End Developer"
    },
    {
        id: 2,
        name: "Ramez",
        email: "Ramez@gmail.com",
        jop: "Back-End Developer"
    }
    ,
    {
        id: 3,
        name: "Noha",
        email: "Noha@gmail.com",
        jop: "Front-End Developer"
    }
    ,
    {
        id: 4,
        name: "Rola",
        email: "Rola@gmail.com",
        jop: "Full-Stack Developer"
    }
    ,
    {
        id: 5,
        name: "Donia",
        email: "Donia@gmail.com",
        jop: "Front-End Developer"
    }
]

//foreach, find() ,filter(),map()
//find()=>for Search in array

let fore = developers.forEach((developer, index, array) => {
    console.log(developer.name);
    //you should not edite array in forEach its bad practice like
    //Bad practice
    // array[index].name = `(${index + 1}${developer.name})`;
    //Bad practice any edite to the prorarity ==> will be bad practice
    // developer.name = `${index + 1}-${developer.name}`;

});
console.log(fore);//undifinde

//find()=>for Search in array
// find first element that match the call back condition return the element
//if no eleMENT match the call back condition return undifined
let back_End_Dev = developers.find((developer) => {
    return developer.jop === "Full-Stack Developer";
})
console.log(back_End_Dev);

//filter()=>for Search in array for multipul elements that match the call back condition return new array
//if no eleMENT match the call back condition return empty array
let front_End_DEV = developers.filter((developer) => developer.jop === "Front-End Developer"
)
console.log(front_End_DEV);

//! filter(), find(),map() ==> call pure function not modify the original array
//  the input represent   only data not modifiy it
// then give only output
//DataStructuer =>> its mean the way to represent data in my code
//oop =>> pattern design pattern  the way to write code
// we need to foucase on " functional programing " as React develober more.



//map() method
//transforming An Array with map() Method
//map() Method  its return new array
//modify evrey element in array by call back function return new array

// ----------------------------------

// [...] -> [...]
// first it iterates over an array elements, modifies them base on
// callback condition, and returns a new modified/transformed array.

let developerName = developers.map((developer) => {
    return developer.name
})
console.log(developerName);
let developerJop = developers.map((developer) => {
    return developer.jop;
})

console.log(developerJop);


// =>> simple explain how react framWork run ..

/*  

! React => UI = data + ... (wrong)  

react => function(data) = UI (correct)  

React renders array easily in The DOM.  

[...] (must be string or React Components) -> Renders in DOM.  

developersNames -> Shawqi Shadi Ahmad Sama Mohammed Haneen.  


Data:  
developers[]  

UI  
<div>  
    <h1>Name</h1>  
    <p>Email</p>  
</div>  

Component (function):
const User = function (data) {
    return (
        <div>
            <h1>Name: {data.name}</h1>
            <p>Email: {data.email}</p>
        </div>
    )
}

It doesn't make sense to do it for 100 users, for example.
<User name="Shawqi" email="..." />
<User name="Shawqi" email="..." />
<User name="Shawqi" email="..." />

Solution using map() Method

const developersHTML = developers.map((developer) =>
    <User name={developer.name} email={developer.email} />
)

developersHTML[];

rendering =>> mean you have  programing languge thought it you will view any thing like data to do output
for html  and representation on the screen
you have a programming language through which you generate output, pass it to HTML, and display it on the screen .
*/

//sort() Method modify the original array and return the new sorted array
let nume = [1, 2, 14, 8, 9, 7, 63];
console.log(nume);
let sortedAra = nume.sort((a, b) => a - b);
//a > b return 1
//a< b return -1
//a==b return 0
console.log(nume);
console.log(sortedAra);

//NEW INFORMATION ..........................................

//reverse() Method
const reversnum = sortedAra.reverse();
console.log(reversnum);

//splite() Method, join() Method for string
const str = "Abood Ramez Noha Rola Donia";
console.log("Defult String :: ", str);

const splitedStr = str.split(" ");// split the string by space return array
console.log(splitedStr);

const joinedstr = splitedStr.join("-");
console.log("joined string :: ", joinedstr);


// let from = prompt("Enter Your Name");
// let massage = prompt("Enter Your Massege");
// let To = prompt("Enter splite btewen by comma");

// let userNames = To.split(",", 2);//determin the number of splite 'length'
// userNames.forEach((user) => {
//     console.log(`from ${from} Say to :: ${user} :: ${massage}`);
// });

// let test = To.split("");//split by empty string return array of charcters
// console.log(test);

//When we need to iterate over an array – we can use forEach, for or for..of.
// When we need to iterate and return the data for each element – we can use map Like this.
let arr = splitedStr.map((element) => element);//call back function cant be omit
console.log(arr);
console.log(arr === splitedStr);


console.log("-----------");



//reduce() Method 
//! its with pure function dose not modify the original array
//  return new array with single value from Array.
let arr_2 = [10, 12, 5, 3, 20];
let result = arr_2.reduce((accumulator, price, index, array) => {
    return accumulator + price;
}, 0);//takes 2 arguments (call back function, initial value accumulator) 
//initial value is 0 in sum ,1 in multiplication
// you can omit the initial value but code will less readable

console.log(result);

let products = [
    { id: 1, name: "phone", price: 1000, taxRate: 0.1 },
    { id: 2, name: "laptop", price: 500, taxRate: 0.05 },
    { id: 3, name: "hed-phone", price: 100, taxRate: 0.15 },
]


let price_total = products.reduce((sum, product) => {
    //0=1000+1000*0.1
    //1100=2000+2000*0.05
    //1625=3000+3000*0.15
    return sum + (product.price + product.price * product.taxRate);
}, 0);

console.log(price_total);

// let products_Mas = products.reduce((text, product, index, array) => {
//     if (index !== array.length - 1) {
//         return text + product.name + ",";

//     } else
//         return text + product.name + "";

// }, "You but ::");

// console.log(products_Mas);

let products_Mas = products.reduce((array, product) => {
    return array.concat(product.name);
}, []);

products_Mas_join = products_Mas.join(",");
console.log(products_Mas_join);


console.log("-----------");


//   Array.isArray() Method 'Constructor functio' 
let giveme_Array = function (input) {
    if (Array.isArray(input))
        return true
    else return false;

}
console.log(giveme_Array([]));
console.log(giveme_Array({}));



console.log("-----------");



//Data Structure example
//object
//array
//set
//map
//stack
//queue
//dequeue


/*


Map as Data Structure look like  object



*/

// -----------------------
// Map And Set =>>tow different data structure 
// Data Structure  =>> way to represent data in my code
//Map is a collection of keyed data items, just like an Object.
//  But the main difference is that Map allows keys of any type.
/*

Map as Data Structure look like  object

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

map[key] isn’t the right way to use a Map
Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).

So we should use map methods: set, get and so on.

*/

let object = { name: "Hadi" };
let object_2 = { name: "Remas" };

// !as we know the prparty name is unique also its String so cant be duplicate
// !if duplicate the last one will be overide as you see   
let arra = {
    1: "any thiges",
    "1": "any thiges_2",
    [object]: object,
    [object_2]: object_2
}

console.log(arra);
console.log(String(object), String(object_2));
console.log(String(object) === String(object_2));


//to solve this problem use Map()


let map = new Map([
    //its not arrays its  tow p arriars  
    // Is there a language similar to `Array` in syntax and behavior, and also close to `Object`
    [1, "any thiges"],//key, value
    ["1", "any thiges_2"],
    [object, "HADI Object"],
    ["object_2", "Remas Object"]
]);//we write new Map() as Constructor function

console.log(map);
console.log(map.size);// AS length    

console.log(map.get(1));
console.log(map.get(object));
console.log(map.get("object_2"));//we use key to access the value

//map not fixed size u can add new element any time

map.set("New_Key", "New_Value");// key, value
console.log(map.get("New_Key"));

// map.has(); is key exist or not if not return false
console.log(map.has("New_Key2"));
console.log(map.has("New_Key"));
console.log(map.has("object_2"));
console.log(map.has("1"));

map.delete("1");
console.log(map.has("1"));
// map.clear();
// console.log(map);

//Chaining
// Every map.set call returns the map itself, so we can “chain” the calls:
map.set(2, "2").set(3, "3").set(4, "4");
console.log(map);

console.log("-----------");

//Iteration over Map

for (let key of map.keys()) {
    console.log(key);

}
console.log("-----------");

for (let value of map.values()) {
    console.log(value);
}
console.log("-----------");
for (let pair of map.entries()) {
    console.log(pair[0], pair[1]);
}
console.log("-----------");
for (let key of map) {
    console.log(key);

}

console.log("-----------");

let osama = { name: "osama" };
let new_maP = new Map([
    [osama, "Familous Object"],
    ["osama", "test Life"]
]);
console.log(new_maP);

for (let key of new_maP) console.log(key);

//------------------------------------------
// Object as aconstructor function have entries() take object return array  have array 


let number = {
    1: 1,
    2: 2,
    3: 3,
    4: 4
}

//convert from Object to Map ,Map to Object

let numMap = new Map(Object.entries(number));// number object convert to Map
console.log(numMap);

let ObjNumber = Object.fromEntries(numMap);
console.log(ObjNumber);

/*


Set Data Structure look like Array



*/


//Set Data Structure look like Array .
/*
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

omit the dublicate value
*/

let set = new Set();
set.add(1);
set.add(2);
set.add("Mohamed");
set.add(".....");

console.log(set);

set.has("Mohamed");
set.has(1);
set.has("alii");

set.delete(1);
console.log(set.size);

console.log(set);

// set.clear();
console.log(set.size);
console.log(set);
console.log("-----------");

// iteration over Set

for (let value of set.keys()) {
    console.log(value);
}
console.log("-----------");
for (let value of set.values()) {// the most use
    console.log(value);
}
console.log("-----------");
for (let value of set.entries()) {
    console.log(value);
}
//WeakMap and WeakSet if you want read about it

console.log("-----------");
//These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.
/*
Object.keys, values, entries
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
*/
//Object.keys, values, entries
console.log(Object.keys(number));
console.log(Object.values(number));
console.log(Object.entries(number)); // array of arrays


//NOTES:: Map spical type of data structure of  object  to have defrent Type of key
// Set spical type of data structure of  Array to have unique value  to omit dublicated value turn a blind eye dublicated value
