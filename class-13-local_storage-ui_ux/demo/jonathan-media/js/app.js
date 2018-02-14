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


// TODO ask for donations and display donors