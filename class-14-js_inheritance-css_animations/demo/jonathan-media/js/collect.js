const game = {
    cuttlefish: [],
    counter: 0,
    board: document.getElementById('game-board'),
    numFish: 3,
    numRounds: 3,
    start: function () {


        // if will run if they are coming back 
        if (localStorage.getItem('fish')) {
            // get array of obj literals of fish
            const fishObjs = JSON.parse(localStorage.getItem('fish')); // [{name,img,num},{name,img,num},{name,img,num}]

            for (let i = 0; i < fishObjs.length; i ++) {
                const fishObj = fishObjs[i]; // {name,img,num}

                // Cuttlefish (name, imageUrl, timesCaught)
                const fish = new Cuttlefish(fishObj.name, fishObj.imageUrl, fishObj.timesCaught);
                this.cuttlefish.push(fish);
            }
        } else {
            // else will run if they are a first time visitor
            this.cuttlefish.push(
                new Cuttlefish('cool fish','coolfish.jpg', 0),
                new Cuttlefish('cuttle fish','cuttlefish2.jpg', 0),
                new Cuttlefish('cuttle fish','cuttlefish5.jpg', 0),
                new Cuttlefish('cuttle fish','cuttlefish8.jpg', 0),
                new Cuttlefish('cuttle fish','cuttlefish9.png', 0),
                new Cuttlefish('not a fish','nofish.jpg', 0),
                new Cuttlefish('red fish','redfish.jpg', 0),
                new Cuttlefish('stripes fish','stripes.jpg', 0),
                new Cuttlefish('also stripes fish','stripes2.jpg', 0)
            );
        }

        console.log(this.cuttlefish);

        // show 3 random cuttlefish
        this.showFish();
        this.board.addEventListener('click', clickHandler);

        const canvas = document.getElementById('bubbles');
        // ctx is short for context
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

        setInterval(draw,1000);

        function draw () {
            ctx.fillStyle = 'blue';
            ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

            for (let t = 0; t < 5; t++) {
                const randomSize = Math.floor(Math.random() * t * 10);
                for (let i = 0; i < 3; i++) {
                    const randomX = Math.floor(Math.random() * (700 - 100));
                    ctx.beginPath();
                    ctx.ellipse(randomX, ctx.canvas.height - t * 70, randomSize, randomSize, 45 * Math.PI/180, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'white';
                    ctx.stroke();
                };
            }
        }

    },
    end: function () {
        this.board.removeEventListener('click', clickHandler);
        this.board.classList.add('game-over');
        this.drawChart();


        // save updated data to LS
        localStorage.setItem('fish', JSON.stringify(this.cuttlefish));
    },
    drawChart: function () {
        // get the canvas to show chart
        const chartCanvas = document.getElementById('chart');
        const chartCtx = chartCanvas.getContext('2d');


        // todo create arrays with just names and just timesClicked
        const names = [];
        const timesClicked = [];
        for(let i = 0; i < this.cuttlefish.length; i ++) {
            names.push(this.cuttlefish[i].name);
            timesClicked.push(this.cuttlefish[i].timesCaught);
        }

        console.log('names', names);
        console.log('timesClicked', timesClicked);

        const chart = new Chart(chartCtx, { // eslint-disable-line
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: 'number of times caught',
                    data: timesClicked
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

    },
    getRandomFish: function () {
        const selectedFishes = [];
        for (let i = 0; i < this.numFish; i++) {
            const randomNumber = Math.floor(Math.random() * this.cuttlefish.length);
            const fish = this.cuttlefish[randomNumber];
            selectedFishes.push(fish);
        }

        return selectedFishes;
    },
    getRandomSquares: function () {
        const allSquares = document.querySelectorAll('div.four');
        const selectedSquares = [];
        while(selectedSquares.length < this.numFish) {
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
    game.counter++;

    if (game.counter === game.numRounds) {
        game.end();
    }
}


function Cuttlefish (name, imageUrl, timesCaught) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesCaught = timesCaught;
}

Cuttlefish.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src =  `media/images/${this.imageUrl}`;
    ele.setAttribute('alt', this.name);
    return ele;
};

game.start();

