"use strict";

/*const a = 5;

console.log(a);

const question = confirm("Тебе есть 18 лет?");
const question2 = +prompt('Сколько тебе лет?', '18');
console.log(typeof question2);



//Преобразование типов данных

console.log(5 + '5');
console.log(typeof (5 + '5'));

console.log(5 - '5');
console.log(5 * '5');
console.log('js' / '5');

console.log(5 == '5');

console.log(Boolean(5)); //Преобразует в булиновый тип.
 
console.log(!!5) //Преобразует в булиновый тип короткая запись

console.log(String(5));
console.log(String('10'));
console.log(String([1, 2, 3]));

console.log(typeof (10+'cd'));
console.log(typeof (10 .toString()));


console.log(typeof Number('33')); //Преобразует в число
console.log(typeof +'34'); //Сокращеная запись преобразует в число.


let n = '10';
n *= 1;

console.log(typeof n);

console.log(parseInt('10ff', 16));  //Вторым параметром принимает систему исчисления 2, 8 ,16
console.log(parseFloat('10.5 px')); */

let n = 4;

if (n < 6) {
  console.log("Истину");
} else if (n == 5) {
  console.log("Лож");
} else {
  console.log("Привет");
}

switch (n) {
  case 6:
    console.log(6);
    break;
  case 5:
    console.log(5);
    break;
  case 4:
    console.log(4);
    break;
  default:
}

let result = false ? 1 : 0;

console.log(result);
