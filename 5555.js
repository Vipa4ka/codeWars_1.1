// console.log(mes);
// let mes ='fdghngf'

// console.log(mes);
// var mes ='Hello'

// function getThis() {
//     return this;
// }
// console.log(getThis());

const foo = bar();
const num = 2;
function bar(){ return num}





// let name = 'Jon0';
// function printName(){
//     console.log(name);
// }
// setTimeout(() => {
// let name ='Petya';
//     printName();
    
// }, 1000)


// var a = 1, b = function a(x) { x && a(--x); };
// console.log(a);



// let name = 'John';
// function printName() {
//     let name ='Petya';
//     console.log(name);
// }
//     printName();
    

// for (let i = 0; i < 3; i++){
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }



// printMessage();
// function printMessage() {
//     console.log('Hello');
    
// }



// (
//     function (a) {
//         arguments[0] = 10;
//         return a;
//     }
// )(5);



// function foo() {
//     console.log(Function.getArguments(this));
// }
// foo();

// // function foo(){console.log(this.arguments);}

// // function foo() { console.log(foo.getArguments(this)); }

// function foo(){console.log(arguments);}



// function foo() {
//     return { bar: 1 };
// }
// console.log(typeof foo().bar);


// for (var i = 0; i < 3; i++){
//     setTimeout(function () {
//         console.log(i);
        
//     }, 1000 )
// }




// "use strict";
// const detals = {
//     message: 'Hello',
// }
// function getMessage() {
//     return this.message;
// }
// console.log(getMessage.call(detals));




// function foo() { console.log(this); }
// foo.call(null);


// function foo(a, b) {
//     return a * b;
// }
// const bar = foo.bind(null, 2);
// console.log(bar(2));



// const foo = bar();
// const number = 2;
// function bar() { return number; }




// for (var i = 0; i < 10; i++){
//     const a = 0;

// }
// console.log(i);



// var name = 'John';
// var user = {
//     name: "'peter",
//     printMessage() {
//         console.log(`hello, ${this.name}!`);
        
//     }
// };

// var printMessage = user.printMessage;
// printMessage();





// "use strict";
// function getThis() {
//     return this;
// }
// console.log(getThis());




// let f = function g() { return 23; }
// console.log(typeof g());

// let a = 3;
// let b = 5;

// // let f = function (a, b) { return a + b }



// // let f = new Function("a,b", "return a+b")

// // let f = new Function("a", "b", "return a+b")

// // let f = (a, b) => a + b

// let f = (a, b) => { a + b }

// console.log(f(a, b));



// function getThis() {
//     return this;
// }
// console.log(getThis());


// const details = {
//     name: 'John',
// }
// function getMessage(message) {
//     return `${message} ${this.name}`;
// }
// console.log(getMessage.apply(details, ['HEllo']));



// var name = 'John';
// function printName() {
//     console.log(name)
//     var name = 'Peter';
//     console.log(name);   
    
// }
// printName();
