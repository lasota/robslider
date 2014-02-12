RobSlider.Slider.prototype.updatePagination = function () {
    var _this = this;

    // Set the active state to the new position
    this.pagination.find('div').removeClass('active');
    this.pagination.find('div:eq(' + _this.currentIndex + ')').addClass(
            'active');
}