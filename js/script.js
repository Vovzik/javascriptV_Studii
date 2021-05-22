let obj = {
  x: 10,
  y: 15,
}


//Если мы просто в функции вызываем this то получим глобальный метод window. Если метод this вызываем в обьекте то this будет являться обьектом.  

//Если будем вызывать внутры переменой функцию обьекта то this будет глобальным window





function newTest() {
  console.log(this)
}

function hardBin(hard) {
  newTest.apply(hard)
}

hardBin(obj);

let foo = newTest.bind(obj);

foo();


/* newTest.apply(obj);
newTest.call(obj);
 */


