// Animate the slider
RobSlider.Slider.prototype.slideList = function ()
{
    var _this = this;

    var newCurrent = this.list.find('li[data-slidenumber="' + _this.currentIndex + '"]');
    var newNext = this.list.find('li[data-slidenumber="' + _this.newNext + '"]');
    var newPrev = this.list.find('li[data-slidenumber="' + _this.newPrev + '"]');

    newCurrent.css('z-index', 11);
    newNext.css('z-index', 10);
    newPrev.css('z-index', 10);

    if (this.notNextTo) {

        if (this.slideLeft) {
            var thisDirection = _this.sliderWidth;
        } else {
            var thisDirection = -_this.sliderWidth;
        }

        this.list.find('li.current').animate({'left': thisDirection}, _this.defaults.slideDuration);

        this.notNextTo = false;
    } else {

        if (this.slideLeft) {

            newNext.animate({
                'left': this.sliderWidth
            }, _this.defaults.slideDuration);

        } else {

            newPrev.animate({
                'left': -this.sliderWidth
            }, _this.defaults.slideDuration);

        }
    }

    $( "body").trigger( "RobSliderStart");

    newCurrent.animate({
        'left' : 0
    }, _this.defaults.slideDuration, function () {
        _this.listItems.removeClass('current prev next');
        _this.listItems.css('left',"");

        if (_this.NumberOfSlides > 2) {
            newCurrent.addClass('current');
            newNext.addClass('next');
            newPrev.addClass('prev');
        } else {
            newCurrent.addClass('current');
            if (_this.slideLeft) {
                newNext.addClass('next');
            } else {
                newPrev.addClass('prev');
            }
        }

        $( "body").trigger( "RobSliderEnd");

        _this.dimensions();

    });

    // Update pagination based on new position
    if (this.defaults.pagination) this.updatePagination();

}