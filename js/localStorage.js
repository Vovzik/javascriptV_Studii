'use strict';

/* localStorage */

const  inputText = document.getElementById('myText'),
myBtn = document.getElementById('myBtn'),
text = document.getElementById('text');


function localText() {
  /* text.textContent = localStorage.myText; */

  text.textContent = localStorage.getItem('memory');
}


myBtn.addEventListener('click', () => {
  /* localStorage.myText = inputText.value; */
  localStorage.setItem('memory', inputText.value)

  localText();
});


localText();



/* cookie */


/*  document.cookie = 'имя=значение';
document.cookie = 'имя1=значение2';

document.cookie = 'hope=life; expires=Tue, 7 May 2024 00:00:00 GMT';  */

console.log(document.cookie)