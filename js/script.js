//Task 3.0
//Copy the following data structure to the top of script.js:
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Task 1.0
//Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main');

//console.log(mainEl);

//Task 1.1
//Set the background color of mainElt o the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';


//Task 1.2
//Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//Task 1.3
//Add a class of flex-ctr to mainEl.

mainEl.classList = 'flex-ctr';

//Task 2.0
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);

//Task 2.1
//Set the height topMenuEl element to be 100%.

 topMenuEl.style.height = '100%';

//Task 2.2
//Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Task 2.3
//Add a class of flex-around to topMenuEl.

topMenuEl.classList = 'flex-around';


//Task 3.1
//Iterate over the entire menuLinksarray and for each "link" object:

 var index;
 for (index = 0; index < menuLinks.length; index++) {
  //Create an <a>element.
  var a = document.createElement("a");
  //On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.href = menuLinks[index].href;
  var text = document.createTextNode(menuLinks[index].text);
  //Set the new element's content to the value of the text property of the "link" object.
  a.appendChild(text);
  //Append the new element to the topMenuElelement.
  topMenuEl.appendChild(a);
  console.log(a);
}











