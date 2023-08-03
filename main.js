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


// let carName = 'BMW';
// let carAge = 2020;
// let chelAge = 1994;

// //2. функция для вычисления возраста
// function calculateAge(year) {
//     let currentYear = 2023; 
// // result - показать результат
//     let result = currentYear - year
// // возвращаем(return) что получилось(result) 
//     return result
// }  

// // переписываем эту часть    =======================
// if ((2023 - carAge) < 10) {
//     console.log('Возраст машины меньше 10 лет')
// } else {
//     console.log('Возраст машины больше 10 лет')
// }

// // переписываем ту часть    ==================
// if (calculateAge(carAge) < 10) {
//     console.log('Возраст машины меньше 10 лет')
// } else {
//     console.log('Возраст машины больше 10 лет')
// }


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
// function checkAge(year) {
//     if (calculateAge(year) < 30) {
//         console.log('Возраст человека меньше 30 лет')
//     } else {
//         console.log('Возраст человека больше 30 лет')
//     }
// }
// checkAge(chelAge)
// checkAge(carAge)

// let carsAge = 1992;
// let dedAge = 1943;

// function calcAge(years) {
//     let seichas = 2023
//     let result = seichas - years
//     return result
// }


// function check(years, name, compare) {
//     if (calcAge(years) < compare) {
//         console.log('Возраст '+ name + ' машины меньше ' + compare + ' лет')
//     } else { 
//         console.log('Возраст машины ' + name + ' больше ' + compare + ' лет')
//     }
// }

// check(dedAge, 'деда', 98)
// check(carAge, 'пхорошей', 23)



//                  ==========  ОПРЕДЕЛЯЕМ ФУНКЦИЮ В ПЕРЕМЕННУЮ
// sayHelloTo("Inga")
// function sayHelloTo(name) {
//     console.log('hello, ' + name + '!' + ' How are you?');
// }

                    //===== переписываем это выажение:

// let sayHelloTo = function (name) {
//     console.log('hello, ' + name + '!' + ' How are you?');
// }
// sayHelloTo('Igar')
// !!! в этом варианте мы не можем вызвать функцию до того, как она объявлена!!!


                    //=========== СТРОКИ

// const str1 = 'hello wrld'
// console.log(str1)

// const personName = 'Victor'
// const message = 'Your name is' + ' ' + personName
// console.log(message)
// //                                     МЕТОДЫ

// let newMessage = 'hello world!!!'
// console.log(newMessage.length)
// console.log(newMessage.toUpperCase())
// console.log(newMessage.toLowerCase())
// console.log(newMessage.charAt(1))
// //  и тд

//                                      ЧИСЛА

// function nameMark(name) {

// console.log('Hello, ' + name + '!' + ' How are you?')
// }
// nameMark('Mark')

// let greeting = 'Hi, John!'
// let message = 'How are you?'
// let userName = 'John'

// let sayHi = greeting + message;
// console.log(`Hi, ${userName}! How are you?`); // ========== КОНКАТЕНАЦИЯ

// //                  ========== FUNCTION
// function sayHi(name) {
//     console.log(`Hi, ${name}! How are you?`)
// }
// sayHi('Dima')
// sayHi('Igar')
// sayHi('Dina')

//                  ========== RETURN

// function sum(a, b) {
//     let result = a + b
//     return result; // сразу после этой строки функция завершает свою работу!!! 
// }
// let res = sum(44, 5)
// console.log(res)


// //                  ========== FUNCTION КАК АРГУМЕНТ
// function summ(a, b) {
//     return a +  b
// }

// console.log(summ(summ(5, 6), summ(5, 6))) 


//                     ========== ФУНКЦИЯ КАК АРГУМЕНТ
// function summ(a, b) {
//     return a + b
// }

// function diff(a, b) {
//     return a - b
// }

// function doSomething(func) {
//     let x = 10;
//     let y = 15;
//     let result = func(x, y)
//     console.log(result)
// }
// doSomething(summ)
// doSomething(diff)

//  ========================      D   O   M

// document.querySelector('h2').classList.add('red')

// выбор одного элемента
// const heading2 = document.querySelector('h2');
// heading2.classList.add('red')


// // const heading2 = document.querySelector('h2');
// // heading2.classList.add('green')

// const heading3 = document.querySelector('h3').classList.add('blue')


//выбор коллекции элементов
// const headings = document.querySelectorAll('h2');
// console.log(headings);
// // for of метод
// for (let item of headings) {
//     console.log(item)
//     item.classList.add('red-text');  // Красит все заголовки h2 в красный цвет
// }

// const pa = document.querySelectorAll('p');
// console.log(pa)

// for (let iitems of pa) {
// console.log(iitems)
// iitems.classList.add('green-text');
// }

// const headin = document.querySelectorAll('h1');
// console.log(headin);
// // forEach метод
// headin.forEach(function (h1) {
//     h1.classList.add('blue-text');
// })


// 1:31:00  =======================   3:20:1


//                  ==========    CSS КЛАССЫ   ==========

// методы:
/*
element.classList.add()
.add() - добавляет класс
.remove() - удаляет
.toggle() - переключает (добавляет если не было, убирает если был)
.contains() - возвращает true или false  взависимости от того, есть ли
    такой класс

*/

// const heading = document.querySelector('h2');
// console.log(heading);

// heading.classList.add('red-text');
// heading.classList.remove('red-text');
// heading.classList.toggle('green-text');
// heading.classList.contains('red-text');
// heading.classList.toggle('green');


               ==========    АТРИБУТЫ   ==========

const img = document.querySelector('#logo');
const srcValue = img.getAttribute('src');
console.log(srcValue)

img.setAttribute('src', './img/php.png') //добавляем новый путьб меняем картинку
//(она появилась очень огромная)
//задаем размеры (ширина, px)
img.setAttribute('width', '200') //устанавливаем размер в 200px 
img.src = './img/js.png'; //снова возвращием старую каритинку JS

// ПЕРЕХОДИМ К КНОПКЕ
const button = document.querySelector('#button'); //находим кнопку по айдишнику
button.setAttribute('value', 'Send') // ('значение', 'меняем надпись на кнопке')

//но, если такой класс уже есть - проще так:
button.value = 'Text for button'

//                ==========    РАБОТА С ПРОСЛУШКОЙ СОБЫТИЙ   ==========
