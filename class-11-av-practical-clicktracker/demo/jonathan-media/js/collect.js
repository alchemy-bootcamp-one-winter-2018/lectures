/*
    create a game where users can "Catch" cuttlefish by clicking on them.
    - display (3) random fish for a user to try to catch
    - user can click on fish to catch it

    - cuttlefish will move around the screen
    - cuttlefish will be worth a certain number of points
    - when a round is done, tally points of all fish caught

*/


const game = {
    cuttlefish: [],
    start: function () {

        this.cuttlefish.push(
            new Cuttlefish('cool fish','coolfish.jpg'),
            new Cuttlefish('cuttle fish','cuttlefish2.jpg'),
            new Cuttlefish('cuttle fish','cuttlefish5.jpg'),
            new Cuttlefish('cuttle fish','cuttlefish8.jpg'),
            new Cuttlefish('cuttle fish','cuttlefish9.png'),
            new Cuttlefish('not a fish','nofish.jpg'),
            new Cuttlefish('red fish','redfish.jpg'),
            new Cuttlefish('stripes fish','stripes.jpg'),
            new Cuttlefish('also stripes fish','stripes2.jpg')
        );

        // show 3 random cuttlefish
        this.showFish();

        const board = document.getElementById('game-board');
        board.addEventListener('click', function () {
            console.log('game was clicked', event.target);
            // what to do when image is clicked
            // track # of clicks per image
            // increase the clicked fish's .timesCaught property
            
            const url = event.target.src;
            for(let i = 0; i < game.cuttlefish.length; i ++) {
                const fish = game.cuttlefish[i];
                
                console.log('index of url', url.indexOf(fish.imageUrl));
                const endOfUrl = url.slice( url.indexOf(fish.imageUrl), url.length );
                // debugger;

                if (endOfUrl === fish.imageUrl) {
                    fish.timesCaught++;
                    console.table(fish);
                }
            }

            // reselect and append new images
            game.clearBoard();
            game.showFish(); // what is this
        });
    },
    getRandomFish: function () {
        const selectedFishes = [];
        for (let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * this.cuttlefish.length);
            const fish = this.cuttlefish[randomNumber];
            selectedFishes.push(fish);

            // const fishEle = fish.render();
            // section.appendChild(fishEle);
            // section.appendChild(fish.render());
        }
        console.table(selectedFishes);

        return selectedFishes;
    },
    getRandomSquares: function () {
        const section = document.getElementById('game-board');
        const allSquares = document.querySelectorAll('div.four');
        const selectedSquares = [];
        while(selectedSquares.length < 3) {
            // get random square
            const randomNumber = Math.floor(Math.random() * allSquares.length);
            const square = allSquares[randomNumber];
            if (selectedSquares.includes(square)) continue;
            selectedSquares.push(square);
        }

        return selectedSquares;
    },
    showFish: function () {
        // get three fish
        const fishes = this.getRandomFish();

        // get three squares
        const squares = this.getRandomSquares();

        // add fish to squares
        for (let i = 0; i < squares.length; i++) {
            squares[i].appendChild(fishes[i].render());
        }
    },
    clearBoard: function () {
        const allSquares = document.querySelectorAll('div.four');
        for (let i = 0; i < allSquares.length; i ++) {
            allSquares[i].textContent = '';
        }
    }
};



function Cuttlefish (name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesCaught = 0;
}

Cuttlefish.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src =  `media/images/${this.imageUrl}`;
    ele.setAttribute('alt', this.name);
    return ele;
};

game.start();
