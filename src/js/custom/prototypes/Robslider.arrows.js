// Shows/hides the slider arrows based on its position
RobSlider.Slider.prototype.arrows = function ()
{
    var _this = this;

    this.mainWrapper.append('<div class="arrows right"></div><div class="arrows left"></div>');

    this.mainWrapper.on('click', '.arrows', function () {
        if(_this.sliding == false){
            var left = $(this).hasClass('left');

            if (_this.currentIndex == 0  && _this.NumberOfSlides == 2 && left) {
                return false;
            } else if (_this.currentIndex == 1  && _this.NumberOfSlides == 2 && !left) {
                return false;
            } else {
                _this.slide(left);
                _this.sliding = true;
                setTimeout(function(){
                    _this.sliding = false;
                }, _this.defaults.slideDuration);
            }


        }
    });

}