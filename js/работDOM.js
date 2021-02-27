const collections = document.querySelectorAll('.collection');
const elems = document.querySelectorAll('.elems');



console.log(elems);


collections[1].append(elems[0]);


console.log(collections[0].before(collections[1]));

elems[1].after(elems[3]);

elems[3].replaceWith('Привет!');