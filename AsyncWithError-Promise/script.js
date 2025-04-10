//قرائة من الموقع 
/*
Sync          Async
1             5 (2000 ms)
2             scriptLoader (2 ms)
3
4
6
7
scriptLoader
5
*/

//syncronous Code
// It means that the code is executed one after another, in the order it appears in the code


console.log(1);
console.log(2);
console.log(3);

console.log("-----------");

//NOTE :: callback function =>function 
// I call it from another function based on a specific condition, a function inside a function
// We don't call it directly; instead, the function that uses it calls it

// Asynchronous Code
console.log(1);

// Execute the code after a certain period, let's call it an API
// A function that takes a callback function and milliseconds as arguments

// 1second => 1000millisecond
// setTimeout(() => {
//     console.log(2);
// }, 2000);
setTimeout(() => {
    console.log(26);
}, 0 * 1000);// Zero parts of a second, it goes to another place and then returns once it finishes execution

console.log(3);


function ScriptLoading(src, AfterLoder, inErorr) {
    //we are usenig js to update our htmlMarkup
    let script = document.createElement("script");
    script.src = src;
    document.body.append(script); // Last thing in the document
    // document.head.prepend(script); // First thing in the document

    script.onload = AfterLoder; // After it finishes loading, do this
    script.onerror = inErorr; // If an error occurs during loading, do this


}



//wait for 5second
//load (request) the script file 
//excute the js file 
//this is a syncronous code

//new request from browser to server
// setTimeout(() => {
//     ScriptLoading("lect40.js")
// }, 5000)

// FromScriptLoder(); // This is a function from the file I will call, but I'm still making the request. Now, synchronous code will execute, and that's wrong
// How can I make it execute after the file is loaded using the callback function?
// This step is like the setTimeout story
// But instead of waiting for a few seconds, it will wait for the file to be called


// CallBack hell - A callback function calls another callback function inside it
// It's fine, instead of using a script stored on your computer, you can use an external library script, put its link, and it will load on demand
// This pattern or style is also called 
// callback-based asynchronous programming


// ! Callback hell is fine if it's just loading one or two files, but not 10, that's not good, and there is a solution for it that we'll learn about


// ScriptLoading("lect40.js", () => {
//     FromScriptLoder();

//     ScriptLoading("lect390.js", () => {
//         FromScriptLoder();

//     ScriptLoading("lect38.js", () => {
//         FromScriptLoder();

//         ScriptLoading("lect37.js", () => {
//             FromScriptLoder();
//         });
//     });
//     });

// }, () => {
//     console.error("error in loading lect390.js");

// });


//Asyncronous Code // The file will be loaded, which means it will take time




console.log(7);



//------------------another way with Error--------------------

// AfterLoder => call back function مره ما هيكون في ايرور ومره هيكون في ايرور
function ScriptLoading(src, AfterLoder) {
    //we are usenig js to update our htmlMarkup
    let script = document.createElement("script");
    script.src = src;
    document.body.append(script);//اخر شئي الاسظر
    // document.head.prepend(script);//append(script);اول شئي الاسظر

    script.onload = () => AfterLoder(null, src);

    //Handling Error ..
    script.onerror = () => {
        let error = new Error("error in loading " + src);
        AfterLoder(error, null);
    }

}

/* 
Once again, the recipe that we used for loadScript is actually quite common. It’s called the “error-first callback” style.
*/
ScriptLoading("lect40.js", (err, src) => {
    if (err) {
        console.error(err);// handling error
        return;
    }
    FromScriptLoder();

    ScriptLoading("lect39.js", (err, src) => {
        FromScriptLoder();
        if (err) {
            console.error(err);// handling error
            return;
        }
        //     ScriptLoading("lect38.js", () => {
        //         FromScriptLoder();

        //         ScriptLoading("lect37.js", () => {
        //             FromScriptLoder();
        //         });
        //     });
    });

});

console.log("Martial program still work dont be narvous :)");


//! ------------Promise-----------

// “producing code” that does something and takes time  زي لمن اعمل ريكوست من سيرفر اخر واستنى الرد
// “consuming code” that wants the result of the “producing code” once it’s ready هو الكود ال بستنى النتيجه من البرديوس كود سواء النتيجة حقيقية او error

// ! A promise is a special JavaScript object that links
//  the “producing code” and the “consuming code” together.
//! promise =>> تربط بين الكود ال بياخد وقت والكود ال بستنى النتيجه  

// !Promises
// !producing code: code that produces a promise because it is an async
// code and takes time to complete.

// !consuming code: code that consumes a producing code.
// promise is an object that links producing code and consuming code.


//NOTE :: when say JAvaScriptObject be ready to do instance object'constructor'  NEW....


//the promise constructor takes  arguments callback function:take tow arguments
//  resolve and reject and they are functions.
//!(resolve, reject) => { } its call =>> executor


//  بما انو انستنس اوف اوبجيكت يعني اله كلاس 

// executor 
//رح يتنفذ مباشره يعني في اله كونسترمتور رح ينفذ هذا الامر

// class promise{
//     constructor(executor){
// executor(resolve, reject);
//     }
// }

//resolve, reject 
//بما انهم فنكشن وفي ارجيومينت يعني هما كول باك فنكشن  بيتم استخامهم على شكل 
// resolve();
// reject();



// Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

// When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object.

/*
So to summarize: 
the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

The promise object returned by the new Promise constructor has these internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.


To summarize,
! the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of the corresponding promise object.

! A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.


! There can be only a single result or an error
The executor should call only one resolve or one reject. Any state change is final.

All further calls of resolve and reject are ignored :: 

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

The idea is that a job done by the executor 
may have only one result or an error.

!Also, resolve/reject expect only one argument (or none) 
!and will ignore additional arguments.

!The state and result are internal
!The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.




*/


//  let input = Number(prompt("Enter number from 1 to 10 "));
//الان لنفرض عنا بروميس بتاخد وقت 
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input >= 1) {
            resolve("Done");
        } else {
            reject(new Error("its not a number to small"));
        }
    }, 4 * 1000);
    // مش هيطبع اشي عشان فش حاجه تقولو بعد ماتخلص يابرومس اطبعلي
    // طبعا بعد الوقت قنا الstate , result بتتغير حسب ايش بستخدم resolve ام reject 
    //تكمن القصة ف اني كيف بدي اطبع  ؟؟ 



    //code.... anything...
    //بتختار وحده منهم فقط  ممكن تستخدم الاثنين بواسظة شرط 
    // يعني الهم الاثنين برانشيز مختلفين 
    // if(){}else if(){}
    // resolve("value");//اعطيه value اي شئ
    // reject(new Error("value"));//رح اعطيه ايرور اوبجيكت  


});

console.log(promise);
/*
**************** هيك الناتج طب انا كيف بدي اعمل Accessعليهم ؟؟ *****



 Promise {<fulfilled>: 'Done'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"Done"
 

*/

console.log("Accessing Promise Result");

// then => state=> fulfilled => result => Done
//هي افضل طريقه في اخرى انو نخلي ال 
// then 
// تاخد اكثر من براميتر بس لايفضل 


let loading = document.getElementById("loading");


function askUser() {

    loading.textContent = "loading...";
    //fulfilled
    promise.then((result) => {
        console.log(result);

    })

        //rejected
        // error => state=> rejected => result => Error: its not a number to small
        .catch((error) => {
            console.warn(error);
            // ! settled
        }).finally(() => {//بتتنفذ في كلا الحالات سواء في مشاكل او لا
            loading.textContent = "  program still work dont be narvous :)";
            // console.log("program still work dont be narvous :)");
        });

}


// askUser();

// !then,catch,finally called =>>consumers
//E.g. stopping loading indicators, closing no longer needed connections, etc.من اشهر امثلتها

// promise.then((result) => {
//     console.log(result);
// }, (error) => {
//     console.error(error);
// },finally(() => {//بتتنفذ في كلا الحالات سواء في مشاكل او لا
//     console.log("program still work dont be narvous :)");
// });


function ScriptLoadingPromise(src) {
    let promise = new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.append(src);
        document.body.append(script);
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("error in loading  ????"));
    });
    return promise;
}

ScriptLoadingPromise("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")
    .then((result) => {
        // console.log(result);
        return ScriptLoadingPromise("https://quickchart.io/chart.js")

    }).then((result) => {// Note: We can create another promise, this is part of the promise chain.

        console.log(result);

    }).catch((error) => {
        console.error(error);
    }).finally(() => {
        console.log("program still work dont be narvous :)");

    });

//! promise Chain
// Modify the result of the promise and return it as a new promise using `then`

// We can modify the value of the promise and return it. Also, we can create a new promise inside the promise using `then`
// let input = Number(prompt("Enter number ....."));



let pro = new Promise((resolve, reject) => {
    if (inpu >= 1) {
        resolve(inpu);
    } else {
        reject(new Error("its not a number to small ...........second"));
    }
});
console.log(pro);


pro.then((result) => {
    return result * 2;
}).then((result) => {
    return result * 5;

}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

//-------fetch -------------
console.log("--------fetch--------");

/*
! In frontend programming, promises are often used for network requests.
 So let’s see an extended example of that

Here's the translation of your sentence:

"I always make a request to the server, and it takes time for it to respond. This is where promises come in."

fetch() =>> return promise


 */
/*
Here’s the translation of your sentence:

"Now, I made a fetch request, which will return a new promise. Here, for the JSON file, I added a new option in the argument to create an array, and I specified the header, which contains information about the request that this is a JSON file. Now, the data has arrived as a JSON string, and we will convert it."

HTTPRequest  
fetch("http://127.0.0.1:5500/PersonalPageTasks/javascript/LIKAPI.json", {
    headers: {
        "content-type": "application/json",
    }
});

response.json(); =>> function =>promise ف رح اعمللها Return
return response.json();

Here's the translation of the sentence:

"After that, we learned that optional chaining is used with `.then()` and returns the data as an array of objects."

! fetch is used to make HTTP requests.
! HTTP requests are used to get data from a
server.

! server is a remote computer that has data.
! fetch is a function that returns a promise.




*/
let promese_2 = fetch("http://127.0.0.1:5500/PersonalPageTasks/javascript/LIKAPI.json", {
    headers: {
        "content-type": "application/json",
    }
});
promese_2.then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);
});

// another example API وهمي

let promese_3 = fetch("https://jsonplaceholder.typicode.com/users");
promese_3.then((response) => {
    return response.json();
}).then((userData) => {
    console.log(userData);

});

function Abood() {
    console.log("Abood isthe best programer");

}