'use strict';

let spent = 0;


function getExpensesMonth(car, utilities, food) {
    spent = car + utilities + food;
};

getExpensesMonth(5, 4, 6);
console.log(spent)






function getAccumulatedMonth(income, minus) {
  return  income - minus;
};

const accumulatedMonth = getAccumulatedMonth(22, spent);
console.log(accumulatedMonth)






function getTargetMonth(day, day_1) {
    return day + day_1;
};

console.log(getTargetMonth(40, 40));



function showTypeOf() {

};

showTypeOf();



let addExpenses = ['clothes', 'animals'];


