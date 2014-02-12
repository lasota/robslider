// Initiate the slider to start the slide functionality
RobSlider.Slider.prototype.slide = function (slideLeft) {
    this.slideLeft = slideLeft;

    if (slideLeft) {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.listItems.length - 1;
        }
    }
    else {
        if (this.currentIndex < (this.NumberOfSlides - 1)) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
    }

    if (this.currentIndex == 0) {
        this.newNext = 1;
        this.newPrev = this.listItems.length - 1;
    }
    else if (this.currentIndex == (this.listItems.length - 1)) {
        this.newNext = 0;
        this.newPrev = this.currentIndex - 1;
    }
    else {
        this.newNext = this.currentIndex + 1;
        this.newPrev = this.currentIndex - 1;
    }

    // Call the slide animation once the new position is determined
    this.slideList();
}