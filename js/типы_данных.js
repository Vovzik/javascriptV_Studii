let myVar;

/*
//Примитивные типы данных

myVar = 10;
console.log(typeof myVar);
myVar = 'Привет'
console.log(typeof myVar);
myVar = 'true';
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);
myVar = undefined;
console.log(typeof myVar);
myVar = Symbol();



console.log(typeof myVar); //typeof - это оператор он воозращает нам строку с описанием определением типа данных

myVar = {};
myVar = [];
let regExp = /w+/g;
let func = function(){};
let error = Error('message');
let date = new Date();


let mySymbol1 = Symbol();
let mySymbol2 = Symbol();
console.log(mySymbol1 == mySymbol2);


// undefined означает то что значения не существует у переменной.

console.log(null <= 0)

let mayVar;

console.log(mayVar);
*/

//Булиновые типы
/*
let myTrue = true;
let myfalse = false;


//Вырожения
console.log(3 == 3);
console.log(3 == 4);

//Преобразуем любой тип данных в булиновый тип.

console.log(Boolean('hello'));
console.log(Boolean(10));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function(){}));


//Здесь мы получим false

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));




//Операторы условия  || - оператор или, && - оператор И, ! - оператор НЕ.

console.log(true || true);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(false && true);
console.log(false && false);


console.log(!true) //Оператор ! преобразует true в false
console.log(!false)  //И Обратно
*/

/*Числа 


console.log( 50); //Целое число
console.log( 8.5); //Дробное число, число с плавающей точкой.
console.log( 5e6); //'эндспекциальная форма'
console.log( 0b1111); //двоичнаяформа
//*console.log(011);	 //восмиричная форма
console.log( 0o11); //новая запись восмиричной формы
console.log( 0x22aacc); //шестнадцатиричный формат формы
console.log( -Infinity);
console.log( NaN);

console.log( typeof 50); //Целое число
console.log( typeof 8.5); //Дробное число, число с плавающей точкой.
console.log( typeof 5e6); //'эндспекциальная форма'
console.log( typeof 0b1111); //двоичнаяформа
//*console.log(011);	 //восмиричная форма
console.log( typeof 0o11); //новая запись восмиричной формы
console.log( typeof 0x22aacc); //шестнадцатиричный формат формы
console.log( typeof Infinity);
console.log( typeof NaN);


console.log(-3222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222)
*/

/*Орафмитические операторы
console.log(+5);
console.log(-5);

let i = 10;

console.log(--i)
console.log(i)


//Бинарные операторы
console.log(5 + 10);
console.log(4 - 3);
console.log(2 * 3);
console.log(9 / 2);
console.log(9 % 2)


let n = 15;

//n = n + 15;
n += 15;
console.log('n', n)
//n = n - 6;
n -= 6;
console.log('n', n)
//n = n / 3;
n /= 3;
console.log('n', n)





//Операторы сравнения
console.log(3 > 2);
console.log(3 < 2);
console.log(5 >= 10);
console.log(10 <= 20);
console.log(5 === 5);
console.log(10 !== 12);
console.log(5 == '10');
console.log(5 != 30);

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Number.isInteger(5)); //Метод для проверки являеться ли число целым.
*/

//Строки
console.log("Привет как твои дела?" + 30);

let text = "Привет как твоя погода?";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text[0]);

console.log(text.substring(6));
console.log(text.substring(6, 15));
console.log(text.slice(6));
console.log(text.slice(-5));
console.log(text.substr(6, 20));

console.log(text.indexOf("дела?"));
console.log(text.replace("Привет", "Пошел вон"));

console.log(text.split(" "));
