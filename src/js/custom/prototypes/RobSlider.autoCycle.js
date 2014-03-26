RobSlider.Slider.prototype.autocycle = function () {
    var _this = this;

    //Start the cycler time to call the slide function
    var autoslide = setInterval(function () {
            _this.slide();
        }, _this.defaults.autocycleTime);

    //Add event to kill the autocycle
    this.mainWrapper.on('SliderInteraction', function () {
        clearInterval(autoslide);
    });
}