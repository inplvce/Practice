//          Ternar js
//  if === ?
//  else === :

/*
let greeting;
let time = 10;

greeting = 20 < 12 ? "Good Mo" : "Good Evening";
console.log(greeting) */

// let str = 'hello';
// let personAge = 19

// let message = personAge < 18 ? 'Человек не совершеннолетний' : 'Человек совершеннолетний'
// console.log(message)




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
//         //break
//     case "yellow":
//         console.log('Car color is YELLOW')
//         //break
//     case "red":
//         console.log('Car color is RED')
//         //break
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
// let carName = 'Ford';
// let carAge = 2020;
// let personAge = 1990;

// function calculateAge(year) {
//     let currentYear = 2023;
//     let result = currentYear - year
//     return result
// }

// //  3. Создаем еще одну функцию
// function checkAngLogAge(year, name, compareTo) {

// //  2.
// if (calculateAge(year) < compareTo) {
    
//     console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет');
// } else {
//     console.log('Возраст ' + name + ' больше ' + compareTo + ' лет');
// }
// }
// checkAngLogAge(carAge, "машины", 8)
// checkAngLogAge(personAge, 'человека', 30)
    
//=======================


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
// let chechAgee;
// let age = 17

// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// chechAgee = age > 18 ? 'true' : 'Родители разрешили?';
// console.log(chechAgee)

// function min(a, b) {
//     return a + b;
// }
// console.log(min(1, 2))


// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// let carName = 'ford';
// let carYear = 2008;
// let personYear = 1990;

// function calculateAge(year) {
//     let currentYear = 2023;
// }

// if ((2018 - carYear) < 10) {
//     console.log('Возраст меньше 10 лет');
// } else {
//     console.log('Возраст больше 10 лет')
// }

// if ((2018 - 1990) < 10) {
//     console.log('Возраст меньше 10 лет');
// } else {
//     console.log('Возраст больше 10 лет')
// }


// let carColor = "yellow";

// if (carColor === "red") {
//     console.log("Цвет машины - красный")
// } else if (carColor === "yellow") {
//     console.log('цвет машины - желтый')
// } else if (carColor === 'green') {
//     console.log('цвет машины - зеленый')
// } else {
//     console.log('машину не красили')
// }

// switch (carColor) {
//     case "green":
//         console.log('car color is green')
//         break
//     case "yellow":
//         console.log('car color is yellow')
//         break
//     case "red":
//         console.log('car color is red')
//         break
//     default:
//         console.log('car color is default')
// }


let carName = 'BMW';
let carAge = 2020;
let chelAge = 1994;

//2. функция для вычисления возраста
function calculateAge(year) {
    let currentYear = 2023; 
// result - показать результат
    let result = currentYear - year
// возвращаем(return) что получилось(result) 
    return result
}  

// переписываем эту часть    =======================
if ((2023 - carAge) < 10) {
    console.log('Возраст машины меньше 10 лет')
} else {
    console.log('Возраст машины больше 10 лет')
}

// переписываем ту часть    ==================
if (calculateAge(carAge) < 10) {
    console.log('Возраст машины меньше 10 лет')
} else {
    console.log('Возраст машины больше 10 лет')
}


// ==========
// терперь эту
// if ((2023 - chelAge) < 30) {
//     console.log('Возраст человека меньше 30 лет')
// } else {
//     console.log('Возраст человека больше 30 лет')
// }

// 
// if (calculateAge(chelAge) < 30) {
//     console.log('Возраст человека меньше 30 лет')
// } else {
//     console.log('Возраст человека больше 30 лет')
// }

// ========3. ТЕПЕРЬ функфию, которая поможет автоматизиовать 2 этих процесса (carAge, chelAge):
// копируем условие, меняем возраст на calculateAge(year)
function checkAge(year) {
    if (calculateAge(year) < 30) {
        console.log('Возраст человека меньше 30 лет')
    } else {
        console.log('Возраст человека больше 30 лет')
    }
}
checkAge(chelAge)
checkAge(carAge)

let carsAge = 1992;
let dedAge = 1943;

function calcAge(years) {
    let seichas = 2023
    let result = seichas - years
    return result
}


function check(years, name) {
    if (calcAge(years) < 20) {
        console.log('Возраст '+ name + ' машины меньше 20 лет')
    } else { 
        console.log('Возраст машины ' + name + ' больше 20 лет')
    }
}

check(dedAge, 'деда')
check(carAge, 'пхорошей')

