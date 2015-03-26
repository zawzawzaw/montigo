goog.provide('montigo.page.Home');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.page.Default');

/**
 * The Home Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Home = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Home.DEFAULT, options);

  this.controller = null;
  this.controller2 = null;    // for parallax effects
  this.controller3 = null;    // for parallax effects
  this.scene = null;

  this.fake_slider = null;
  this.fake_slider_img = null;

  this.has_slider_image_loaded = false;

  // for sidebar pinning
  this.home_instagram_scene = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');

  this.create_scrollmagic();
  this.create_fake_home_slider();


  // intro animation for sidebar;
  // margin-top: -160px;
  TweenMax.to($('#home-instagram'), 0.6, {css:{marginTop: -160}, ease: Back.easeOut, delay: 0.3});

  this.window = $(window);
  this.window.resize(this.on_window_resize.bind(this));
  this.on_window_resize(null);

};
goog.inherits(montigo.page.Home, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Home Page
 * @const {object}
 */
montigo.page.Home.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Home Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Home.EVENT_01 = '';

/**
 * Home Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Home.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

montigo.page.Home.prototype.create_scrollmagic = function() {
  this.controller = new ScrollMagic.Controller();
  this.controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  this.controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

  var sidebar_height = $('#home-featured-sidebar').height();
  var featured_height = $('#home-featured-content').height();
  
  var calculated_duration = featured_height - sidebar_height + 160;
  //console.log(sidebar_height);
  //console.log(featured_height);

  /*  
  $('#home-featured-section').css({
    marginBottom: Math.round( -160 ) + 'px'
  })
  */

  this.home_instagram_scene = new ScrollMagic.Scene({triggerElement: "#home-featured-section", duration: calculated_duration})
            .setPin("#home-featured-sidebar")
            //.setPin("#home-instagram")
            ////.addIndicators({name: "1 (duration: 200)"}) // add indicators (requires plugin)
            .triggerHook(0)
            .offset(-62-160)
            .setClassToggle("#home-featured-section", "has-pin")
            .addTo(this.controller);

  var menu_scene = new ScrollMagic.Scene({triggerElement: "#home-featured-section"})
            ////.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
            .triggerHook(0)
            .offset(-62-160)
            .setClassToggle("#main-page-header", "white-version")
            .addTo(this.controller);


  var home_slider_text_animation = this.get_alpha_animation_for_elements([
    '#home-slider .text h3',
    '#home-slider .text h4',
    '#home-slider .text p'
  ]);

  var home_slider_text = new ScrollMagic.Scene({duration: 200})
            ////.addIndicators({name: "3 (duration: 200)"}) // add indicators (requires plugin)
            .offset(20)
            .setTween(home_slider_text_animation)
            .addTo(this.controller);


  // parallax 01

  var home_parallax_animation_01 = this.get_alpha_in_top_animation_for_elements([
    '#home-parallax-01 .text h3',
    '#home-parallax-01 .text h4',
    '#home-parallax-01 .text p',
    '#home-parallax-01 .text .arrow-link'
  ]);

  home_parallax_animation_01.add(TweenMax.to($('#home-parallax-01 .blue-gradient'), 0.5, {opacity: 1}), 0);

  var home_parallax_01 = new ScrollMagic.Scene({triggerElement: "#home-parallax-01", duration: 300})
            ////.addIndicators({name: "4 (duration: 200)"}) // add indicators (requires plugin)
            .triggerHook(0.3)
            //.offset(20)
            .setTween(home_parallax_animation_01)
            .addTo(this.controller);


  // parallax 02

  var home_parallax_animation_02 = this.get_alpha_in_top_animation_for_elements([
    '#home-parallax-02 .text h3',
    '#home-parallax-02 .text h4',
    '#home-parallax-02 .text p',
    '#home-parallax-02 .text .arrow-link'
  ]);

  home_parallax_animation_02.add(TweenMax.to($('#home-parallax-02 .blue-gradient'), 0.5, {opacity: 1}), 0);

  var home_parallax_02 = new ScrollMagic.Scene({triggerElement: "#home-parallax-02", duration: 300})
            ////.addIndicators({name: "4 (duration: 200)"}) // add indicators (requires plugin)
            .triggerHook(0.3)
            //.offset(20)
            .setTween(home_parallax_animation_02)
            .addTo(this.controller);



  // RESTAURANT TEXT
  
  var home_restaurant_text_animation_01 = this.get_alpha_in_animation_for_elements([
    '#home-restaurant-text-01 .text h3',
    '#home-restaurant-text-01 .text h4',
    '#home-restaurant-text-01 .text p',
    '#home-restaurant-text-01 .text .arrow-link'
  ]);

  var home_restaurant_text_01 = new ScrollMagic.Scene({triggerElement: "#home-restaurant-text-01", duration: 300})
            ////.addIndicators({name: "restaurant 01"}) // add indicators (requires plugin)
            .triggerHook(0.5)
            .setTween(home_restaurant_text_animation_01)
            .addTo(this.controller);

  var home_restaurant_text_animation_02 = this.get_alpha_in_animation_for_elements([
    '#home-restaurant-text-02 .text h3',
    '#home-restaurant-text-02 .text h4',
    '#home-restaurant-text-02 .text p',
    '#home-restaurant-text-02 .text .arrow-link'
  ]);

  var home_restaurant_text_02 = new ScrollMagic.Scene({triggerElement: "#home-restaurant-text-02", duration: 300})
            ////.addIndicators({name: "restaurant 02"}) // add indicators (requires plugin)
            .triggerHook(0.5)
            .setTween(home_restaurant_text_animation_02)
            .addTo(this.controller);



  // RESTAURANT IMAGE
  var home_restaurant_image_animation_01 = new TimelineMax();
  home_restaurant_image_animation_01.add(TweenMax.to($('#home-restaurant-image-01'), 1, {opacity:1, left:0, ease:Back.easeOut}), 0);

  var home_restaurant_image_01 = new ScrollMagic.Scene({triggerElement: "#home-restaurant-text-01", duration: 300})
            ////.addIndicators({name: "restaurant 03"}) // add indicators (requires plugin)
            .triggerHook(0.8)
            .setTween(home_restaurant_image_animation_01)
            .addTo(this.controller);
  

  var home_restaurant_image_animation_02 = new TimelineMax();
  home_restaurant_image_animation_02.add(TweenMax.to($('#home-restaurant-image-03'), 1, {opacity:1, left:0, ease:Back.easeOut}), 0);
  home_restaurant_image_animation_02.add(TweenMax.to($('#home-restaurant-image-02'), 1, {opacity:1, left:0, ease:Back.easeOut}), 0.3);

  var home_restaurant_image_02 = new ScrollMagic.Scene({triggerElement: "#home-restaurant-text-02", duration: 300})
            //.addIndicators({name: "restaurant 03"}) // add indicators (requires plugin)
            .triggerHook(0.8)
            .setTween(home_restaurant_image_animation_02)
            .addTo(this.controller);


  //    ____   _    ____      _    _     _        _    __  __  ___ __  __    _    ____ _____ ____  
  //   |  _ \ / \  |  _ \    / \  | |   | |      / \   \ \/ / |_ _|  \/  |  / \  / ___| ____/ ___| 
  //   | |_) / _ \ | |_) |  / _ \ | |   | |     / _ \   \  /   | || |\/| | / _ \| |  _|  _| \___ \ 
  //   |  __/ ___ \|  _ <  / ___ \| |___| |___ / ___ \  /  \   | || |  | |/ ___ \ |_| | |___ ___) |
  //   |_| /_/   \_\_| \_\/_/   \_\_____|_____/_/   \_\/_/\_\ |___|_|  |_/_/   \_\____|_____|____/ 
  //                                                                                               

  TweenMax.to("#home-parallax-01 .image-container", 0, {top: -300});

  var image_parallax_01 = new ScrollMagic.Scene({triggerElement: "#home-parallax-01", duration: "100%"})
          .triggerHook(0)
          .setTween("#home-parallax-01 .image-container", 1, {top: 300, ease: Linear.easeNone})
          ////.addIndicators('5 (duration 200%)')
          .addTo(this.controller2);

  TweenMax.to("#home-parallax-02 .image-container", 0, {top: -300});

  var image_parallax_01 = new ScrollMagic.Scene({triggerElement: "#home-parallax-02", duration: "100%"})
          .triggerHook(0)
          .setTween("#home-parallax-02 .image-container", 1, {top: 300, ease: Linear.easeNone})
          ////.addIndicators('6 (duration 200%)')
          .addTo(this.controller2);


  
  TweenMax.to("#home-map .image-container", 0, {top: -150});

  var home_image_map = new ScrollMagic.Scene({triggerElement: "#home-map", duration: "100%"})
          .triggerHook(0)
          .setTween("#home-map .image-container", 1, {top: 0, ease: Linear.easeNone})
          ////.addIndicators('7 (duration 100%)')
          .addTo(this.controller3);

}; // end create_scrollmagic


montigo.page.Home.prototype.create_fake_home_slider = function() {
  this.fake_slider = $('#home-slider');
  this.fake_slider_img = $('#home-slider img');

  var image_str = this.fake_slider_img.attr('src');
  
  $([image_str]).preloadImages(this.on_fake_slider_image_load.bind(this));
  

};
montigo.page.Home.prototype.private_method_03 = function() {};
montigo.page.Home.prototype.private_method_04 = function() {};
montigo.page.Home.prototype.private_method_05 = function() {};
montigo.page.Home.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.page.Home.prototype.sample_method_calls = function() {
  montigo.page.Home.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.page.Home.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



montigo.page.Home.prototype.public_method_02 = function() {};
montigo.page.Home.prototype.public_method_03 = function() {};
montigo.page.Home.prototype.public_method_04 = function() {};
montigo.page.Home.prototype.public_method_05 = function() {};
montigo.page.Home.prototype.public_method_06 = function() {};


//    _   _ _____ ___ _     
//   | | | |_   _|_ _| |    
//   | | | | | |  | || |    
//   | |_| | | |  | || |___ 
//    \___/  |_| |___|_____|
//                          


montigo.page.Home.prototype.get_alpha_animation_for_elements = function(array_param) {
  var return_timeline_max = new TimelineMax();
  var item = null;

  for (var i = 0, l = array_param.length; i < l; i++) {
    item = $(array_param[i]);
    return_timeline_max.add(TweenMax.to(item, 0.5, {opacity:0}), 0.2 * i);
  }

  return return_timeline_max;

};

montigo.page.Home.prototype.get_alpha_in_animation_for_elements = function(array_param) {
  var return_timeline_max = new TimelineMax();
  var item = null;

  for (var i = 0, l = array_param.length; i < l; i++) {
    item = $(array_param[i]);
    return_timeline_max.add(TweenMax.to(item, 0.4, {opacity:1}), 0.1 * i);
  }

  return return_timeline_max;

};

montigo.page.Home.prototype.get_alpha_in_top_animation_for_elements = function(array_param) {
  var return_timeline_max = new TimelineMax();
  var item = null;

  for (var i = 0, l = array_param.length; i < l; i++) {
    item = $(array_param[i]);
    return_timeline_max.add(TweenMax.to(item, 0.5, {opacity:1}), (0.2 * i) + 0.1 );
    return_timeline_max.add(TweenMax.to(item, 0.8, {top:0, ease: Sine.easeInOut}), 0.2 * i );
  }

  return return_timeline_max;

};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Home.prototype.on_window_resize = function(event) {
  var window_width = this.window.width();
  var window_height = this.window.height();

  this.fake_slider.height(window_height);

  if (this.has_slider_image_loaded == true) {
    var image_height = this.fake_slider_img.height();
    var center_offset = Math.round( (window_height - image_height) / 2 );

    this.fake_slider_img.css({
      top: center_offset + 'px'
    });
  }




  var sidebar_height = $('#home-featured-sidebar').height();
  var featured_height = $('#home-featured-content').height();
  var calculated_duration = featured_height - sidebar_height + 160;


  this.home_instagram_scene.duration(calculated_duration);

};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Home.prototype.on_fake_slider_image_load = function(event) {
  console.log('on_fake_slider_image_load');
  this.has_slider_image_loaded = true;
  this.on_window_resize(null);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Home.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Home.prototype.on_event_handler_04 = function(event) {
};

