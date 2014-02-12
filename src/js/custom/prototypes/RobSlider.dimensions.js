// Update the dimensions of everything
RobSlider.Slider.prototype.dimensions = function ()
{
    // Set the width to width of all the slides combined
    this.sliderWidth = this.listWrapper.outerWidth();

    var newHeight = this.list.find('.current').outerHeight();

    this.list.height(newHeight);
    this.list.find('li').width(this.sliderWidth);

    this.farLeft = -this.sliderWidth;
    this.farRight = this.sliderWidth;

    this.list.find('.prev').css('left', this.farLeft);
    this.list.find('.next').css('left', this.farRight);

}