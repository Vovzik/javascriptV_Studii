'use strict';

const  inputText = document.getElementById('myText'),
myBtn = document.getElementById('myBtn'),
text = document.getElementById('text');


function localText() {
  text.textContent = localStorage.myText;
}


myBtn.addEventListener('click', () => {
  localStorage.myText = inputText.value;

  localText();
});


localText();