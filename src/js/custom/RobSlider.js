var RobSlider = RobSlider || {};


RobSlider.Slider = function(params)
{
    var that = this;

    // /Setup and override global defaults
    this.defaults = $.extend({
        'mainWrapper' : 'slider-wrapper',
        'listWrapper' : 'slider-listwrapper',
        'sliderWidth' : 1170,
        'controls': true,
        'arrows' : false,
        'pagination': false,
        'paginationLocation': 'after',
        'autocycle': false,
        'autocycleTime': 7000,
        'slideDuration': 500
    }, params);

    //Using modernizr to check if device has touch
    this.hasTouch = Modernizr.touch;

    // Get Slider components
    this.mainWrapper = $('#' + this.defaults.mainWrapper);
    this.listWrapper = $("#" + this.defaults.listWrapper);
    this.list = this.listWrapper.find('ul');
    this.listItems = this.list.find('li');

    // Set some global variables
    this.sliderWidth = this.defaults.sliderWidth;
    this.NumberOfSlides = this.listItems.length;
    this.currentIndex = 0;
    this.currentLeft = 0;
    this.newNext = 1;
    this.newPrev = this.listItems.length - 1;
    this.sliding = false;

    // Gesture properties
    this.DRAG_THRESHOLD = 0.15; // When dragging, pre-threshold snaps back. post-threshold slides (percentage of image width).
    this.MAX_END_DRAG_RATE = 0.1; // When dragging, the maximum you can pull an end image (percentage of image width).

    this.numberSlides();

    // Start default functions
    this.controls();

    if (this.defaults.arrows) {
        this.arrows();
    }

    if (this.defaults.pagination)
    {
        this.pagination();
    }

    if (this.defaults.autocycle) {
        this.autocycle();
    }
    
    this.resize();
    // Cross browser document ready fires at different times in different browsers
    $(window).load(function(){
        that.dimensions();
    });

}