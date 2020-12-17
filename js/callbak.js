'use strict'

function outputMessage(name, age) {
      console.log('как тебя зовут?' + ' ' + name + ' ' + 'Сколько тебе лет?' + ' ' + age);
};

outputMessage('Vladimir', 22);


const consoleMessage = function() {
    console.log('hello Friend')
};

consoleMessage();


const alertMessage = new Function('alert("HI!")');

alertMessage();



const sum = function(a, b) {
  console.log(arguments);
    return a + b;
};



let result = sum(10, 10, 2, 3, 5, 4, 1, 3);
console.log('result:' +  result);