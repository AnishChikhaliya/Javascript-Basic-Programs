/*
Among the functionalities, we will cover the following:

Variables with let and const
Template literals
Destructuring
Spread operator
Arrow functions using =>
Classes
Modules

*/

/*

Event	                                           Description	                                                                  Belongs To

abort	                        The event occurs when the loading of a media is aborted	                                        UiEvent, Event
afterprint	                    The event occurs when a page has started printing, or if the print dialogue                     Event
                                box has been closed	
animationend	                The event occurs when a CSS animation has completed	                                            AnimationEvent
animationiteration	            The event occurs when a CSS animation is repeated	                                            AnimationEvent
animationstart	                The event occurs when a CSS animation has started	                                            AnimationEvent
beforeprint	                    The event occurs when a page is about to be printed	                                            Event
beforeunload	                The event occurs before the document is about to be unloaded	                                UiEvent, Event
blur	                        The event occurs when an element loses focus	                                                FocusEvent
canplay	                        The event occurs when the browser can start playing the media                                   Event
                                (when it has buffered enough to begin)
canplaythrough	                The event occurs when the browser can play through the                                          Event
                                media without stopping for buffering	
change	                        The event occurs when the content of a form element, the selection, 
                                or the checked state have changed (for <input>, <select>, and <textarea>)	                    Event
click	                        The event occurs when the user clicks on an element	MouseEvent
contextmenu	                    The event occurs when the user right-clicks on an element to open a context menu                MouseEvent
copy	                        The event occurs when the user copies the content of an element	                                ClipboardEvent
cut	                            The event occurs when the user cuts the content of an element	                                ClipboardEvent
dblclick	                    The event occurs when the user double-clicks on an element	                                    MouseEvent
drag	                        The event occurs when an element is being dragged	DragEvent
dragend	                        The event occurs when the user has finished dragging an element	                                DragEvent
dragenter	                    The event occurs when the dragged element enters the drop target	                            DragEvent
dragleave	                    The event occurs when the dragged element leaves the drop target	                            DragEvent
dragstart	                    The event occurs when the user starts to drag an element	                                    DragEvent
dragover	                    The event occurs when the dragged element is over the drop target	                            DragEvent
drop	                        The event occurs when the dragged element is dropped on the drop target	                        DragEvent
durationchange	                The event occurs when the duration of the media is changed	Event
ended	                        The event occurs when the media has reach the end 
                                (useful for messages like "thanks for listening")	                                            Event
error	                        The event occurs when an error occurs while loading an external file	                        ProgressEvent, UiEvent, Event
focus	                        The event occurs when an element gets focus	                                                    FocusEvent
focusin	                        The event occurs when an element is about to get focus	                                        FocusEvent
focusout	                    The event occurs when an element is about to lose focus	                                        FocusEvent
fullscreenchange	            The event occurs when an element is displayed in fullscreen mode	                            Event
fullscreenerror	                The event occurs when an element can not be displayed in fullscreen mode	                    Event
hashchange	                    The event occurs when there has been changes to the anchor part of a URL	                    HashChangeEvent
input	                        The event occurs when an element gets user input	                                            InputEvent, Event
invalid	                        The event occurs when an element is invalid	                                                    Event
keydown	                        The event occurs when the user is pressing a key	                                            KeyboardEvent
keypress	                    The event occurs when the user presses a key	                                                KeyboardEvent
keyup	                        The event occurs when the user releases a key	                                                KeyboardEvent
load	                        The event occurs when an object has loaded	                                                    UiEvent, Event
loadeddata	                    The event occurs when media data is loaded	                                                    Event
loadedmetadata	                The event occurs when meta data (like dimensions and duration) are loaded	                    Event
loadstart	                    The event occurs when the browser starts looking for the specified media	                    ProgressEvent
message	                        The event occurs when a message is received through the event source	                        Event
mousedown	                    The event occurs when the user presses a mouse button over an element	                        MouseEvent
mouseenter	                    The event occurs when the pointer is moved onto an element	                                    MouseEvent
mouseleave	                    The event occurs when the pointer is moved out of an element	                                MouseEvent
mousemove	                    The event occurs when the pointer is moving while it is over an element	                        MouseEvent
mouseover	                    The event occurs when the pointer is moved onto an element, or onto one of its children	        MouseEvent
mouseout	                    The event occurs when a user moves the mouse pointer out of an element, or out of one of its children	MouseEvent
mouseup	                        The event occurs when a user releases a mouse button over an element	                        MouseEvent
mousewheel	                    Deprecated. Use the wheel event instead	                                                        WheelEvent
offline	                        The event occurs when the browser starts to work offline	                                    Event
online	                        The event occurs when the browser starts to work online	                                        Event
open	                        The event occurs when a connection with the event source is opened	                            Event
pagehide	                    The event occurs when the user navigates away from a webpage	                                PageTransitionEvent
pageshow	                    The event occurs when the user navigates to a webpage	                                        PageTransitionEvent
paste	                        The event occurs when the user pastes some content in an element	                            ClipboardEvent
pause	                        The event occurs when the media is paused either by the user or programmatically	            Event
play	                        The event occurs when the media has been started or is no longer paused	                        Event
playing	                        The event occurs when the media is playing after having been paused or stopped for buffering	Event
popstate	                    The event occurs when the window's history changes	                                            PopStateEvent
progress	                    The event occurs when the browser is in the process of getting the media data (downloading the media)	Event
ratechange	                    The event occurs when the playing speed of the media is changed	                                Event
resize	                        The event occurs when the document view is resized	                                            UiEvent, Event
reset	                        The event occurs when a form is reset	                                                        Event
scroll	                        The event occurs when an element's scrollbar is being scrolled	                                UiEvent, Event
search	                        The event occurs when the user writes something in a search field (for <input="search">)	    Event
seeked	                        The event occurs when the user is finished moving/skipping to a new position in the media	    Event
seeking	                        The event occurs when the user starts moving/skipping to a new position in the media	        Event
select	                        The event occurs after the user selects some text (for <input> and <textarea>)	                UiEvent, Event
show	                        The event occurs when a <menu> element is shown as a context menu	                            Event
stalled	                        The event occurs when the browser is trying to get media data, but data is not available	    Event
storage	                        The event occurs when a Web Storage area is updated	                                            StorageEvent
submit	                        The event occurs when a form is submitted	                                                    Event
suspend	                        The event occurs when the browser is intentionally not getting media data	                    Event
timeupdate	                    The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)	Event
toggle	                        The event occurs when the user opens or closes the <details> element	                        Event
touchcancel	                    The event occurs when the touch is interrupted	                                                TouchEvent
touchend	                    The event occurs when a finger is removed from a touch screen	                                TouchEvent
touchmove	                    The event occurs when a finger is dragged across the screen	                                    TouchEvent
touchstart	                    The event occurs when a finger is placed on a touch screen	                                    TouchEvent
transitionend	                The event occurs when a CSS transition has completed	                                        TransitionEvent
unload	                        The event occurs once a page has unloaded (for <body>)	                                        UiEvent, Event
volumechange	                The event occurs when the volume of the media has changed (includes setting the volume to "mute")	Event
waiting	                        The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)	Event
wheel	                        The event occurs when the mouse wheel rolls up or down over an element	                        WheelEvent


*/
                /*************** Variables with let and const *****************/

var fan = 'Anish';
var fan = 'Chikhaliya';

console.log(fan); // in var Same name var are access 

 let fan2 = 'Anish';
 fan2 = 'Chikhaliya'; // Reassign 
// let fan2 = 'Chikhaliya'; // Redecaler    // let function throw an error for same name variable also that is a block scope variable 

console.log(fan2); 

// In the function declare variable are scope variable you also declare out of the scope 

function starWarsFan() {
    const movie = 'Star Wars'; 
    return movie;
    }
function marvelFan() {
    const movie = 'The Avengers';
    return movie;
}

console.log(starWarsFan());
console.log(marvelFan());


                /*************** Template literals (` `)*****************/

const book = {
name: 'Learning JavaScript DataStructures and Algorithms'
}
console.log(`You are reading ${book.name}., 
             and this is a new line
             and so is this.`); // variable value inside of the ${xyz}


                /*************** Arrow Function = () =>*****************/


const sum = (x=1, y=2, z=3) => {
    return x + y + z;
}

console.log('Sum is : ' + sum(4, 2) );


                /*************** Spread operator *****************/


const arr = [1,2,3,4,5];
const arr2 = [...arr,6,7,8,9];

console.log(arr2);
console.log(arr2.length);


                /*************** Destructuring *****************/


var [x, y] = ['a', 'b'];
[x,y] = [y,x]; // Swap variable
var ob = { x, y }; // Array Destructuring Now you can access x and y any place 
var ob2 = {
    fn : 'Anish',
    ln : 'Chikhaliya',
    printName(){
        console.log('A C');
    }
};
console.log(ob); // { x: "a", y: "b" }
console.log(ob2.printName());


 //               /************** Object-oriented programming with classes ******************/


class Book {
constructor (title, pages, isbn) {
this.title = title;
this.pages = pages;
this.isbn = isbn;
}
printIsbn(){
    console.log(this.isbn); 
}

} 
                
// let boo = new Book('title', 'pag',  'isbn');

// console.log(boo.title); //outputs the book title
                
// boo.title = 'new title'; //update the value of the book title
                
// console.log(boo.title); //outputs the book title


//               /************** Inheritance ***************/


class ITbook extends Book {
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn);
        this.technology = technology;
    }
    printTec(){
        console.log(this.technology);
    }
}
let myBook = new ITbook('abc','200','12234566','JS');
console.log(myBook.title);
console.log(myBook.printTec());
console.log(myBook.printIsbn());

//               /************** Getter and Setter ******************/

class Person {
    constructor(name){
        this._name = name; // We can use _ bcz we get  a same name 
    }

    get name(){
        return this._name;
    } 

    set name(x){
        this._name = x;
    }
}
let ps = new Person ('Anish');
console.log(ps.name);
ps.name = 'Chikhaliya';
console.log(ps.name);
ps.name = 'R';
console.log(ps.name);

const a = 4**2;
console.log(a);

// import newFunction from './Basic.js';

// console.log(newFunction());

let ar = [0,1,2,3,4,5,6,7,8,9];
ar.push(10,11,12); // Add end
ar.pop(); // Remove end  
ar.unshift(-3,-3,-2,-1); // add first
ar.shift(); // delet first

// Add and Remove element spacific position using Index

// ar.splice (index, number of element remove, value we want to insert)

ar.splice(5,3); // Remove 3 element from 5 index
console.log('Remove ' + ar); 

ar.splice(5,0,2,3,4); // Add 2,3 and 4 index of 5
console.log('Insert ' + ar); 

console.log('Array Length ' + ar.length);  

// 2D Array in JS

let ab = [];
ab[0] = [1,2,3,4,5];
ab[1] = [6,7,8,9,10];

console.log('2D Array elemant :' + ab[0][2],ab[1][2],ab[0][3],ab[1][3]);
console.log('2D Array :' + ab);

//               /************** JS Array Method  ******************/

const mt = [20,40,15,18,22];

const ChekAge = (ag) => {
      return ag > 18;
}
console.log(mt.every(ChekAge)); // Chek every elemant in array

console.log(mt.filter(ChekAge)); // filter the elemant and return array

console.log(ab.concat(arr));

console.log(mt.fill("wow",1,2)); //array.fill(Valu, Start, End)

// array.findIndex(function(currentValue, index, arr), thisValue)

// array.find(function(currentValue, index, arr),thisValue)

let o = " ";
const fruits = ["apple", "orange", "cherry"];

const myIndex = (index,item) => {
    o += index + ':' + item + ' ';
}
fruits.forEach(myIndex);
console.log(o);

// Array.from(object, mapFunction, thisValue)

let t = "ABCDEFC"
const myArr = Array.from(t);

console.log(myArr);

// array.includes(element, start)

console.log( myArr.includes("F",4));  // method returns true if an array contains a specified value else returns false

// array.indexOf(item, start)

console.log( myArr.indexOf("C")); // return index

// array.join(separator)

console.log(myArr.join(' & ')); // join evry elemant in array and  return a array as a string 

// array.keys()

console.log(myArr.keys());

// array.lastIndexOf(item, start)

console.log(myArr.lastIndexOf('C')); 

// array.length

// array.map(function(currentValue, index, arr), thisValue)

const num = [10,20,30,40,50];

const multi = (n) => {
      return n*10;
}

console.log(num.map(multi));

// Of 

let f = [];
for (const v of num){
    f.push(v/10);
}
console.log(f);

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

console.log(f.reduce(multi));

// array.copyWithin(target index , start, end)

let copyArray = [1, 2, 3, 4, 5, 6];

console.log(copyArray.copyWithin(0, 3, 4)); 


