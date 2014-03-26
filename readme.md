Dependencies:
jquery
modernizr
jquery.event.move - https://github.com/stephband/jquery.event.move

HTML Layout:
<div id="slider-wrapper">
    <div id="slider-listwrapper">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>

CSS:
#slider-wrapper { position: relative; overflow: hidden; margin: 0 auto; width: 1080px;}

#slider-listwrapper { width: 1080px; height: 335px; }
    #slider-listwrapper ul { position: relative; top: 0; left: 0; margin: 0; padding: 0; }
        #slider-listwrapper li { position: absolute; margin: 0; padding: 0; width: 1080px; height: 335px; left: 0; list-style: none; top: 0;}
        #slider-listwrapper li.prev { left: -1080px; z-index: 10;}
        #slider-listwrapper li.current { z-index: 10;}
        #slider-listwrapper li.next { left: 1080px; z-index: 10;}

#slider-listwrapper .arrows { position: absolute; top: 44%; z-index: 21; width: 45px; height: 90px; background: url(../images/home-slider/arrow-left.png) no-repeat 0 50%; cursor: pointer; }
   #slider-listwrapper .arrows.left { left: 0; left: 1.5%; display: none; background-position: 100% 50%; }
    #slider-listwrapper .arrows.right { right: 0;right: 1.5%; background-image: url(../images/home-slider/arrow-right-off.png); }

#robslider-pagination { position: absolute; right: 7%; bottom: 20px; z-index: 15; }
    #robslider-pagination > div { float: left; margin-left: 7px; width: 8px; height: 8px; border: 1px solid #ffffff; background: none; text-align: center; cursor: pointer;}
    #robslider-pagination > div:first-child { margin-left: 0; }
    #robslider-pagination > div.active { background: #ffffff;}



Plugin Functions:
dimensions() - Updates dimensions on everything
controls() - Adding the events that control the slider (Both slider arrows and touch events)

slide() - Called from slider arrow controls to update current index
slideList() - Animate the slide once current indexes are updated
    arrows() - Add in arrow click events and if not continuous will turn of appropriate arrow if at end of list
    pagination() - Add pagination divs in the pag wrapper.  Add click events to the divs
    updatePagination() - move active class on pagination divs
    autocycle() - Autocycle slider and turn off once slider is interacted with by user
    resize() - Create event listeners for screen size checks
    mediaQuery() - Create event listeners for screen size checks





Events:
this.mainWrapper.trigger('SliderInteraction');
