RobSlider.Slider.prototype.pagination = function () {

    var _this = this;

    if (this.defaults.paginationLocation == "before") {
        this.mainWrapper.prepend('<div id="robslider-pagination"></div>');
    } else {
        this.mainWrapper.append('<div id="robslider-pagination"></div>');
    }

    // Find the pagination wrapper
    this.pagination = this.mainWrapper.find('#robslider-pagination');

    // Add pagination divs based on the number of slides
    for (var i = 1; i <= this.NumberOfSlides; i++) {
        this.pagination.append('<div>' + '</div>');
    }

    // Make the current slide the active item
    this.pagination.find('div:eq(' + this.currentIndex + ')')
            .addClass('active');

    // Add click events to the pagination divs
    this.pagination.on('click', 'div', function() {
        // Set the current index to the index of the pagination div clicked
        if(_this.sliding == false){
            var thisIndex = $(this).index();
            _this.slideLeft = false;
            _this.notNextTo = false;

            if (Math.abs(_this.currentIndex - thisIndex) > 1) {
                _this.notNextTo = true;
            }

            if (_this.currentIndex > thisIndex) {
                _this.listItems.removeClass('prev next');
                _this.list.find('li[data-slidenumber="' + thisIndex + '"]').addClass('prev');
                _this.currentIndex = thisIndex;
                _this.slideLeft = true;
            }

            if (_this.currentIndex < thisIndex) {
                _this.listItems.removeClass('next prev');
                _this.list.find('li[data-slidenumber="' + thisIndex + '"]').addClass('next');
                _this.currentIndex = thisIndex;
            }

            if (_this.currentIndex == 0) {
                _this.newNext = 1;
                _this.newPrev = _this.listItems.length - 1;
            }
            else if (_this.currentIndex == (_this.listItems.length - 1)) {
                _this.newNext = 0;
                _this.newPrev = _this.currentIndex - 1;
            }
            else {
                _this.newNext = _this.currentIndex + 1;
                _this.newPrev = _this.currentIndex - 1;
            }

            // Animate slider to new position
            setTimeout(function(){_this.slideList();}, 200);
        }
    });

}