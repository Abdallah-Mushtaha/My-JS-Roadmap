// import Ademins, { productCart, myName, sameName } from "./product.js";
import Ademins, * as objectNameExport from "./product.js";


//------Modules, introduction ,DOM--------


/*
Exaple:
suppose you have a website that sells digital products.

Digital Products Store

Users
ب
Carts
Checkouts
Orders
Refunds

evreyone of  this have their own Features and own files and we call them modules 
When your application grows, you need to split your code into modules (multiple files).


------------------------------------------------------


traditional way (SSR) for building web applications:

PalestinianCauses.com
PalestinianCauses.com/users

(when navigate to PalestinianCauses.com/users browser will re-load your entire page)

server side code will generate users.html page that contains users list and send it back to client

ssr=> server side rendering => 
هو انشاء 
html 
في السيرفر وارساله للكلينت

 -----------------------
Mobile Application like experanse

one of modern ways for building web applications (SPA):

palestiniancauses.com
palestiniancauses.com/users

JavaScript will send request to server for users data and update DOM (without re-loading your web-page)
Example spa frameworks: React, Angular, Vue,svelte

spa => بيستخدم اشي 
اسمه 
 csr=> client side rendering 
client يعني البراوزر 
يعني فرونت اند يعني الجافا سكريبت ف الكلينت
انشاء ال 
html بيتم في الكلينت ف ال 
js بنعمله update DOM

nexst js =>full stack FRAMWORK => use to build  web applications by react.js 
and write code frontend and backend in the same folder


ways to organize code:

AMD – one of the most ancient module systems, initially implemented by the library require.js.
CommonJS – the module system created for Node.js server.
UMD – one more module system, suggested as a universal one, compatible with AMD and CommonJS.

Now these all slowly became a part of history, but we still can find them in old scripts.

CommonJS:
Node.js=> طريقة نكتب كود الجي اس في السيرفر سيد تكتب كود الجافا سكريبت في الباك اند 


ان هدول ظهروا من 2015 وهما احدث الطرق ما زال في استخدام الهم 
ماكان مدعوم قيما في البراوزر اليوم مدعوم 
The language-level module system appeared in the standard in 2015, gradually evolved since then, and is now supported by all major browsers and in Node.js. So we’ll study the modern JavaScript modules from now on.

module system =>> يعني ايش الطريقة ال هقسم فيها الكود تاعي ليصير module


What is a module?

A module is just a file. One script is one module. As simple as that.


فرضا بدنا عنا عملية شراء كيف بدي اعرف اليوزر هعرف عن طريق ال اي دي طب كيف اصله 
لمن يكون كل واحد في ملف هنصله بواسطة الانبورت  والاكسبورت 


Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

export keyword labels variables and functions that should be accessible from outside the current module.
import allows the import of functionality from other modules.

بتقدر تعمل 
import ,export لاي اشي

شفنا مثال المستخدم ال رح يشتري ال منتج كيف نوصل الاي دي تاعه من صفحه لصفحة ثم عرض البيانات في صحة اخرى 


مديل مابتشتغل بال اتش تيتي بي ريكوست 

!Modules work only via HTTP(s), not locally
If you try to open a web-page locally, via file:// protocol, you’ll find that import/export directives don’t work. Use a local web-server, such as static-server or use the “live server” capability of your editor, such as VS Code Live Server Extension to test modules.

في ال موديول   هيكون ملف الكود 
! use strict; 

What’s different in modules, compared to “regular” scripts?

! There are core features, valid both for browser and server-side JavaScript.

Always “use strict”
في الموديول لازم يكون في 
export , import 
عشان تشارك البيانات من دونهم هيطلع ايرور

Module scripts are  

انو انا لمن اعمل ملف سكريبت دايما بحطوا في اخر الصفحة لوبنعملو ريكوست لمن صفحة الاتش تي ام ال تكون اتحملت طب فرضا انا حطيت ملف السكريبت في اول الصفحة مش رح يلاقيه ف رح يعمل ايرور او ممكن ما يطلع ايرور ويعملك كل اشي في هذا الملف null او undifinde 
حسب ايش الكود ال كاتبه في ها الملف 
طيب العمل بخلي هذا  السكريب موديول  او بدل الموديول باستخدم سكريبت معاه سورس وباعملو 
حيث انو الموديول بحتوي على سكريبت تاج 
defer 
وهو نوع من انواع السكريب 
يقصد به طريقة التحميل 

Module scripts are always deferred, same effect as defer attribute (described in the chapter Scripts: async, defer), for both external and inline scripts.


--------Export,import----------
في طريقتين لل export
وطريقة واحدة لل import

1.nameExpor=>export function UserID(user);
ممكن اعمل اكثر من اكسبورت 
 في الاينبورت قدر ادرجها لو افي اكثر من وحده 
 لو كتبتها غلط في الانبورت مش نفس الاسم ايرور 
 بقدر استخدمها بس لازم يكون وراها ستيتمنت او ديكلير زي الفاريبل او فنكشن 
 وهنا بيكون في الانبورت بين بركيت لو بدي اغير الاسم بكتي 
{pro as Product}=> في حال عملت import ممكن اغير اسم هذا ال فنكشن او المتغير ال عامله import
Also, we can put export separately =>  export{myName, sameName};

!ممكن اخلي كل ال نيم اكسبور 
في اوبجيكت استخدمهم براحتي  
كيف عن طريق ال ايمبورت 
!name export =>'* as objectNameExport'
import  * as objectNameExport from "./product.js";




2. export default => export default class AdminS{};
!لمن اعمللها انبورت ما في داعي لبراكيتس ممكن استدعيها باي اسم عادي 

ممكن اعملو 
export 
اخر الملف عادتا 
export default Ademins;

ما بتتكرر
......export defult ,export  Nmae
import Ademins ,{a as content}ممكن نستخدم معها 



معلومه اضافيه :: الان لمن اعمل كل الملفات استخدمهم في ملف واحد قلنا موديول يعني هي ويب باك بس احنا رح نستخدم ال فيت رح نحكي عنها اللقاء الجاي 

التطبيق لمحاضره  في ملف اليوزرز و ال بروداكت 
*/

console.log(objectNameExport.productCart(5));
console.log(`myName ::: ${objectNameExport.myName}`);


//تجربه انو الملف مع الموديول صار use strict
// let r = null;
// console.log(r);

// s = 40;//not definde
// console.log(s);// not difinde

let infoo = document.getElementById("infoo");
console.log(infoo);


objectNameExport.sameName();


let AdminObject = new objectNameExport.default("Mahros", "50");
AdminObject.Display();

console.log();

objectNameExport.productCart(AdminObject.age);



// ---------DOM ----------

/*

JS 
قديما كانت تستخدم للويب براوز اليوم الها استخدامات عديده ك لغة برمجه  
JS Front end , JS back end, Js native Mobile application ,Js Desktop Application

The JavaScript language was initially created for web browsers. Since then, it has evolved into a language with many uses and platforms.

---

A platform may be a browser, or a web-server or another host, or even a “smart” coffee machine if it can run JavaScript.
 Each of these provides platform-specific functionality.
  The JavaScript specification calls that a host environment.
هنا بيقولك صار في استخدامات لل 
JS متطوره 
اكثر من اليوم ال طلعت فيه صرنا بنستخدمها لل براوزر و الباك اند هوست 
 وكل بلات فورم صار  اله فنكشنلتي معينه خاصه فيه عشان اقدر اتعامل معاه   
 زي مثلا البراوز بدو امكانيه وصول اكسييز على ال  ريكويست و الاليرت  و  للكونسل و الدوم صفحة 
 html وCSS,promise وحاجات ثانيه كثير 
 اما البا اند بدو اكسيزز=> للملفات للداتا بيز 
وهي تسمى a host environment.  الانفيرمينت ال هيستضيفو الجافا سكريبت هي يسمى 

A host environment provides its own objects and functions in addition to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.
هنا المقصد انو انا عدي جافا سكريبت ك لغة والهوست فنكشينلي  يعني لمن احكي اوبجيكت اري و اللوب وهكذا الى اخره هي جافا سكرييبت ك لغه
كل ال تعلمنا سابقا JS languge
لاكن لمن احكي عن 
winodw 
Alert() ,conferm(),Window Object, Dom(),document ,css,html 
هي تعتبر 
host enverment to JS 
مش Java Script 

 حسب الرسمة ال 
 JS IN BROWSER 
 بتحتوي على  ال 
 java Script  DOM BOM
 DOM =>Document object model =>html/ css document
 BOM=>Browser object model => screan, location ,frame, access to camera ,access to microfon

 ! There’s a “root” object called window.
  It has two roles: هو ال رووت عشان نعمل 
 access عشان نصل لل
 DOM ,BOM ,JS

 First, it is a global object for JavaScript code, 
 as described in the chapter Global object ممكن تقرا عنو ما تعمقنا فيه .
هذا هو الجلوبل اوبجيكت للجافا سكريبت تاعنا 

Second, it represents the “browser window” 
and provides methods to control it.
ثانيا هو عباره عن البراوز ويندو  يعني الويندو
 ال بظهر فيها الموقع وهو بيتحكم فيها 

For instance, we can use it as a global object
بدل ما نحكي 
function sayHi(){
alert("Hi")
}
ممكن نحكي 
window.sayHi();
عادي ممكن تيخدم الwindow وممكن لا بس 
باختصار هو جلوبل اوبجيكت فيه كل الامور 
ال بنحتاجها  في JS 
DOM ,BOM ,JS

يعني ممكن نعمل 
window.alert("Hi");
او alert("Hi")
window.innerHeight
و innerheight
window.innerwidth
innerwidth

وهكذا هدول موجودين في الويندو 

The Document Object Model, or DOM for short, 
represents all page content as objects that can be modified.

The document object is the main “entry point” to the page.
 We can change or create anything on the page using it.

الروت للدوم هو ال دوكيومينت  
document هو عباره عن object 
 

--> change the background color to red
document.body.style.background = "red";

-->hange it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);


CSSOM for styling

There’s also a separate specification, CSS Object Model (CSSOM) for CSS rules 
and stylesheets, that explains how they are represented as objects, 
and how to read and write them.

The CSSOM is used together with the DOM when we modify style rules for the document.
 In practice though, the CSSOM is rarely required,
  because we rarely need to modify CSS rules from JavaScript 
  (usually we just add/remove CSS classes, not modify their CSS rules),
   but that’s also possibl


   ان ال دوم هو لل html element 
   اما ال CSSOM هو لل css element
   اني اضيف و احذف ال 
   cssStyle cssproperty
   لل css element
   
  وهي حلوه ومهمه في عالم الانيميشن 

  BOM (Browser Object Model)
The Browser Object Model (BOM) represents 
!additional objects provided by the browser (host environment) for working with everything except the document.

Specifications
The BOM is a part of the general HTML specification. اقرا عنها لو حابب 

--------------------------------------
DOM tree

هنا بيقلك انو الدوكيومينت العمود الفقري تاعه هو ال html 

The backbone of an HTML document is tags.

According to the Document Object Model (DOM), every HTML tag is an object. 
Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.
وان كل  
html
هو اوبجيكت وكل اوبجيكت بداخله تاج هي هي ال تشيلد لهي ال بيرنت 

All these objects are accessible using JavaScript, and we can use them to modify the page.

For example, document.body is the object representing the <body> tag.

Here we used style.background to change the background color of document.body, but there are many other properties, such as:

innerHTML – HTML contents of the node.
offsetWidth – the node width (in pixels)
…and so on.

كل جزء من ال 
Dom tree 
عباره عن node
وكل node عباره عن اوبجيكت

On the picture above, you can click on element nodes and their children will open/collapse.

Every tree node is an object.

Tags are element nodes (or just elements) and form the tree structure: <html> is at the root, then <head> and <body> are its children, etc.

Autocorrection
If the browser encounters malformed HTML, it automatically corrects it when making the DOM.

For instance, the top tag is always <html>. Even if it doesn’t exist in the document, it will exist in the DOM, because the browser will create it. The same goes for <body>.
انو كل ملف حتى لو مش معطيه هيد وبدي رح يكون فيه 


DOM DataStructer

All operations on the DOM start with the document object. 
That’s the main “entry point” to DOM. From it we can access any node.
في رسمه في الموقع 
On top: documentElement and body
The topmost tree nodes are available directly as document properties:

On top: 
!documentElement and body
!The topmost tree nodes are available directly as document properties:

<html> = document.documentElement
The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.
<body> = document.body
Another widely used DOM node is the <body> element – document.body.
<head> = document.head
The <head> tag is available as document.head.


!There’s a catch: document.body can be null
A script cannot access an element that doesn’t exist at the moment of running.

In particular, if a script is inside <head>, then document.body is unavailable, because the browser did not read it yet.

! In the DOM world null means “doesn’t exist”
In the DOM, the null value means “doesn’t exist” or “no such node”.


! Children: childNodes, firstChild, lastChild
Child nodes (or children) – elements that are direct children. In other words, they are nested exactly in the given one. For instance, <head> and <body> are children of <html> element.
Descendants – all elements that are nested in the given one, including children, their children and so on.

Descendants – all elements that are nested in the given one, including children, their children and so on.

DOM collections
As we can see, childNodes looks like an array. But actually it’s not an array, but rather a collection – a special array-like iterable object. 
انو باخاصار هو شبه الاري بس مش اري بس ممكن تعمل عليه شوية اشياء زي البتنعمل على الاري
قادر تعمل لوب عليها باستخدام الفور  



بنلاحظ انو لمن يطبع ال تشايلد بطبع معهم ال 
#text
      assignedSlot
      : 
      null
      baseURI
      : 
      "http://127.0.0.1:5500/PersonalPageTasks/javascript/test1.html"
      childNodes
      : 
      NodeList []
      data
      : 
      "\n  "

هي ال text هي عباره عن الالفراغات في html لمن ينزل سطر 

That’s because it’s iterable (provides the Symbol.iterator property, as required).
هنا بقلك عشانها اري وبتلف على العناصر فهي  ممكن تعمل زي ما قلنا شوي من خصائص الاري مش ال كلهم 


 we can use Array.from to create a “real” array from the collection, if we want array methods:
ممكن احولها لاري واستخدم عليها شوية فنكشن خاصه بالاري
alert(document.body.childNodes.filter); // undefined (there's no filter method!)


 
!DOM collections are read-only
DOM collections, and even more – all navigation properties listed in this chapter are read-only.

We can’t replace a child by something else by assigning childNodes[i] = ....

Changing DOM needs other methods. We will see them in the next chapter.
هنا بقلك هي للقرائة فقط ما بنقدر نعمل لل الكوليكشن  اتغير \ما بقدر اعمل  اساين من خلال 
childNodes[i]
زي الاري لا هي بسس للاكسييز للوصول وخلاص 
 DOM collections are live
Almost all DOM collections with minor exceptions are live. In other words, they reflect the current state of DOM.

If we keep a reference to elem.childNodes, and add/remove nodes into DOM, then they appear in the collection automatically. انو لو ضفت عنصر او حذفت عنصر او عدلت على عنصر رح ينضاف لحاله 

Don’t use for..in to loop over collections
Collections are iterable using for..of. Sometimes people try to use for..in for that.

Please, don’t. The for..in loop iterates over all enumerable properties. And collections have some “extra” rarely used properties that we usually do not want to get: قللك هنا ما تستخدمم فور ان استخدم فور اوف ليش قلنا هتجيبلي بروبرتي  غير خاصه فيها 

Siblings and the parent:: 
عناصر جنب بعض لاهما  
children, ولا Berant 

console.log(html.firstChild.previousSibling);
console.log(document.head.nextSibling);
console.log(document.body.nextSibling);

console.log(document.head.parentNode);



Element-only navigation
Navigation properties listed above refer to all nodes. 
For instance, in childNodes we can see both text nodes, element nodes, 
and even comment nodes if they exist
هنا باختصار انو نجيب العناصر  مش اي شي يعني نطنش ال text ال بطلع بين الهيد والبدي مثلا 

The links are similar to those given above, just with Element word inside:

children – only those children that are element nodes.
firstElementChild, lastElementChild – first and last element children.
previousElementSibling, nextElementSibling – neighbor elements.
parentElement – parent element. نفس الكلام تقريبا 

console.log(document.head.nextElementSibling);
console.log(document.body.nextElementSibling);

console.log(document.head.previousElementSibling);
console.log(document.body.parentElement);

******************************************

/ Searching Dom Elements 
let byID = document.getElementById("mohameddata");
let h1 = document.querySelector("h1");//برجع اول واحد بلاقيه  لو ما لقى ممكن يرجع null 
/ document.querySelector("")في حال بدك تجيب  كلاس  بنحط .دوت في حال بدك ايدي # في حال تاج بتحط اسمو
/document.querySelector("p.Mainpargraph") في حال برضو بدي اجيب عنصر معين من مجموعه عندهم نفس الاسم بس هو معاه كلاس مثلا  
let selctors = document.querySelectorAll("h1");//بيرجع nodelist هيرجع كل الموجودين باسم التاج مثلا 
let input = document.querySelector("input");


console.log(byID.textContent);
console.log(h1.textContent);
console.log(selctors.values);
console.log(input.value);
/ عشان ابين القيم
console.log("----------");

console.log(byID.textContent);
console.log(h1.textContent);
console.log(selctors.values);
console.log(input.value);
console.log(h1.matches("h1"));
console.log(h1.matches("h2"));;

let itemlist = document.querySelector(".itemlist");
let listt = document.querySelector(".list");

console.log(itemlist.closest(".list"));// مين اقرب عنصر معاه كلاس لست الك لو مش موجود رجع null وقلنا ال null في الدوم مش موجود 

/ getElementById //بترجع live collection  لو ما لقى ممكن يرجع null
/ querySelectorAll //بترجع live node list  لو ما لقى ممكن يرجع null
console.log(document.getElementsByTagNameNS("*", "*"));// هتجيب كل التاجات مستخدمه زمان 
console.log(itemlist.contains(itemlist));//elemA.contains(elemB) returns true if elemB is inside elemA (a descendant of elemA) or when elemA==elemB.
 nodeType
 We can use it to see if a node is a text or an element node. It has a numeric value: 1 for elements,3 for text nodes, and a few others for other node types. Read-only.

 console.log(document.documentElement.children);

for (let node of document.documentElement.childNodes) {

    if (node.nodeType !== 1) continue; else console.log(node);//في كل نود اليمينت نو تايب واحد نعرف html
    // 3 text
    console.log(node.nodeName, node.tageName);//لو كان جوا تاج رح يطبع التاج نيم 

    console.log(node.nodeType);
}

/ innerHTML
/ The HTML content of the element. Can be modified.
/ outerHTML

/ The full HTML of the element. A write operation into elem.outerHTML does not touch elem itself. Instead it gets replaced with the new HTML in the outer context.

setTimeout(() => {
    document.body.innerHTML = `<!DOCTYPE html>
<html lang="en" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modules, introduction ,DOM</title>

  </head>

  <body>
  <p> اعوذ بالله من الشيطان الرجيم بسم الله الرحم الرحيم</p> 
 
  </body>
</html>`
    console.log(document.body.textContent);


}, 2000);

/ textContent
/ The text inside the element: HTML minus all <tags>. Writing into it puts the text inside the element, with all special characters and tags treated exactly as text. Can safely insert user-generated text and protect from unwanted HTML insertions.باختصار كل تعامله لو بدك تضيف محتوى نصي ما بتعرف على عناصر ءhtml

console.log(document.body.textContent);
setTimeout(() => {
    document.body.outerHTML = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modules, introduction ,DOM</title>

  </head>

  <body>
  <p> يا حبيبي</p> 
 
  </body>
</html>
`;
}, 4000);



*/