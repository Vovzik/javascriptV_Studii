"use strict";

const money = prompt("Ваш месячный доход?", "");
const income = "Фриланс";
const addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  ""
);
const deposit = confirm("Есть ли у вас депозит в банке?", "");
const amount1 = +prompt("Во сколько это обойдется?", "");
const amount2 = +prompt("Во сколько это обойдется?", "");
const mission = 100000;
const period = 12;


let start = function() {
  let money1 = prompt('Ваш месячный доход?', '');


  while(isNaN(money1)) { //Функция isNaN проверяет, является ли переданный параметр числом или нет. Вернет true, если параметр не является числом и false, если является. 
    
  };
};

start();







console.log(addExpenses.toLowerCase().split(", "));






const showTypeOf = function (data) {
  console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(deposit);
showTypeOf(income);

let expenses = [];

function getExpensesMonth() {
  let sum = 0;

  for(let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов?', 'Садик Государственый');

    sum += +prompt('Во сколько это нам встанет?', ''); //в prompt мы получаем строку.  +prompt - получаем число в prompt.
  };
  console.log(expenses);

  return sum;
};

const expensesAmount = getExpensesMonth();
console.log("Сумма всех обязательных рассходов за месяц:" + expensesAmount);

function getAcumulatedMonth() {
  return money - expensesAmount; //Тут доходы минус обязательные рассходы
}

const acumulatedMonth = getAcumulatedMonth(); //Накопления за месяц
const getTargetMonth = Math.ceil(mission / acumulatedMonth);

console.log("Цель будет достигнута за:" + getTargetMonth + "месяцев");

const budgetDay = Math.floor(acumulatedMonth / 30);

console.log("Бюджет на день: " + budgetDay);

const getStatusIncome = function () {
  if (budgetDay > 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (budgetDay > 600 && budgetDay < 1200) {
    console.log("У вас средний уровень дохода");
  } else if (budgetDay < 600 && budgetDay > 0) {
    console.log("К сожалению у вас низкий уровень дохода");
  } else {
    console.log("Что то пошло не так!!");
  }
};

getStatusIncome();
