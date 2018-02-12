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
    },
    showFish: function () {
        // get three fish
        // get three squares

        // add fish to squares
    }
};

function Cuttlefish (name, imageUrl) {
    this.name = name;
    this.id = name.replace(/\s/g, '-');
    this.imageUrl = imageUrl;
    this.count = 0;
}

game.start();
