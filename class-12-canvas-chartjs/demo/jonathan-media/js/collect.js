const game = {
    cuttlefish: [],
    counter: 0,
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
        board.addEventListener('click', clickHandler);
    },
    end: function () {
        this.board.removeEventListener('click', clickHandler);
        this.board.classList.add('game-over');
    },
    getRandomFish: function () {
        const selectedFishes = [];
        for (let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * this.cuttlefish.length);
            const fish = this.cuttlefish[randomNumber];
            selectedFishes.push(fish);
        }

        return selectedFishes;
    },
    getRandomSquares: function () {
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

function clickHandler () {
    const url = event.target.src;
    if (!url) return;
    
    for(let i = 0; i < game.cuttlefish.length; i ++) {
        const fish = game.cuttlefish[i];
        const endOfUrl = url.slice( url.indexOf(fish.imageUrl), url.length );

        if (endOfUrl === fish.imageUrl) {
            fish.timesCaught++;
            console.table(fish);
        }
    }
    
    // reselect and append new images
    game.clearBoard();
    game.showFish();
    if (game.counter === 3) {
        game.end();
    }
}


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

