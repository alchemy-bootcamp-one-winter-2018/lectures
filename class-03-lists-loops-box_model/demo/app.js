/*
    plan a visit to the zoo based on the visitors interests
*/

// array to hold all the exhibit names they'll visit
const toVisit = [];

// const likesMonkeys = confirm('Do you like monkeys?');
// if (likesMonkeys) {
//     toVisit.push('monkeys','orangutans');
// }

// const age = prompt('How old are you?');
// if (age < 70) {
//     toVisit.push('zebras');
// } else if (age > 50) {
//     toVisit.push('elephants');
// } else if (age === 25) {
//     toVisit.push('red pandas');
// }

// let beverage = prompt('Do you prefer coffee or tea?');
// do {
//     if (beverage === 'coffee') {
//         toVisit.push('sea otters');
//     } else if (beverage === 'tea') {
//         toVisit.push('harbor seals');
//     } else {
//         alert('That wasn\'t an option ):');
//         beverage = prompt('Do you prefer coffee or tea?');
//     }
// } while (beverage != 'coffee' && beverage != 'tea');
// } while ('coffee' != 'coffee' || 'tea');
// } while (false || 'tea');
// } while (false || 'tea');
// } while (true);

// TODO make sure they pick coffee or tea so we don't need our else block.

for (let i = 0; i < 5; i++) {
    const guess = parseInt(prompt('Can you guess how many penguins we have?'));
    // TODO give them 5 guesses, and if they guess correctly, don't ask again
    if (guess === 0) {
        alert('We have penguins!!');
    } else if (guess < 8) {
        alert('We have more than that.');
    } else if (guess > 8) {
        alert('Okay, not quite that many...');
    } else if (guess === 8) {
        alert('You got it!');
        toVisit.push('penguins');
        break;
    }
}

alert('We recommend you visit these exhibits: ' + toVisit);