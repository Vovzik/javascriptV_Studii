'use strict';

let arr = [1, 2, 3, 4, 5];



for (const item of arr) {
  console.log(item);
};


delete arr[3];
console.log('arr: ', arr);

let Obj = {
  a: 3,
  b: true,
  c: 'js',
};

delete Obj.a;
console.log('Obj: ' + Obj);


function test() {
    console.log(arguments);
};

test(1, 2, 3, 4, 5);