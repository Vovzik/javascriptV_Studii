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

function setCookie(key, value, year, month, day, path, domain, secure) {
  let cookieStr = key + '=' + value;

  if(year) {
    const expires = new Date(year, month, day);
    cookieStr += '; expires=' + expires.toGMTString();
  };

  cookieStr += path ? '; path=' + path : '';
  cookieStr += domain ? '; domain=' + domain : '';
  cookieStr += secure ? '; secure' : '';

  document.cookie = cookieStr;
}


setCookie('Любимый праздник детей', 'Новой год', 2020);


/* console.log(document.cookie) */