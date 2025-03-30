// "use strict";
/*
Strings
in JavaScript textual data is stored as strings, there is not separate type for a single character.

quotes: single, double, and back-ticks. single and double are essentially the same. back-ticks allow us to embed any expression into the string, by wrapping it in ${...}.

another advantage of using back-ticks is that they allow a string to span multiple lines.

as you can see, all special characters start with a back-slash character (). it is also called an "escape character".
22.2 String Length

length property has the string length: "Shawqi".length -> 6

 Accessing Characters
- to get a character at position
(index), use square brackets
[index] or call the `at(index)`
method. the first character starts
from the zero position/index.

- iterate over characters using
`for..of`:

for (const character of string) {
  console.log(character);
}


 Strings Are Immutable
- strings can not be changed in
JavaScript. it is impossible to
change a character.

string[0] = "s"; // error -->in strict mode


22.5 Changing The Case `toLowerCase
()` and `toUpperCase()`

22.6 Searching For Sub-Strings
`indexOf()`, `lastIndexOf()`,
`includes()`, `startsWith()` and
`endsWith()`

 Getting a Sub-String `slice()`
, `substring()`, and `substr()`
- `slice(start, end)`:
-
returns the part of the string
from `start` to `end` (not
including end).

if there is no `end` slice goes
till the end of the string.

negative values mean the position
is counted from the end of the
string.


- `substring(start, end)`:
returns the part of the string
between `start` and `end` (not
including end).

- this is almost the same as `slice
()` but it allows the `start` to
be greater than the `end`.

- negative values are not
supported.

- `substr(start, length)`:
returns the part of the string
from `start` with the given
`length`. Forwards diraction.

triming strings 'trim()'

*/

let userName = "John \nrahem \t riad"; // single or double quotes not allow new lines we use spical character \n "scaping slash"
console.log(`back-ticks allow us to embed
any expression into the string, by wrapping it in ${userName}.`); //back-ticks allow new lines

console.log("hello 'Evre one  i am abood ' ");
console.log('hello "Evre one  i am abood " ');
console.log("hello 'Evre one  i am abood ' ");
console.log("'hello \"Evre one  i am abood\"'");
console.log(
    "Lorem ipsum dolor sit amet consectetur \\ Dolorum, reprehenderit "
);
console.log(userName.length);
console.log(userName.length + " ");
console.log(userName.length + "\n");
console.log(userName.length + "\t");
console.log(userName.length + "\\");

// 22.3 Accessing Characters
console.log(userName[0]);
console.log(userName[2]);
// length=>18
//userName[18] => undefined
//userName[1] => o
//userName[userName.length-1] => d
console.log(userName[userName.length]);
console.log(userName[userName.length - 1]);
// let string = "Shawqi";
// string[0]; -> "S"

// string.at(0); -> "S"
// string[length - 1]; -> "i"

// string.at(-1); -> "i"
console.log(userName.at(0));// !userName.at(-1)=> is mean  the character at the index  linght-1 reverse index
console.log(userName.at(5));
console.log(userName.at(10));
console.log(userName.at(-1));

for (const char of userName) {
    console.log(char);
}

let te = "      Abood Mushtaha     ";
te = "Abood Ramez Mushtaha";
console.log(te);
//wil not work in un-strict mode
te[0] = "a";
te[6] = "R";
console.log(te);

console.log(te.toUpperCase());
console.log(te.toLowerCase());

console.log("------Search of subString--------");
let email = "AboodRmushtaha@gmail.com";
console.log(email.indexOf("m")); //6
console.log(email.lastIndexOf("m")); //23
console.log("email".indexOf("l")); //4
console.log(email.indexOf("r")); //-1 --> becues its not found
console.log(email.includes("Abood")); //true
console.log(email.includes("Rame")); //  false
// ! `lastIndexOf`, `includes` ==> convert to a string first, then search.
let str = "Hello world true";
console.log(str.indexOf(true));
console.log(str.includes(true));
console.log(str.startsWith(true));
console.log(str.endsWith(false));
console.log(str.startsWith("Hello"));
console.log(str.endsWith(true));

console.log("------Getting a Sub-String--------");
let text = "Hello@world my age 25 years";
console.log(text.slice(0, 5));// cut from 0 to 5 without 5
console.log(text.slice(6));
console.log(text.slice(-3)); //==>cut from before 3 charters to end

console.log(text.substring(21, 19));// cut from 19 to 21 with 21,19
console.log(text.substring(-21));//! ==> not support negative values

console.log(text.substr(0, 5)); // =>> cut from 0 to 5 with 5 (start,length)
console.log(text.substr(-6, 5));//suporrt negative values

console.log(text.trim());

// task_1 conver the first  Charcater to UpperCase

function UpperCaseFirstLetter(str) {
    let result = str[0].toUpperCase();
    // result += str[0].toUpperCase() + str.slice(1);
    for (const char of str) {
        if (char === str[0]) continue
        else result += char;

    }
    return result;
}

let namee = "omar";
console.log(UpperCaseFirstLetter(namee));
console.log(UpperCaseFirstLetter(namee) === "Omar");

/*    Task - 02   

write a function `truncate
(string, maxLength)` that checks
the length of the `string` and, if
it exceeds `maxLength` replace the
end of the `string` with the
ellipsis character "...", to make
its length equal to `maxLength`.

 truncate("AsSalam Alaikum, how
www
are you?", 25) -> "AsSalam

Alaikum, how are ..."

NOTE:: Always before  doing the code check the function active or not.
*/

function truncate(string, maxLength) {
    let result = "";
    for (let char = 0; char <= string.length; char++) {
        if (char < maxLength) {
            // console.log(string[char]);
            result += string[char];

        }


    }
    // if (string.length > maxLength) {
    //     result = string.slice(0, maxLength) + ".....";
    // } else {
    //     result = string
    // }

    return result += ".....";
}

console.log(truncate("kdajklsdjklasjkldjklasjfklda", 5));


//Task-03 "$120"
function formatCurrency(amount) {
    let res = 0;
    let indexOfUSD = amount.indexOf("$");
    // res = amount.slice(indexOfUSD + 1);//==>120 but if syntax like 'my balance $120 and my Cache $150' ""

    res = amount.slice(indexOfUSD + 1, indexOfUSD + 4);




    return res;
}

// console.log(formatCurrency("heloo i have $120 and $150 in my cash"));

//the same task but with the new syntax
function formatTHEsalary(value) {
    let object = {};
    let KeyObjec = 1;

    for (let char = 0; char < value.length;) {
        if (value[char] !== "$") {
            char++;
            continue;
        }
        object[KeyObjec] = value.slice(char + 1, char + 4);
        char += 4;
        KeyObjec += 1;

    }
    let res = "";

    for (const key in object) {
        res += object[key] + " ";
        // console.log(res);

    }



    return res;
}

console.log(formatTHEsalary("my salary $120 and $150 and $180"));



//the same task but with the new syntax when i dont know the number of $
function formatTHEsalary_2(value) {
    let object = {};
    let KeyObjec = 1;

    for (let char = 0; char < value.length;) {
        if (value[char] !== "$") {
            char++;
            continue;
        }
        // my salary $120 ,$10,$20,$50 and $150 and $180

        let amount = parseInt(value.slice(char + 1));
        object[KeyObjec] = amount;
        char += String(amount).length;
        // char += 4;
        KeyObjec += 1;

        // console.log(char);

    }
    let res = "";
    // console.log(object);

    for (const key in object) {
        res += object[key] + " ";
        // console.log(res);

    }



    return res;
}

console.log(formatTHEsalary_2("my salary $120,$10,$20,$50 and $150 and $180"));


//the same task but with the new syntax when i dont know the type of $ or USd or ILS
function formatTHEsalary_3(value) {
    let object = {};
    let KeyObjec = 1;

    for (let char = 0; char < value.length;) {
        char += 1;
        if (isNaN(value[char]) || value[char] == " ") {
            continue;
        }

        let amount = parseInt(value.slice(char));
        object[KeyObjec] = amount;
        char += String(amount).length;
        // char += 4;
        KeyObjec += 1;

        // console.log(char);

    }
    let res = "";

    for (const key in object) {
        res += object[key] + " ";
        // console.log(res);

    }



    return res;

}

console.log(formatTHEsalary_3("my salary 120,10USD,20,50,2250 and 150 and 180"));


