RobSlider.Slider.prototype.autocycle = function () {
    var that = this;

    //Start the cycler time to call the slide function
    var autoslide = setInterval(function () {
            that.slide();
        }, that.defaults.autocycleTime);

    //Add click event to kill the autocycle
    this.mainWrapper.on('click', function () {
        clearInterval(autoslide);
    });
}