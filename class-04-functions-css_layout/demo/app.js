'use strict';

/* what's a function and why use it?? */

console.log('lol');
// alert('hahahahahaha');

// anatomy of a function

// using a function
// alert('this is an argument');
whisper();
whisperThis('potato');
whisperThis('carrot');
whisperThis();

// creating a function
function whisper() {
    console.log('whisper somethinnnggggg');
}

function whisperThis(whateverWeWant) {
    // whateverWeWant = 'carrot';
    console.log(whateverWeWant);
}


/*
    the function below has the following parts:
        - keyword "function" to declare it
        - a name: add
        - a list of parameters: (number, otherNumber)
        - a block of code to run: { // code and stuff }
*/

function add(number, otherNumber) {
    // would add number and otherNumber
    for (let i = 0; i < number; i++) {
        alert(number + otherNumber);
    }

    return number + otherNumber;
}

const sum = add(2,8);
console.log('the sum is: ' + sum);

// add(17,90);
// const hi = prompt('hey');



function shout(word) {
    let newWord = 'ahhhh' + word;

    if (word.length < 5) {
        newWord = newWord.toUpperCase();
    } else {
        newWord = newWord.toLowerCase();
    }

    return newWord;
}


const hi = shout('hello');
console.log('hi = ' + hi);

const hey = shout('hey');
console.log('hey = ' + hey);

// make code happen when we want it to
// make things DRY!!!



/* function declaration vs function expression */
// function declarations! can be used before its declared in the code

// function expression can only be called after being saved in a variable

// will through an error because eat hasn't been created yet 
// eat();

const eat = function (yo) {
    console.log('let us eat cake!');
    console.log(yo);
};

eat();

whisper();