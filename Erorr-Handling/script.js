// Error And Throwing Error

// console.log(x);//Uncaught ReferenceError: x is not defined

// this creat constractor from  ErrorConstructor class ' Constructor Function '
// tak one argument =>> message
// build in class from JS

// throw new Error("Abood in not difine in lecter to day :( ");

// you can acte whit like instance of Object


// class Error {
//     constructor(message) {
//         this.message = message
//     }
// }

try {
    console.log(q);

} catch (err) { // I will handle the issue so that the application keeps running
    console.log(err.name); // The name of the error
    console.log(err.message); // The message that will be displayed
    console.log(err.cause); // The reason
    console.log(err.stack); // The path of this error
}

console.log("----------------");

//-------------------

let err = new Error("Abood in not difine in lecter to day :( ");// new here creat instance of Object

console.log(err);
console.log(err.message);
console.log(err instanceof Error); //true
console.log(typeof err);    //object

console.log(typeof Error);//function 'Constructor Function, class' 

// throw =>> we can say it  special keyword special return to the Error  any thing after them wil not execute

// throw err;

// ------------------------
console.log("---- Error Handling -----");


// Error Handling 

let Users = [
    {
        name: "Abood",
        email: "Abood@gmail.com", Authaticated: true
    },
    {
        name: "Ramez",
        email: "Ramez@gmail.com", Authaticated: true
    },
    {
        name: "Noha",
        email: "Noha@gmail.com", Authaticated: false
    },
    {
        name: "Rola",
        email: "Rola@gmail.com", Authaticated: false
    }
];

function isAuthanticated(user) {
    if (!user) {
        throw new Error("User is not Authanticated");
    }
    if (!user.Authaticated) {
        throw new Error(`${user.name} is not Authanticated`);
    }
    return `${user.name} is Authanticated  now`;
}

Users.forEach(user => {
    // console.log(isAuthanticated(user));

    console.log("Loading Started..........");

    try {
        let result = isAuthanticated(user);
        console.log(result);

    } catch (Error) {
        console.log("we sad to tell you that you are not Authanticated u make problem in ouer site more detal about this :: ");
        // console.warn(Error.message);
        console.error(Error.message)
    } finally {
        console.log("Loading Finished..........");
        console.info(`${user?.name} done process`); // symbol ? => optinal chaing

    }
});

console.log("program still work dont be narvous :)");




// Example From Real World (Log-in Form):
// 1. Sometimes you will need custom errors. So you can
// create your own error class.

// 2. You can extend the built-in Error class to create
// your own error class.


class FeatchErorr extends Error {
    status;
    statusText;
    constructor(message, cause, status, statusText) {
        //    this={}
        super(message, { cause });// new Error(message, { cause });
        this.name = "FeatchErorr";
        this.status = status;
        this.statusText = statusText
        //    return this;
    }
}



function fetchSomthing(request = prompt("Enter what you want fetch", "USER")) {
    if (request === "USER" || request === "Sitings") return "fetchSomthing";

    throw new FeatchErorr("Network Error", "stupid user!", 404, "Not Found THE request in server");
    // throw new Error("Not Found THE request in server !!!!!!!");
}


try {
    let result = fetchSomthing();
    console.log(result);

} catch (Error) {
    if (Error instanceof FeatchErorr) {
        console.warn(Error.message);
        console.error(Error.cause);
        console.error(Error.status);
        console.error(Error.statusText);

    } else {
        console.log(Error.message);
    }
}


console.log("--------Rethrowing--------");
// role when u see thow keyword in catch (){} =>> that  does not mean handling 
// its mean  thier is  other catch block biger than this one will do the handler
// and this one will be rethrow  



// Revition & Example Rethrowing ..

let requestes = {
    user: { responsed: "USER Somthing..........." },
    setinges: { responsed: "setinges Somthing..........." },
    //etc of data ....
}

function fetchOneSomThing(request) {
    try {
        let reques = requestes[request].responsed;
        return reques;
        // console.log(reques);
    } catch (Error) {
        throw new FeatchErorr("Network Error", "stupid user!", 404, `Not Found THE ${request} in server`, Error.cause);
    } finally {
        console.log("Loading Finishing fetchOneSomThing ..........");
    }
}

function fetchManySomThing(requests) {
    let data = [];
    try {
        for (let elment of requests) {
            let fechedata = fetchOneSomThing(elment);
            data.push(fechedata);
            console.log(data);

        }
        return data;
    } catch (Error) {
        throw Error;
    } finally {
        console.log("Loading Finishing fetchManySomThing..........");
    }
}



try {
    let result = fetchManySomThing(["user", "setinges", "Themes"]);

} catch (Error) {
    if (Error instanceof FeatchErorr) {
        console.warn(Error.message);
        console.error(Error.statusText);
    } else {
        console.log(Error.message);
    }
    console.log("we are handling this error  outside of fetching  function ");

} finally {
    console.log("--------- FINISHING FETCHING DATA ------------");

}

// Promises, async/await
console.log("--------Promises, async/await--------");






// Abood test
// Write a function safeDivide(a, b) that divides a by b, but throws an error if b is equal to zero.
// function safeDivide(a, b) {
//     if (b == 0) {
//         throw new Error("Divide by zero");
//     } else {
//         return a / b
//     }
// }

// try {
//     console.log(safeDivide(10, 0));
// } catch (err) {
//     console.log(err);
// }
function FromScriptLoder() {
    console.log("Hi! From scriptLoader 39....");

}