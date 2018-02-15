function Cuttlefish (name, imageUrl, timesCaught) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesCaught = timesCaught;
}

Cuttlefish.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src =  `media/images/${this.imageUrl}`;
    ele.setAttribute('alt', this.name);

    ele.classList.add('swim');
    ele.style.animationDuration = '10s';
    return ele;
};