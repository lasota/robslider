RobSlider.Slider.prototype.numberSlides = function()
{
	var _this = this;

	this.listItems.each(function (index) {
        $(this).attr('data-slidenumber', index);

        switch (index) {
            case 0 :
                $(this).addClass('current');
                break;
            case 1:
                $(this).addClass('next');
                break;
            case _this.newPrev:
                if (_this.NumberOfSlides > 2) {
                    $(this).addClass('prev');
                }
                break;
        }
    });
}