console.log("hello we are learning API Asyinc/await");
/*

last session we learn ::

1.setTimeout()
2.Callbacks and Callbacks Hell
3.Promises
4.Promises Chaining .then()


*/

let subsicripe = true;// false
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (subsicripe) {
            resolve("Done");
        } else {
            reject(new Error("Error"));
        }
    }, 1000);

});
// console.log(promise);//{[[PromiseState]]: "pending", [[PromiseResult]]: undefined}



//  functionality api 'Web Api'  => some one give u functionality to use it
// functinality from js  => web api alert() confirm() prompt() window 
// سابقاfetch 


/*

----------- API ------------

It's client/browser/front-end side vs. server/back-end side.

Network request: fetching data from a client to a server.

Client does requests to a server and server does responses to a client.


network request is an HTTP request.
!HTTP request consist of:
- Request Line:
    1.1 Method: GET, POST, PUT/PATCH, DELETE, etc.
    1.2 URL: https://www.google.com
    1.3 HTTP Version: HTTP/1.1, HTTP/2, HTTP/3

- Headers: key-value pairs of additional information. وبنقدر نعطيها الهيدر الخاصة فيا 
- Body: data that is sent from a client to a server.// json data
ممكن نضيف heders, body قد ما بدك 


!HTTP response consist of:
Response Line:
1.1 HTTP Version: HTTP/1.1, HTTP/2, HTTP/3
1.2 Status Code: 200, 201, 404, 500, etc.
1.3 Status Message: OK, Created, Not Found, Internal Server Error, etc.

Headers: key-value pairs of additional information.

Body: data that is sent from a server to a client.


- Status Codes Table:
let say u have collection of staruse code every group represent to somthings..

 100
1. 1--: Informational

 200
2. 2--: Success
2.1 200 OK: The "usually GET" request was successful.
2.2 201 Created: The "usually POST" request was successful and a new resource was created.
2.3 204 No Content: The "usually DELETE"The request was successful but there is no content

300
3. 3--: Redirection

 400
4. 4--: Client Error
في حال ما التزم بشروط الريكوست اي الصيغه المطلوبه اله كان تنسى تبعت بدي وهكذا
4.1 400 Bad Request: The request was in-valid or can not be served. 
4.2 401 Un-Authorized: The request is un-authorized you do not have permesion to access this reuses
4.3 403: Forbidden ممنوعه لسبب ما 
4.4 404 Not Found

 500
5. 5--: Server Error
5.1 500: Internal Server Error


explian the what backend  do for example :

/login POST header ... body ...

في حال ما التزم بشروط الريكوست اي الصيغه المطلوبه اله كان تنسى تبعت بدي وهكذا
الباك اند هو ال بعملك ال api فهو ال رح يرجعلك ال states والمور الثانيه وهو ال هيستقبل الريكوست ويعالجه 

if (!request.body) return new Response("No Body", {status: 400})// its return as json 
if(!request.user.role!="admin")return new Response("Un-Authorized",{status:403})

const  page= await db.page.find(request.body.pageId)
if(!page)return new Response("No Found", {status: 404})

Represintoal state transfer 
REST API are common example of HTTP requests or network requests.
REST API uses JSON format for data exchange.

ايش ال بخليه  
REST 
القواعد العامه ال بلتزم فيها 
REST API thier languge JSON  
REST API use json format for data extchange
REST API use HTTP methouds to perform action on a request
REST API is a statles 


- When we say that a REST API is stateless, it means that each request from a client to the server is  
  independent. The server does not retain any information about previous requests made by the client. Each request must contain all the information the server needs to understand and process it.

- In other words, no session or memory of previous interactions is stored on the server. Every request is treated 
  as a new, isolated interaction, so if a client needs to provide certain data or context for the request, it must be included in each request itself


backend devlopment devlop API And Frontend devlopment consume API

------------------------------------------------
*/

//MOCK Api
let ApiURL = "https://jsonplaceholder.typicode.com";// URL to Request

//(url ,cotheguration Object'تعت الريكوست ' )

//when use body =>> in request will do stringify to convert from object to json
//will learn the Access-Token and Authorization how to use in header request
//but when use body =>> in response will do parse to convert from json to object

//! '/users','/admin',... call =>> endpoint, resource, path....

//الان في الحاله هي هو رح يعرض فول فيلد في البروميس لاكن هو بيندينج لسى بيجيب ف الداتا طب كيف اصل لها الداتا بعد ما يجيبنهم عن طريق ال اوبشنل تشين بجيبها وبحولها ل جافا سكريبت داتا وبعرضها 
// let response =fetch(`${ApiURL}/users`, {....



// Exaple =>> GET and Catch Error
let h1 = document.getElementById('info');
h1.textContent = "Loading...";

fetch(`${ApiURL}/users`, {//return promise as we know.     /users /custemers
    method: "GET",//by defult GET
    headers: {
        "Abood_R": "Testing the headers"
    }

}).then((response) => { //return json
    // console.log(response);  you can see the response status  404 not found we whant hadel error by throw error & Rithrowing error
    if (!response.ok) {
        if (response.status === 404) {
            // throw new Error("Network Error");
            throw new Error("404");// another way

        }

    }

    return response.json();// as we know convert to  javascript object by promise chaining u can return promise or data
}).then((data) => {
    // console.log(data);
    h1.textContent = "Fithing Data Finshed :) success ";
})//.catch((erorr) => {
    .catch((erorr) => {//another way
        // console.warn("Eror Code 404");
        if (erorr.message === "404") {
            h1.textContent = "Resourc Not Found";
        }

    })
// .finally(() => {
//     h1.textContent = "Fithing Data Finshed :) ";
// }) // web api =>> will do network request


// console.log(response); jsut for test

// ! Dom manupulation => بغير في الدوم باستخدام الجافا سكريبت لاكن انتبه ما بتغير في صفحة ال HTML
//! fetch()=>لا تعتبر ان ال status HTTPRespones=>  =>  الخاصه بال 400 Error لاتعتبرها


//! Example for Post Request 

let dataName = document.getElementById('dataName');
fetch(`${ApiURL}/users`, {// HTTPRequest 
    method: "POST",//انشئ  user جديد
    headers: {
        "content-Type": "application/json" // الريكوست تبعي رح يبعت ويستقبل جيسون معلومات عن الريكوست في منها مهم وفي منها عادي لو ما انحط 
    },
    body: (JSON.stringify({ name: "Abood" })),

    // طالما استخدمت البدي معناتو ايش بدك تعطيني يا clinet
    //  عشان ابعت ولازم  احوله لجيسون عشان يفهموا 

}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    dataName.textContent = `USER Name u Added :: ${data.name}`;
}).catch((erorr) => {
    console.log(erorr);

}).finally(() => {
    console.log("god job 😁");

})

// !Examole for Delete Request

let dataDelete = document.getElementById('dataDelete');

fetch(`${ApiURL}/users/1`, {// HTTPRequest
    method: "DELETE",//انشئ  user جديد
    headers: {
        "contant-type": "application/json"
    }

}).then((response) => {
    return response.json();
})

fetch(`${ApiURL}/users/2`, {
    method: "PUT",
    headers: {
        "content-type": "application/json"
    }
    , body: (JSON.stringify({ name: "Ramez Mushtaha" }))
}).then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);

})



/*
if (path === "/users") {
    const users = await db.users.find();
    return new Response(JSON.stringify(users), {status: 200, headers: {"Content-Type": "application/json"}});
}

Back-end developers will tell front-end developers how to consume their APIs.
the backend developer will tell u who use API 'description for Api'
GET /users


*/



//alert is a web Api because its allow us to communicat with a browser. its not part of JavaScript
//why ? for example: your server is nodejs you cant use alert in nodejs
// alert(ApiURL);

console.log("Abood the application is still running");

// ----------Error handling with promises ------------

// -----------Async/await ------------
console.log("--------Async/await--------");
/*

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

!The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically


The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of 1; let’s test it

So, async ensures that the function returns a promise, 
and wraps non-promises in it. Simple enough, right? 
But not only that. 
بتحكي للجافا سكريب استني لحد ما البروميس تخلص ورجعيلي الفاليو تعتها  ما بيتم استخدامها الا في داخل ال فنكشن ال مكتوب معها اسينك 
!There’s another keyword, await, that works only inside async functions,
 and it’s pretty cool.


!The keyword await makes JavaScript wait until that promise settles and returns its result.

!The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

 */


// that mean promise type void
// async function dosomThinges() {

// }

// other way  arrow function
// async ()=>{

// }
// async function dosomThinges() {
//     return 5;
// }// promise type number
//
//  u can do it in another way 
// async function dosomThinges() {
//     return new Promise((resolve) => {
//         resolve(5);
//     });
// };

// dosomThinges().then((data) => {
//     console.log(data);

// })

async function dosomThinges() {

    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise Done");
        }, 1000);
    });

    /*
  
  
  Translation:
  
  It's like I told JavaScript, "Stop and don't execute the code below until the promise finishes its work, and then return the value and display it."
  
  **Important NOTE:** Here, I told the function to stop its execution, meaning it will pause the code inside the function itself. However, the code in the file will continue to run as normal; it only applies to the code inside the function.
  
  It’s just a more elegant syntax for getting the promise result than using `promise.then`. It's easier to read and write. This is an alternative way to access the data without using `then`.
  
  ---
  
  This explains the difference between using `async/await` and `then` in terms of readability and control flow.
    */

    let result = await promise; //(*)
    console.log(result);

    console.log(4);
    console.log(7);
    console.log(8);

}



// dosomThinges();

/*

Summary:

When I create a function and give it the async keyword, it means that the function will return a promise. Now, we can use await with this promise.

What happens is that it tells JavaScript, "Don’t execute the next line until the promise is finished." Once the promise completes, the code after it will execute.

In this example, after the promise resolves, it tells us that we need to convert the JSON data we received into JavaScript data using response.json(), which returns a promise.

Before, we would use promise chaining with .then(), but now we’re doing the same thing with a different syntax.

After that, I looped through the returned data and printed it out. We notice that all this is wrapped in try and catch. Why? Because if there’s an error in the request (for example, the page doesn’t exist), it will throw an error, and we can handle that with a conditional check on the response message and status.




*/

async function DataFetch() {


    try {

        let response = await fetch(`${ApiURL}/users`, {// users
            method: "GET"
        });
        let data = await response.json();

        data.forEach(element => {
            console.log(element.name);
        });

        // console.log(response);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("404")

            }
        }

    } catch (erorr) {
        console.warn(erorr);
    }





    // console.log("----------");

    // console.log(4);
    // console.log(7);
    // console.log(8);

    // console.log("----------");

}
DataFetch();