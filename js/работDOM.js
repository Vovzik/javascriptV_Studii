const collections = document.querySelectorAll('.collection');
const elems = document.querySelectorAll('.elems');



console.log(elems);


collections[1].append(elems[0]);


console.log(collections[0].before(collections[1]));

elems[1].after(elems[3]);

elems[3].replaceWith('Привет!'); 

elems[4].insertAdjacentText('beforebegin', 'beforebegin'); //Добавляет элемент до заголовка
elems[4].insertAdjacentText('afterend', 'afterend');
elems[4].insertAdjacentText('afterbegin', 'afterbegin');
elems[4].insertAdjacentText('beforeend', 'beforeend');



elems[5].insertAdjacentElement('beforebegin', elems); //Добавляет элемент до заголовка



elems[0].insertAdjacentHTML('beforebegin', '<h3>beforebegin</h3>')


