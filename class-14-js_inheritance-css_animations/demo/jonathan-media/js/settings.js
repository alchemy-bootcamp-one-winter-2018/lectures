const settingsForm = document.getElementById('settings-form');
settingsForm.addEventListener('submit', function () {
    // grab the data from the form
    // save it to localstorage

    event.preventDefault();
    const numFish = this['num-fish'].value;
    const numRounds = this['num-rounds'].value;

    const settings = {numFish: numFish, numRounds: numRounds};
    localStorage.setItem('settings', JSON.stringify(settings));
});