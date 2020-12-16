'use strict';


/*function changeTires(snowTires) {
    демонтаж, разбортовка, забортовка, давление,
    балансировка, монтаж
    snowTires--; //Дикримент
    console.log(snowTires);

  if (snowTires > 0) {
    changeTires(snowTires);  //Это и называеться рекурсией вызов функции внутри функции.
  }; 
  
};

changeTires(4);*/



let n = 5;

/*while(n < 5) {
  console.log(n);
  n++;
}



do{  //Отличие while  и  do while    while - выполняеться только когда условие у нас true.  A do while - в любом случае выполнит итерацию цикла. Сделает что то а потом проверить условие.
  console.log(n); //Тут выполняеться инструкция
  n++;
} while(n < 5);  //Тут пишем условие


 


for (let i = 0; i < 5; i++) {
  if (i == 3) { 
    break //Прекращаем цикл 
    continue // пропустим условие
  }



    console.log(i)
};*/


let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n); //*isFinite - если его параметр являеться не числом вернет false если числом true
};


let money;


let start = function() {
    money = prompt('Ваш месячный доход?');

  while (!isNumber(money)) {   //Метод трим удаляет пробелы    Функция isNaN проверяет, является ли переданный параметр числом или нет. Вернет true, если параметр не является числом и false, если является. 
    money = prompt('Ваш месячный доход?');
  };
};

start();



