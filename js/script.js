/* let car = {
  doors: 4,
  turbocharhing: false,
  ride: function () {
    console.log('Машина едет');
  }
}

let newCar = Object.create(car);

newCar.model = 'mazda 3';

console.log(newCar)

console.log(newCar.__proto__.hasOwnProperty('doors'));
/* тут мы проверяем есть ли у прототипа это свойство */


/* console.log(car.isPrototypeOf(newCar)); */
//Проверяем являеться ли обьект car прототипам обьекта newCar */


function Car () {
  this.model = 'Mazda';
}


let car1 = new Car();


console.log('car1: ' + car1)