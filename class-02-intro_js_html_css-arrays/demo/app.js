'use strict';

const name = prompt('What is your name?');
console.log('their name is: ' + name);

if (name.toLowerCase() === 'louis') {
    alert('Louis! You\'re the best!');
}


const likesFries = confirm('Do you like french fries?');
console.log('likes fries: ' + likesFries);

if (likesFries) {
    // TODO if they like fries, ask who has the best fries: LBB or Burgerville
    // TODO allow them to enter "lbb" or "LBB" or "Little Big Burger"
    // TODO give different responses based on their selection
    alert('Me, too!');
} else {
    alert('Sad face.');
}