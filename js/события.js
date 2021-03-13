const blog = document.querySelector('.blog');


/*blog.onclick = function () {

  if (count === 3) {
    return 
  } else {
    console.log('false')
  }


    count++;
    console.log('Вы кликнули по square');
}*/


blog.addEventListener('click', clickNew);


let count = 0;

function clickNew() {
  count++;

  if (count === 3)  blog.removeEventListener('click', clickNew);

  console.log('кликнули по блоку')
}

