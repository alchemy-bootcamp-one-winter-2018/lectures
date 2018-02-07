/* three ways to tell an element to listen for a user event */

// 1. as an attribute in the html (see the html)
function clickHandler () {
    console.log('cats');
}

// 2. as a property in the js
const cats = document.getElementById('cats');
// cats.onclick = cat;

// 3. using the method: addEventListener() ****Use this one!****
cats.addEventListener('click', clickHandler);

cats.addEventListener('mouseover', function () {
    console.log('mouse!!!');
    console.log('event.target', event.target);
    console.log('event.type', event.type);
});