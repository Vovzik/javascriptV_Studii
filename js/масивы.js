'use strict';

let car = {
  model: 'mazda',
  year: 2006,
  turbo: true,
  specification: [],
  style: {
    color: 'blue',
  },
};


console.log(car['model']);

car['place'] = 'city';
console.log(car);