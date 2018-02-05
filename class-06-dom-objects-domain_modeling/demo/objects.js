/*
    Creating objects 
*/

// properties
const song = {
    title: 'Row row',
    lyrics: 'row row row your boat gently la al alalalalal',
    length: 300,
    isFavorite: false
};

const anotherSong = {
    title: 'ABC',
    lyrics: 'qwertyuiopasdfghjkl',
    length: 100,
    isFavorite: true
};

// methods
const thirdSong = {
    title: 'Freebird',
    lyrics: 'idk x 109idlkjkwej8 sdkljfkwoidsf lksdfijwwekl',
    length: 800,
    isFavorite: false,
    sing: function () {
        /* Accessing its own properties with the all dreaded *this* */
        alert(this.lyrics);
    }
};

console.log('outside of an object this is: ', this);

/* Accessing properties and methods */
const songs = ['one two three', 'blue cows', 'remote control'];
console.log(songs[1]); // 'blue cows'

thirdSong['title']; // 'Freebird'
console.log(thirdSong['title']);

thirdSong.title; // 'Freebird'
console.log(thirdSong.title);

// Changing properties
thirdSong.lyrics = 'correct freebird words';
console.log(thirdSong.lyrics);

// Executing methods
// thirdSong.sing();



/* 
    The Document Object Model (DOM)
*/

/* referencing existing html elements  */
console.log('the document object: ', document);

const notes = document.getElementById('notes');
console.log(notes);

const h1 = document.getElementsByTagName('h1');
console.log(h1);

const surprises = document.getElementsByClassName('surprise');
console.log(surprises);

const h1Again = document.querySelector('h1');
console.log(h1Again);

const surprisesAgain = document.querySelectorAll('.surprise');
console.log(surprisesAgain);

h1Again.id = 'something';
h1Again.classList.add('surprise');
h1Again.style.color = 'blue';

/* creating new elements */
// adding them to the DOM
const newPara = document.createElement('p');
newPara.textContent = 'jibberish and other stuff';
console.log(newPara);

// appendChild
notes.appendChild(newPara);

const imgEle = document.createElement('img');
imgEle.src = '#';
// imgEle.alt = 'test';
imgEle.setAttribute('alt', 'testing 123');

console.log(imgEle);

newPara.appendChild(imgEle);

// imgEle.remove();