// TODO play or pause the video using JS

const h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
    const video = document.querySelector('video');

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// localStorage!
// TODO track how many visitors have visited the site
// const visitorCount = 0;

// when page is refreshed, increase visitorCount
if (localStorage.getItem('visitors')) {
    // on 2nd visit / page refresh
    // get count from localstorage and increase by 1 and save it to localstorage
    let oldVisitors = localStorage.getItem('visitors');
    oldVisitors++;
    localStorage.setItem('visitors',oldVisitors);
} else {
    // on first visit
    // set count to 1
    localStorage.setItem('visitors', 1);
}


// TODO ask for donations and display donors
// store as array of donor objects with name and amount properties
const willDonate = confirm('will you donate to support our cuttlefish?');
if (willDonate) {
    const name = prompt('what is your name?');
    const amount = prompt('how much will you donate?');

    // start with empty []
    let donations = [];
    // check if there's data in LS
    if (localStorage.getItem('donations')) {
        // reassign donations to existing array
        // when we get from LS, parse and arrays or objs (JSON strings)
        donations = JSON.parse(localStorage.getItem('donations'));
    }

    const donation = {name: name, amount: amount};
    donations.push(donation);

    // when we save to LS, stringify any objs or arrays
    localStorage.setItem('donations', JSON.stringify(donations));

}
