

/*let eventFunc = (event) => {
  console.log(event.type)
}


//События input

//document.querySelector('#text').addEventListener('input', eventFunc);
//document.querySelector('#text').addEventListener('change', eventFunc);
document.querySelector('#text').addEventListener('keydown', eventFunc);
document.querySelector('#text').addEventListener('keyup', eventFunc);
document.querySelector('#text').addEventListener('focus', eventFunc);
document.querySelector('#text').addEventListener('blur', eventFunc);


window.onbeforeunload = function() {
  return 'Вы действительно хотите уйти со страницы?'
}*/



let clickElem = null;


function greenHundler(event) {
    if(clickElem) {
      clickElem.classList.remove('green');
    }

    clickElem = event.currentTarget;
    clickElem.classList.add('green');
}



document.querySelector('.button').addEventListener('click', greenHundler);