
// Add click events to the slider controls
RobSlider.Slider.prototype.controls = function ()
{
    var _this = this;

    //Add in the touch events for the slider
    this.list
        .on('movestart', '.current', function (e) {

            _this.currentLeft = parseInt($(this).css('left'));
            // console.log(_this.currentLeft);

        	// If the movestart heads off in a upwards or downwards
        	// direction, prevent it so that the browser scrolls normally.
        	if ((e.distX > e.distY && e.distX < -e.distY) ||
        	    (e.distX < e.distY && e.distX > -e.distY)) {
        		e.preventDefault();
        		return;
        	}

        	// To allow the slide to keep step with the finger,
        	// temporarily disable transitions.
        	_this.list.addClass('notransition');
        })

		.on('move', '.current', function (e) {
			// Move slides with the finger

			var isFirst = _this.currentIndex == 0;
			var isLast = _this.currentIndex == (_this.NumberOfSlides - 1);

            if (_this.NumberOfSlides == 2) {
    			if ((isFirst && e.distX > 0) || (isLast && e.distX < 0) ) {
        			$(this).css('left', (_this.currentLeft + (e.distX * _this.MAX_END_DRAG_RATE)));
    			} else {
        			$(this).css('left', (_this.currentLeft + e.distX));
                    _this.list.find('.next').css('left', (_this.sliderWidth + e.distX));
                    _this.list.find('.prev').css('left', (-_this.sliderWidth + e.distX));
    			}
            } else {
    			$(this).css('left', (0 + e.distX));
    			_this.list.find('.next').css('left', (_this.sliderWidth + e.distX));
    			_this.list.find('.prev').css('left', (-_this.sliderWidth + e.distX));
            }
		})

		.on('moveend', '.current', function (e) {
    		//If the user moved more than the threshold then move to next or previous slide
            if (Math.abs(e.distX) > (_this.DRAG_THRESHOLD * _this.sliderWidth)) {
            	//Slide right
                if (e.distX < 0) {
                    if (_this.currentIndex < (_this.listItems.length - 1)) {
                        _this.currentIndex++;
                    } else {
                        _this.currentIndex = 0;
                    }

                    _this.slideLeft = false;

                    if (_this.NumberOfSlides == 2) {
                	    //Make sure its not the last slide already
                		if (_this.currentIndex < (_this.NumberOfSlides - 1)) {
                    		_this.currentIndex++;
                		}
                    }
            	}
            	//Slide left
            	else {
            	   //Make sure its not the first slide
                    if (_this.currentIndex > 0) {
                        _this.currentIndex--;
                    } else {
                        _this.currentIndex = (_this.listItems.length - 1);
                    }

                    _this.slideLeft = true;

                    if (_this.NumberOfSlides == 2) {
                        //Make sure its not the first slide already
                        if (_this.currentIndex > 0) {
                            _this.currentIndex--;
                        }
                    }
                }

                if (_this.currentIndex == 0) {
                    _this.newNext = 1;
                    if (_this.NumberOfSlides > 2) {
                        _this.newPrev = _this.listItems.length - 1;
                    }
                }
                else if (_this.currentIndex == (_this.listItems.length - 1)) {
                    if (_this.NumberOfSlides > 2) {
                        _this.newNext = 0;
                    }
                    _this.newPrev = _this.currentIndex - 1;
                }
                else {
                    _this.newNext = _this.currentIndex + 1;
                    _this.newPrev = _this.currentIndex - 1;
                }
            }

            _this.slideList();

            _this.list.removeClass('notransition');

    });

}