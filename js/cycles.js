'use strict';


//Пример рекурсии

/*function changeTires(showTires){
  

  if(showTires > 0) {
    Демонтаж, разбортовка, забортовка, давление, балансировка, монтаж
    console.log(showTires);
    showTires--;
  };
  
  if(showTires > 0) {
    Демонтаж, разбортовка, забортовка, давление, балансировка, монтаж
    console.log(showTires);
    showTires--;
  };
  
  if(showTires > 0) {
    Демонтаж, разбортовка, забортовка, давление, балансировка, монтаж
    console.log(showTires);
    showTires--;
  };
  
  if(showTires > 0) {
    Демонтаж, разбортовка, забортовка, давление, балансировка, монтаж
    console.log(showTires);
    showTires--;
  };
};

changeTires(4)


function changeTires(showTires) {  //Это называеться рекурсия вызов функции внутри функции. Рекурсия важный элемент в математике и программировании. C ее помощью можно упаковывать сложные большие конструкции в маленькие и простые.
     Демонтаж, разбортовка, забортовка, давление, балансировка, монтаж
     showTires--;
     console.log(showTires);


  if(showTires > 0) {
    changeTires(showTires);
  };
};

changeTires(4);*/




//Циклы


let n = 0;

/*while(n < 5) { //цикл будет выполняться пока условие истино
  console.log(n);
  n++;
}


do{ //в этом цикле выполняеться в начале инструкция а потом проверяеться уловие.  Даже если мы получим false то все равно одна итерация цикла будет работать. 
  console.log(n);
  n++;
} while(n === 5);



for (let i = 0; i < 5; i++) {

  if(i == 3) {
      break //Остановить цикл
      continue //Пропустит условие
  }

  console.log(i);
};*/