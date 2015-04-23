goog.provide('montigo.page.Home');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.ImageContainer');

goog.require('montigo.component.MainImage');
goog.require('montigo.component.ParallaxImage');
goog.require('montigo.component.InstagramSidebar');
goog.require('montigo.component.ScrollMagicUtil');

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

  // additional controllers
  /**
   * @type {ScrollMagic.Controller}
   */
  this.controller2 = null;    // for parallax effects
  /**
   * @type {ScrollMagic.Controller}
   */
  this.controller3 = null;    // for parallax effects

  /**
   * @type {montigo.component.MainImage}
   */
  this.main_image = null;
  /**
   * @type {montigo.component.ParallaxImage}
   */
  this.parallax_01 = null;
  /**
   * @type {montigo.component.ParallaxImage}
   */
  this.parallax_02 = null;
  /**
   * @type {montigo.component.InstagramSidebar}
   */
  this.instagram_sidebar = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');

  this.create_scrollmagic();
  this.create_main_image();
  this.create_parallax();
  this.create_instagram_sidebar();

  

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
  
  this.controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  this.controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

  

  // RESTAURANT TEXT
  var home_restaurant_text_animation_01 = montigo.component.ScrollMagicUtil.get_alpha_in_animation_for_elements([
    $('#home-restaurant-text-01 .text h3'),
    $('#home-restaurant-text-01 .text hr'),
    $('#home-restaurant-text-01 .text h4'),
    $('#home-restaurant-text-01 .text p'),
    $('#home-restaurant-text-01 .text .arrow-link')
  ]);

  var home_restaurant_text_01 = new ScrollMagic.Scene({triggerElement: "#home-restaurant-text-01", duration: 300, offset: -150})
            ////.addIndicators({name: "restaurant 01"}) // add indicators (requires plugin)
            .triggerHook(0.5)
            .setTween(home_restaurant_text_animation_01)
            .addTo(this.controller);

  var home_restaurant_text_animation_02 = montigo.component.ScrollMagicUtil.get_alpha_in_animation_for_elements([
    $('#home-restaurant-text-02 .text h3'),
    $('#home-restaurant-text-02 .text hr'),
    $('#home-restaurant-text-02 .text h4'),
    $('#home-restaurant-text-02 .text p'),
    $('#home-restaurant-text-02 .text .arrow-link')
  ]);

  var home_restaurant_text_02 = new ScrollMagic.Scene({triggerElement: "#home-restaurant-text-02", duration: 300, offset: -150})
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

  TweenMax.to("#home-map .image-container", 0, {top: -150});

  var home_image_map = new ScrollMagic.Scene({triggerElement: "#home-map", duration: "100%"})
          .triggerHook(0)
          .setTween("#home-map .image-container", 1, {top: 0, ease: Linear.easeNone})
          ////.addIndicators('7 (duration 100%)')
          .addTo(this.controller3);

}; // end create_scrollmagic




//    _   _  ___  __  __ _____   ____  _     ___ ____  _____ ____  
//   | | | |/ _ \|  \/  | ____| / ___|| |   |_ _|  _ \| ____|  _ \ 
//   | |_| | | | | |\/| |  _|   \___ \| |    | || | | |  _| | |_) |
//   |  _  | |_| | |  | | |___   ___) | |___ | || |_| | |___|  _ < 
//   |_| |_|\___/|_|  |_|_____| |____/|_____|___|____/|_____|_| \_\
//                                                                 


montigo.page.Home.prototype.create_main_image = function(){
  this.main_image = new montigo.component.MainImage({
  },$('#home-slider'));

  this.main_image.create_scene(this.controller);
  
};

montigo.page.Home.prototype.create_parallax = function() {
  this.parallax_01 = new montigo.component.ParallaxImage({
  },$('#home-parallax-01'));

  this.parallax_02 = new montigo.component.ParallaxImage({
  },$('#home-parallax-02'));


  this.parallax_01.create_text_scene(this.controller);
  this.parallax_02.create_text_scene(this.controller);

  this.parallax_01.create_parallax_scene(this.controller2);
  this.parallax_02.create_parallax_scene(this.controller2);

};
montigo.page.Home.prototype.create_instagram_sidebar = function() {
  this.instagram_sidebar = new montigo.component.InstagramSidebar({
  }, $('#home-featured-sidebar'));

  this.instagram_sidebar.create_scene(this.controller);
};
montigo.page.Home.prototype.private_method_05 = function() {};
montigo.page.Home.prototype.private_method_06 = function() {};


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

  this.controller.update();
  this.controller2.update();
  this.controller3.update();

  $("#home-map").height(window_height); // also needs to have the height of the browser window 

};




/**
 * event handler
 * @param  {object} event
 */
montigo.page.Home.prototype.on_event_handler_04 = function(event) {
};







// make it visible outside.
goog.exportSymbol('montigo.page.Home', montigo.page.Home);
