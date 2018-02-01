'use strict';

/* what's a function and why use it?? */

console.log('lol');
alert('hahahahahaha');

/* anatomy of a function */

function shout (word) {
    let newWord = 'ahhhh' + word;

    if (word.length < 5) {
        newWord = newWord.toUpperCase(); 
    } else {
        newWord = newWord.toLowerCase();
    }

    return newWord;
}


/* make code happen when we want it to */



/* make things DRY!!! */


/* function declaration vs function expression */

// function expression can only be called after being saved in a variable

// function declarations! can be used before its declared in the code