//          Ternar js
//  if === ?
//  else === :

/*
let greeting;
let time = 10;

greeting = 20 < 12 ? "Good Mo" : "Good Evening";
console.log(greeting)
*/

// //          Шаблонные строки
// let greeting;
// let time = 10;

// greeting = time < 10 ? "Good Morning" : "Good Day";
// console.log(greeting);

// let hi = 'Hi, Mark!';
// let howAreYou = ' What is it?';
// let sayHi = hi + howAreYou;

// console.log(sayHi);

// //      Конкатенация "строка" + переменная + "строка"
// const userName = 'Mark';
// console.log('Hi, ' + userName + '! How are you?');


// //      Шаблонные строки
// console.log(`hello, ${userName}! How Are you?`);


//      Functions
//  DRY - don't repeat yourself


function sayHi() {
    console.log('Привет уважаемый пользователь!');
}
sayHi()

//          SWITCH CASE

var carColor = "";

// if (carColor === "green") {
//     console.log('Car color is GREEN')
// } else if (carColor === "yellow") {
//     console.log("Car color is YELLOW")
// } else if (carColor === "red") {
//     console.log("Car color is RED")
// } else {
//     console.log('Цвет не определен');
// }


// switch case
// break - стопит на нужном цвете
switch (carColor) {
    case "green":
        console.log('Car color is GREEN')
        //breake
    case "yellow":
        console.log('Car color is YELLOW')
        //breake
    case "red":
        console.log('Car color is RED')
        //breake
    default:
        console.log('Car color is default')
}


