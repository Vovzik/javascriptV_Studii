'use strict';

const todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed');


const todoData = [
  {
    value: 'Помыть посуду',
    completed: false
  },

  {
    value: 'Сварить кофе',
    completed: true
  }
]

const renderer = () => {
  todoList.textContent = null;
  todoCompleted.textContent = null;



  todoData.forEach(function (item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

   

    li.innerHTML = '<span class="text-todo"> ' + item.value + '</span>' +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      '</div>'

   

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }


    const btn = li.querySelector('.todo-complete');
    
    btn.addEventListener('click', () => {
         console.log(item.completed = !item.completed);
         renderer(); //Рекурсия это когда надо по новой вызвать функцию с начало вызвать.
    });
  });
}


todoControl.addEventListener('submit', (event) => {
  event.preventDefault(todoControl);


  const newTodo = {
    value: headerInput.value,
    completed: false
  }

  todoData.push(newTodo);

  renderer();
})

renderer();