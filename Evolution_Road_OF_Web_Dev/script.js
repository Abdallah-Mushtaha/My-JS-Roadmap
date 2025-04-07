//the evolution  Road of web development
//SSR ServerSideRindering

// SPA single page application

// SSG staticSiteGenration

// API application programing interface ⇒ peac of cake way
// AJAX Asynchronous JavaScript And XML

// A method that allows two software systems to communicate with each other by sending requests and receiving responses from each other
// To make a request


//       in static page
// localhost ipasddress protocol Foldername/filename
// http://localhost:3000/test/index.html
//without =>> index.html  will go to it direct
// if index.html hanve other name else 'about.html' this  will not fond it
//but we can do confeguration ot obe about.html

//extintion live server  suppose me 'computer' folder like local server

// JSON => It's a format used to exchange data between the front-end and back-end
// It's a way to represent, store, and transfer data between the front-end and the back-end
// The most common things that rely on JSON are APIs
// Numbers and booleans stay as they are; they don’t get converted to strings
// Arrays remain arrays; only the values inside the array get converted to strings
// All the keys of the object will be converted to strings

//convert Array,object to String
//convert String to Array,object
// when we send data from server to client or from client to server we used JSON

//Api Example.
let ditale = document.getElementById("ditale");
let loading = document.getElementById("loading");
let button = document.getElementById("button_user_data");

// Asynchronous code => Code that runs in the background, doesn't reload the page, and doesn't block the rest of the code from running


function getData() {
    ditale.innerHTML = "";// remove old data work in refrash state
    loading.textContent = "loading...";
    fetch("https://jsonplaceholder.typicode.com/users")//its request =>> endpoint => ' /users '
        .then(res => res.json())// return  data as jsonObject 'we convert it to array'
        .then(users => { //'users' => Array of object
            users.forEach(user => {//users have array of object
                const li = document.createElement("li");//create element
                li.innerText = user.name;//set text
                ditale.appendChild(li);//add child to the page by using  element have  id 'ditale'
            });
        }).finally(() => {
            loading.textContent = "";//remove loading text

        })
}
// Don't forget to turn it back on (or resume it)
// button.addEventListener("click", getData);

function FromScriptLoder() {
    console.log("Hi! From scriptLoader....");

}

