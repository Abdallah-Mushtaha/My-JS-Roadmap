//short-revesion 
let std_1 = { name: "Rana", age: 20 };
let std_2 = { name: "Mohamed", age: 20 };

// How many time see the site 
let students = {
    [std_1]: 2,//[object object] string  key sholud be uniqe so take the last one to overRide
    [std_2]: 4

};
console.log(students);

//to solve problem use Map();

let map = new Map([
    [std_1, 2]
    , [std_2, 4]

]);
console.log(map);
map.set(1, "T");
map.set("1", "Tr");

console.log(map.get(1));
console.log(map.get("1"));
console.log(map.has(1));
console.log(map.has(10));


let set = new Set();
set.add(std_1.name);
set.add(std_2.name);
set.add(std_2.name);
set.add("Mohamed");
set.add(".....");
console.log(set);

console.log("-----------");

//map.keys(),map.values(),map.entries() allawde to iterate over map values
for (let key of map.keys()) {
    console.log(key);

};
console.log("-----------");
for (let key of map.values()) {
    console.log(key);

};
console.log("-----------");
for (let pair of map.entries()) {
    console.log(pair);

};

console.log("-----------");
for (let key of set.keys()) {
    console.log(key);

};
console.log("-----------");
for (let key of set.values()) {
    console.log(key);

};
console.log("-----------");
for (let pair of set.entries()) {
    console.log(pair);

};

// thiers more methods with it like delete() ,size() and clear()...

//Object.keys, values, entries  with simple object by Object constructor function
let o = {
    1: "any thiges",
    2: "any thiges_2",
    3: "any thiges_3",
}
console.log("-----------");

console.log(Object.keys(o));
console.log("-----------");
console.log(Object.values(o));
console.log("-----------");
console.log(Object.entries(o));

// -----------------------------

// ! # Destructuring assignment 'importent comnly used'
/* The two most used data structures in JavaScript are Object and Array.
    Objects allow us to create a single entity that stores data items by key.
    Arrays allow us to gather data items into an ordered list.

   ! However, when we pass these to a function, we may not need all of it. The function might only require certain elements or properties.

    !Destructuring assignment ::  is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

    Destructuring also works well with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

    distructuring syntax shuger to code be simple .



*/

// list of students but  I need one or tow of students without itration all students


// Array destructuring ::

let students_2 = ["Abood", "belal", "noha", "qondara"];
// its great  to do it 
let Fstd = students_2[0];
let Sstd = students_2[1];
console.log(Fstd, Sstd);

//  practice[name1,name2]=students_2
//  !destructuring assignment do the same thing in one line short syntex
let [Fname, , Thname] = students_2;
console.log(Fname, Thname);


let userName = "Abood Ramez";
// let arraySplit = userName.split(" ");

// let firstname = arraySplit[0];
// let secondname = arraySplit[1];

// console.log(firstname, secondname);

let [firstname, secondname] = userName.split(" ");
console.log(firstname, secondname);


console.log("-----------");

// converting an array to unique array using Set() ... to omit dublicate value
let Arr = ["Abood", "Bilal", "Cora", "Amona", "Bilal", "Cora", "Dina"];
let uniqeArray = new Set(Arr);
console.log(uniqeArray);

let [, e_2,] = uniqeArray;
console.log(e_2);

//Works with any iterable on the right-side
// …Actually, we can use it with any iterable, not only arrays:
let user = {};
[firstname, Secname] = userName.split(" ");
console.log(firstname, Secname);

// Looping with .entries()
let map_2 = new Map([
    [1, "TR"],
    [2, "load"],
    [3, "T"]
]);

// for (let key of map_2.entries()) {
//     console.log(key);
// }// nested OF this do ...

for (let [key, value] of map_2) {
    console.log([key, value]);

}

// by distructuring operator
// Swap variables trick
// There’s a well-known trick for swapping values of two variables using a destructuring assignment:
let a = 5;
let b = 10;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

console.log("-----------");

// The rest ‘…’
/*
Usually, if the array is longer than the list at the left, the “extra” items are omitted.
For example, here only two items are taken, and the rest is just ignored.
If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...".

The value of rest is the array of the remaining array elements.

We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.

*/
let Arr_2 = ["Abood", "Bilal", "Cora", "Amona", "Bilal", "Cora", "Dina"];
console.log(Arr_2);

let [first, , therd, ...restOtherUser] = Arr_2;
console.log(first, therd);
console.log(restOtherUser);


// Default values
// If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined 
//If we want a “default” value to replace the missing one, we can provide it using =
//Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.
// For instance, here we use the prompt function for two defaults


let ARR = ["Omar"];
let [firs = "Ali", second = "Jehan", therdd = prompt("Enter your Thirde name", "Ali")] = ARR
console.log(firs, second, therdd);


//-------------------------------------------
console.log("-----------");

// *******************************

//Object destructuring :: 

//The idea is to take what it gives me from a large object or a large array.
// in destructuring array to access name  return to orderd array 
//in destructuring object to access name  return to key name object
//in object you can change the key name BUT IN ARRAY YOU CANT
// The colon shows “what : goes where”.
//If we have a complex object with many properties, we can extract only what we need.


let normalObject = {
    name: "Abood",
    age: 20
}
// let name=normalObject.name;
// let age=normalObject.age;
// console.log(name,age);


let { name: user_Name, age } = normalObject//if need to change the variable name :new_name
console.log(user_Name, age);

//example ::
function getViewer() {
    // fetch data from DB ,Server, API
    //return viewer
    return {
        viewres: "Viewers",
        userName: "Abood@gmail.com",
        age: 20,
        subScribe: true,
        sitininges: {
            volume: 75,
            fontSize: 16
        }
    }
    // Suppose return multiple proberty
}

// and  i dont need all of them in one  item
let { userName: name, sessiones: s = [] } = getViewer();
console.log(name, s);

// -------------------------------------

//The rest pattern “…” in Object
let { userName: name_2, sessiones: ss = [], viewres: v, ...Propres } = getViewer();
console.log(name_2, ss, v);
console.log(Propres);

//NOTE :: the defult value in destructuring is undefind
// let{userName:name_3,sessiones:ss,viewres:v,}=getViewer();
// console.log(name_3,ss,v);ss=> undifined

//like :: 
// let num=[1,2,3]
// console.log(num[3]);//undefind
// let ob={name:"Abood",  data:'DATA'}
// console.log(ob.info);
//-------------------------------------------------------
// Nested destructuring
// If an object or an array contains other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

// In the code below options has another object in the property size and an array in the property items. The pattern on the left side of the assignment has the same structure to extract values from them
let { userName: name_4, sessiones: s_2 = [], viewres: vv, sitininges: { volume, fontSize } } = getViewer();
console.log(name_4, s_2, vv);
console.log(volume, fontSize);

//------------------------------------------------

//  !Smart function parameters :: 

// You have a function with many parameters, and some of them are optional. It doesn’t make sense for all or some of them to be `undefined`.  
// If two parameters are optional, that’s fine. But if there are many, we solve it using destructuring.  
// An example of this is a React component.




//here name,sitingesis required other optional
// function overvirewers(name, age, email, Sitinges) {

//     return {
//         name,
//         age,
//         email,
//         Sitinges
//     }
// }
// let result = overvirewers("Abood", undefined, undefined, {
//     fontSize: 16
// });
// console.log(result.Sitinges);
// console.log(result.age);
// console.log(result.email);
// insted this way 

function overvirewers({
    name,
    age = 21,
    email = "Abood@gmail.com",
    sitinges = {
        fontSize: 16
    }
}) {
    return {
        name,
        age,
        email,
        sitinges
    }
}

console.log(overvirewers({
    name: "Abood",
    sitinges: { fontSize: 17 }
}));
/*  
Component (function):

const User = function (data) {
    return (
        <div>
            <h1>Name: {data.name}</h1>
            <p>Email: {data.email}</p>
        </div>
    )
}
    ! insted that we can use destructuring object 

    name,email  react will store them in object so we can use destructuring

const User = function ({name,email}) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
        </div>
    )
}
    

-----------------------------------------
It doesn't make sense to do it manually for 100 users, for example.
<User name="Shawqi" email="..." />
<User name="Shawqi" email="..." />
<User name="Shawqi" email="..." />

The solution is using the `map()` method.

const developersHTML = developers.map((developer) =>
    <User name={developer.name} email={developer.email} /> name,email will send as object
)

developersHTML[];

rendering =>> mean you have  programing languge thought it you will view any thing like data to do output
for html  and representation on the screen
Do you have a programming language through which I can generate output, pass it to HTML, and display it on the screen?
*/

// counstructor function
//String  'Wrapper Object'
//Number  'Wrapper Object'
//Boolean 'Wrapper Object'
//new Array
//new Object
//new Map
//new Set   



// New  part toke about Date and time
// !Note :: here you will use backege or lipray for use it 
// !new constructor  function Date(); return date type number or string
/*
Let’s meet a new built-in object: Date. It stores the date, time and provides methods for date/time management.

For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.

*/
let now = new Date();

//if give date number => millisecond

console.log(now);
let now_2 = new Date();
// console.log(now_2);
console.log(now_2 === now);//diferent  millisecond

let Jan_01_1970 = new Date(0);
console.log(Jan_01_1970);

let Jan_02_1970 = new Date(24 * 60 * 60 * 1000);
console.log(Jan_02_1970);

let Jan_031_1969 = new Date(-24 * 60 * 60 * 1000);
console.log(Jan_02_1970);

let Jan_01_1971 = new Date(365 * 24 * 60 * 60 * 1000);//(365*24*60*60*1000) timestamp
console.log(Jan_01_1971);
console.log(now.getTime());

let date = new Date("2025-02-14");
console.log(date);
let data_2 = new Date(2025, 2, 14, 17, 35, 500);
console.log(data_2);

let yesterday = new Date(2025, 1, 14, 17, 35, 500);
console.log(yesterday)

console.log(yesterday.getFullYear());// 2025
console.log(yesterday.getDate());// 14
console.log(yesterday.getMonth());// 1
console.log(yesterday.getTime());// 1423155000000
console.log(yesterday.getHours());// 17
console.log(yesterday.getMinutes());// 35
console.log(yesterday.getSeconds());// 50   
console.log(now.getMilliseconds());// 0
console.log(yesterday.getDay());// number of day from 0 to 6 start from monday to sanday



console.log(yesterday.setFullYear(2026));
console.log(yesterday);


//  jason Methouds  
// convert object to string to send to server


let ob = {
    name: "Abood", data: 'DATA', TOString() {
        return `name ::${this.name}  , data :: ${this.data}`;
    }
}
// its not correct way
// console.log(ob.TOString());

// correct way 
let json = JSON.stringify(ob);
console.log(json);














