//Task 1.0
//Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main');

//console.log(mainEl);

//Task 1.1
//Set the background color of mainElt o the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';
