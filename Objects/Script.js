//  Here Talk about about Object Reffrancess & Coping Garpige colliction

/*object storg multepul value to same varible  key:value using brakets {} and Key its proparityName  key type =>String 
to accssies this proparty using dot or :

Note :
 primetive DT => String ,int ,boolean ,char
NON Primetive DT => Arrays ,Objects

*/

let std = {
    name: "Abood",
    Email: "Abood@gmail.com",
    age: 20,
    gpa: 80.88,
    isfaler: false,
};
console.log(typeof std);
console.log(std);
let empObj = new Object();
console.log(empObj);
let anotherWay = {};
console.log(anotherWay);
console.log(Boolean(empObj)); //true
// console.log({} === {}); //false

console.log(typeof std.name);
console.log(std.name);

// Add&Delet proparty to object

std.haveCarde = false;
delete std.age;
console.log(std.haveCarde);

console.log("-----Access Brackets-----");


// access Brackets
std["data Autheris"] = "true";
std["data Autheris"] = false;
std["Abood Access here"] = "Abood";
console.log(std);

delete std["data Autheris"];

// Computed proppaerty =>  the proparity get from exprition=>'proparty'..its value OF varible  will access using Brackets []

let key = "Email";
console.log(std[key]); //std["Email"]

let Food = {};
let result = prompt("what is your Fauvrite Food", "Apple");
// let Food = {
//   [`${result}_count`]: 20,
// };
// طريقة اخرى
Food[`${result}_count`] = 20;

console.log(Food);

// proparity value short-Hand

function SaveData(name, Email, age, gpa) {
    // this={}
    //as you see the proparty its the same name OF parmetr
    //  return this;
    return {
        name, //name:name
        Email,
        age,
        gpa,
    };

}

//thier is no limitiones in Object so key 'ProParity Name' can be 'for,while,loop'

let user = {
    for: "my lover",
    loop: 20,
    while: "here we go",
};

// proparity Exist  Test

let setinges = {
    fontsize: 16,
    ["font-width"]: 800,
    themes: undefined,
    //   themes:"Darker"
};

console.log("Not founded yet ::" + setinges.fontFamily);

//Note BOOLEAN(undefinde) false

if (setinges.fontFamily === undefined) {
    // !setinges.fontFamily
    console.log("Write now will Added");
    setinges.fontFamily = "San_Seerfece";
}

console.log("Adedd true ::" + setinges.fontFamily);

// console.log("themes" in setinges);
console.log("themes" in setinges);
//! 'in' search about proparity name
console.log("themes" in setinges); // search about proparity name 'key'
console.log(setinges.themes === undefined); //just in this case search about proparity value but the origin should search about proparity name

// ! for in loop to Object 'object key'

for (let key in setinges) {
    //   console.log(key);
    console.log(`${key} is ${setinges[key]}`);
}


// ! order Like object order integer first then evrey thing sme object order
let char = {
    a: "A",
    b: "B",
    c: "c",
    2: "D",
    1: "E",
    f: "F",
};

for (let key in char) {
    console.log(char[key]);
}

// Tasks

// calc the sum of cart object prices
let cart = {
    apple: 30,
    visitaple: 20,
    banana: 50,
    mango: 40,
};
let total = 0;
for (let key in cart) {
    total += cart[key];
}

console.log(`The Sumtion :: ${total}`);

// give custemer discount if product greter thane 10 discount(-5)

let totalAfterDiscount = 0;
for (let product in cart) {
    if (cart[product] > 10) {
        cart[product] = cart[product] - 5;
        totalAfterDiscount += cart[product];
    } else {
        totalAfterDiscount += cart[product];
    }
}
console.log(`The Sumtion :: ${totalAfterDiscount}`);

//  !object Refrencss and Cobing

//here copyed just value
let name = "Abood";
let secondName = name;

console.log(name);
console.log(secondName);

name = "Mona";

console.log(name);
console.log(secondName);

/* ! here stored refrancess Of object not the instance object
obj=asddress
secObj=the same address
 
*/
//const
let obj = {
    name: "Abood",
    Father: "Ramez",
};
let secObj = obj;

console.log(obj);
console.log(secObj);

obj.name = "Ramy";

console.log(obj);
console.log(secObj);
// console.log({}==={}); false becuse tow object not the same address
console.log(Boolean({})); //true have address
//Note const can be Assigen but not re Assigen

/* 
  ! Cloning and Merging Objects  

  What do we need to duplicate an object?  
  - The goal is to copy the object so that the new object is independent of the original.  

  There are two ways to do this:  
  -- Using a `for...in` loop to manually copy properties.  
  -- Creating a new object and copying properties into it.  

  This ensures **independent data** without reference to the original object. */

//using for in...

let FObj = {
    x: 10,
    y: 55,
    z: 60,
};

let SecObj = {};

for (let key in FObj) {
    secObj[key] = FObj[key];
}
console.log("befor change....");

// console.log(FObj);

FObj.x = 11;
console.log(FObj);

console.log("After change....");

console.log(secObj);

console.log(FObj === SecObj); //False becuse => not hte same address

// ! using Object Assign function
const thirdeObj = Object.assign({ e: 4, x: 2 }, FObj);
console.log(FObj === thirdeObj); //not the same addres so =>False
console.log(thirdeObj);

//Deep Cloning

let firstDeepObj = {
    x: 1,
    y: 2,
    z: 3,
    subObj: {
        q: 11,
        aa: 12,
        zz: 13,
    },
};

console.log(firstDeepObj);

// ! using Object structuredClone function

let SecDeepObj = structuredClone(firstDeepObj);
console.log(firstDeepObj === SecDeepObj); //not the same address =>Fales
console.log(firstDeepObj.subObj === SecDeepObj.subObj); /*
  true becuse the Object.assign function change the object address not subObject Address to Solve problem use tructuredClone function 
  */
firstDeepObj.subObj.q = 90;
console.log(SecDeepObj);

console.log(SecDeepObj.subObj.q);
