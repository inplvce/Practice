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


//                  ========= SWITCH CASE ==========

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


//                  ==========SWITCH CASE==========
// break - стопит на нужном цвете

// switch (carColor) {
//     case "green":
//         console.log('Car color is GREEN')
//         //breake
//     case "yellow":
//         console.log('Car color is YELLOW')
//         //breake
//     case "red":
//         console.log('Car color is RED')
//         //breake
//     default:
//         console.log('Car color is default')
// }


//                  ========== FUNCTIONS ==========

//  DRY - don't repeat yourself

// function sayHi() {
//     console.log('Привет уважаемый пользователь!');
// }
// sayHi()



//  function declaration (можем вызывать до того как она объявлена в коде)
// sayHello()
// function sayHello() {
//     console.log('Hi!');
// }

// let name = "Bob"
// console.log(name)
// //  function expression
// const sayHi = function () {
//     alert("hi");
// }

var carName = 'Ford';
var carYear = 2020

var personeName = 'Fill';
var personYear = 2010

function calculateAge(year) {
    var currentYear = 2023
    var result = currentYear - year
    return result
}

function checkAndLogAge(year) {
    if (calculateAge(year) < 10) {
        console.log('Возраст меньше 10 лет');
    } else {
        console.log('Возраст больше 10 лет');
    }
}

checkAndLogAge(carYear)
checkAndLogAge(personYear)