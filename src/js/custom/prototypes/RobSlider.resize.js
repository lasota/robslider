RobSlider.Slider.prototype.resize = function () {
    var _this = this;

    // Rerun functions if window is resized
    $(window).bind('resize', function () {
        _this.dimensions();console.log('resize');
    });
}