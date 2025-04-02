// Splice Method like slice in String 
//!how to delete an element from an array the same way in object
//as WE Know Arrays are Objects can take any type of values primitive or non-primitive
const object = {
    name: "Abood",
    age: 20,
    username: "@Abood",
    personal: {
        email: "Abood@gmail.com",
        phone: "01001234567"
    }
}

console.log(object);
// delete object.personal;
delete object.personal;
console.log(object);


console.log("-----------");

let array = [
    "Shawqi",
    "Hatem",
]
console.log(array);

// !Performance optimization issue: JavaScript tells you not to use an array like an object. The biggest mistake is deleting elements using `delete`.
array[0] = undefined;
delete array[0];
console.log(array);

console.log("-----------");

//using splice(StartIndex,The numberOF Elment will deleted ) method
//its used to remove or "modify"=>'Not Copy or Create' without return value or for insert value

let ar = ["Abood", "Ramez", "uper", "noha", "Aboud"];
//remove from the array
console.log(ar);
console.log(ar.length);


const ElementRemoved = ar.splice(2, 1);
console.log(ElementRemoved);//['uper']
console.log(ar);
console.log(ar.length);

ar.splice(1, 0);
console.log(ar);
console.log(ar.length);

//replace an element
ar.splice(0, 1, "Abood_Ramez_Mushtah");
console.log(ar);
console.log(ar.length);

ar.splice(ar.length - 1, 1, "MohamedNaje");
console.log(ar);
console.log(ar.length);

ar.splice(2, 1, "Noha Edite");
console.log(ar);
console.log(ar.length);

//insert to begining
const whatArrayreturn = ar.splice(0, 0, "Mushtaha Family");
console.log(whatArrayreturn);//[]
console.log(ar);
console.log(ar.length);

//insert to end
ar.splice(ar.length, 0, "other personal...");
console.log(ar);
console.log(ar.length);

//negative index allow
//-1=> ar.length-1 
ar.splice(-1, 1);//=>pop();
console.log(ar);
console.log(ar.length);
//-2=> ar.length-2 as startPoint
ar.splice(-2, 2);//=>pop();
console.log(ar);
console.log(ar.length);

console.log("-----------");
//slice([start],[end]) Method.
// !its return new array not modify the original array
// slice copise from start to end not include end and return new array
let aa = ["i",
    "love",
    "Front"
    , "End"
]

//!slice() cant use to remove ,modify,insert or delete element from array.
//!slice used to  extract and copy the element form array then return it in new array.
// !start,end allowed negative value

let newAr = aa.slice(0, 2);
console.log(aa);// !thier is no change in original array
console.log(newAr);


let newNegAr = aa.slice(-3, aa.length);
console.log(aa);// thier is no change in original array
console.log(newNegAr);



//!It’s similar to a string method str.slice, but instead of substrings, it makes subarrays.
let str = "Abood Ramez Mushtaha";
console.log(str.slice(0, 5));


console.log("-----------");

let copyarray = aa;
copyarray.splice(0, 1, "Noha Test");
console.log(copyarray);
console.log(aa === copyarray);


let clonearray_2 = aa.slice(0, aa.length);
clonearray_2.splice(0, 1, "Noha Test");
console.log(clonearray_2);
console.log(aa === clonearray_2);

console.log("-----------");

// !Concat() Method -> marge tow arrays the return new array accebt any type of value {} or primitive value
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9];
console.log(arr1);
console.log(arr2);
let arr3 = arr1.concat(arr2, 10, 11, 12, 13, 14, "abood", { name: "noha" }, 15);

console.log(arr3);

console.log("-----------");
let forA = ["Abood", "Ramez", "uper", "noha"];
//  !'ForEach' in array it  have call back function with only 3 argument => element, index, array
forA.forEach((element, index, array) => {
    console.log(array[index]);

});
console.log("-----------");

//!Search Method =>  'indexOf','lastIndexOf','includes'

let forB = ["A", "B", "C", "A", "C", NaN];
console.log(forB.indexOf("A"));
console.log(forB.indexOf("B"));
console.log(forB.indexOf("C"));//2
console.log(forB.indexOf("a"));//! -1 ->//  mean not in array
console.log(forB.lastIndexOf("C"));//4
console.log(forB.includes("A"));
console.log(forB.includes("d"));
console.log(forB.indexOf(NaN));//-1
console.log("DOES INCLUDE C :: ", forB.includes("C"));

console.log(forB.includes(NaN));//include() handel NaN correctly

//  !find()=> used with arrayOF object;
let users = [
    { id: 1, name: "Abood" },
    { id: 2, name: "Ramez" },
    { id: 3, name: "Noha" }
];
// Search by id
usersId = Number(prompt("Whats your id looking for ?"));

// tacke call back function like forEach 
let find = users.find((element) => { // return the element if found
    return element.id === usersId //condition
});

console.log(find);
//undefined if not found id   callback condition

/************************ */

let f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let fondd = f.find((element) => {
    return element > 5
});
// return the first element that meet the condition
console.log(fondd);

//foreach just for loop for array its return undefined with any condition
// console.log([2, 5, 4, 7, 8].forEach((element, index, array) => {
//     return element > 6;
// }));//undifined

//findeIndex(), findLastIndex()  its return the condition result return like items
//but indexof return the index of the element ,last indexOf return the last index of the element

let forC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let new_forc = forC.findIndex((element) => {
    return element > 5
});

console.log(new_forc);

let fon = forC.findLastIndex((element) => {
    return element
});

console.log(fon);

//Remeber that to this example
const RamezUser = { id: 2, name: "Ramez" };
let users_2 = [
    { id: 1, name: "Abood" },
    RamezUser,
    { id: 3, name: "Noha" }
];
// console.log(users.includes({ id: 2, name: "Ramez" }));==> not the same object
console.log(users_2.indexOf(RamezUser)); //here i garantee the object is the same


// !Filter() Method
// use if I Search many elements in array
//  its does not modify the original array
//  its return new array hvaing the collection of all elements that i filter by condition

let users_3 = [
    { id: 1, name: "Abood", isSubscribe: true },
    { id: 2, name: "Ramez", isSubscribe: true },
    { id: 3, name: "Noha", isSubscribe: false }
];

let new_users_3 = users_3.filter((element) => {
    return element.isSubscribe;
});

console.log(new_users_3);

// Transforming an array with the `map()` method: it modifies the array elements and returns them in a new array.  
// The `map()` method iterates over the entire array and returns a new array.
//modify evrey element in array by call back function
//return new array
// ! the most common use of map() to render map elememnts in the html document
// Displaying data on the website page
let users_4 = [
    { id: 1, name: "Abood", age: 20, isSubscribe: true },
    { id: 2, name: "Ramez", age: 60, isSubscribe: true },
    { id: 3, name: "Noha", age: 50, isSubscribe: false },
    { id: 4, name: "Genen", age: 40, isSubscribe: false }
];

let new_users_4 = users_4.map((element) => {
    return `<div>ID :: ${element.id} -- Name :: ${element.name} -- Age :: ${element.age} </div>`
});

console.log(new_users_4);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let new_num = num.map((element) => {
    return element * 10;
});

console.log(new_num);

// NOTE:: forEach()  does not return new array return undefined
let nu = [];
num.forEach((element) => {
    nu.push(element * 10)
})
console.log(nu);

/*
 The `sort()` Method  
We know that an array is an ordered collection. Sometimes, we need to change the order. The `sort()` method modifies the array and returns the sorted version.
*/

let nume = [1, 2, 14, 8, 9, 7, 63];
console.log(nume);
nume.sort();// `sort()` treats them as strings based on Unicode.
console.log(nume);

//to solve the problem use compare function  also use call back function
let nume_2 = [1, 2, 14, 8, 9, 7, 6, 3];
console.log(nume_2);
// nume_2.sort((a, b) => {
// a=> the second element
// b=> the first element
//if first element > second element return negative number
//if first element < second element return positive number
//if first element == second element return 0
//if (a < b) return -1; // b most come after a
//if (a > b) return 1;// a most come after b
//if (a == b) return 0; // do not change any thing
// });
//insted all 3 condition use call back function like this
nume_2.sort((a, b) => {
    return a - b
});


console.log(nume_2);
