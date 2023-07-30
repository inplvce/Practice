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

// var carColor = "";

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

// var carName = 'Ford';
// var carYear = 2020

// var personeName = 'Fill';
// var personYear = 2010

// function calculateAge(year) {
//     var currentYear = 2023
//     var result = currentYear - year
//     return result
// }

// function checkAndLogAge(year) {
//     if (calculateAge(year) < 10) {
//         console.log('Возраст меньше 10 лет');
//     } else {
//         console.log('Возраст больше 10 лет');
//     }
// }

// checkAndLogAge(carYear)
// checkAndLogAge(personYear)

// const phoneName = 'Apple';
// const phoneAge = 2002;

// function calculateAge(year) {
// const currentYear = 2023
// const result = currentYear - year
// return result
// }

// if (calculateAge(phoneAge) < 10) {
//             console.log('Возраст меньше 10 лет');
//         } else {
//             console.log('Возраст больше 10 лет');
//         }



//  1.
let carName = 'Ford';
let carAge = 2020;
let personAge = 1990;

function calculateAge(year) {
    let currentYear = 2023;
    let result = currentYear - year
    return result
}

//  3. Создаем еще одну функцию
function checkAngLogAge(year, name, compareTo) {

//  2.
if (calculateAge(year) < compareTo) {
    
    console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет');
} else {
    console.log('Возраст ' + name + ' больше ' + compareTo + ' лет');
}
}
checkAngLogAge(carAge, "машины", 8)
checkAngLogAge(personAge, 'человека', 30)

// if (calculateAge(personeAge) > 20) {
//     console.log('Старше 20')
// } else {
//     console.log('Младше 20')
// }


// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

// console.log(checkAge(20))

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

//          Ternar js
//  if === ?
//  else === :

// let greeting;
// let time = 10;

// greeting = 20 < 12 ? "Good Mo" : "Good Evening";
// console.log(greeting)
let chechAgee;
let age = 17

// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
chechAgee = age > 18 ? 'true' : 'Родители разрешили?';
console.log(chechAgee)

function min(a, b) {
    return a + b;
}
console.log(min(1, 2))


// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1




