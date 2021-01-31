"use strict";

let money;

let start = function () {
  money = prompt("Ваш месячный доход?", "");

  do {
    money = prompt("Ваш месячный доход?", "2000");
  } while (isNaN(money) || money === "" || money === null);
};

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
	deposit: false,
	percentDeposit: null,
	moneyDeposit: null,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: null,
  budgetMonth: null,
  expensesMonth: null,

  asking: function () {
			if (confirm('Есть ли у вас дополнительный источник заработка?')) {
				let itemIncome = +prompt('Какой у вас дополнительный заработок?', 'таксую');

				if (isNaN(itemIncome)) {
					
				}	else {
					appData.asking(itemIncome);
				}
				


				let cashIncome = prompt('Сколько в месц вы на этом зарабатываете?', 10000);

				appData.income[itemIncome] = cashIncome;

				console.log(appData.income);
			}



    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую","");
		appData.addExpenses = addExpenses.toLowerCase().split(", ");
    appData.deposit = confirm("Есть ли у вас депозит в банке?", "");

      for (let i = 0; i < 2; i++) {
          const sum = prompt('Введите обязательную статью рассходов?', 'Кино');
          const sum1 = prompt('Во сколько это обойдеться?', '');

          appData.expenses[sum] = parseInt(sum1);
      };
  },

  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      return appData.expensesMonth = appData.expenses[key] + appData.expenses[key];
    };
       
  },
      

  getBudget: function () {
    return money - appData.expensesMonth; //Тут доходы минус обязательные рассходы
  },


  getStatusIncome: function () {
    if (appData.budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
      console.log("У вас средний уровень дохода");
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
      console.log("К сожалению у вас низкий уровень дохода");
    } else {
      console.log("Что то пошло не так!!");
    }
  },


  getTargetMonth: function () {
    return appData.budgetMonth = Math.ceil(appData.mission / appData.getBudget());
	},
	

	getInfoDeposit: function () {
		 if (appData.deposit) {
			 appData.percentDeposit = prompt('Какой годовой процент?', '10');
			 appData.moneyDeposit = prompt('Кака сумма заложена?', 10000);
		 }
	},

	calcSavedMoney: function () {
		return appData.budgetMonth * appData.period;
	},
};

appData.asking();


appData.getExpensesMonth();
console.log("Сумма всех обязательных рассходов за месяц:" + appData.expensesMonth);


//appData.getBudget(); Накопления за месяц




appData.getTargetMonth();


if (appData.budgetMonth >= 1) {
  console.log("Цель будет достигнута за:" + appData.budgetMonth + "месяцев");
} else {
  console.log("Цель не будет достигнута" + appData.budgetMonth + "месяцев");
}

appData.budgetDay = Math.floor(appData.getBudget() / 30);

console.log("Бюджет на день: " + appData.budgetDay);


appData.getStatusIncome();



for (let key in appData) {
  //console.log("Наша программа включает в себя данные: " + 'Ключи: ' + ' ' + key + ' ' + 'Значения: ' + ' ' + appData[key]);
}




appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());