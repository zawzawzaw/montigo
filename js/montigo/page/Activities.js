goog.provide('montigo.page.Activities');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.component.MainImage');
goog.require('montigo.component.ParallaxImage');

goog.require('montigo.page.Default');

/**
 * The Activities Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Activities = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Activities.DEFAULT, options);

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


  this.create_scrollmagic();
  this.create_main_image();
  this.create_parallax();

  this.window = $(window);
  this.window.resize(this.on_window_resize.bind(this));
  this.on_window_resize(null);

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.page.Activities, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Activities Page
 * @const {object}
 */
montigo.page.Activities.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Activities Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Activities.EVENT_01 = '';

/**
 * Activities Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Activities.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.page.Activities.prototype.create_scrollmagic = function() {

  this.controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  this.controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

};
montigo.page.Activities.prototype.create_main_image = function() {
  this.main_image = new montigo.component.MainImage({
  },$('#activities-slider'));

  this.main_image.create_activities_scene(this.controller);
};
montigo.page.Activities.prototype.create_parallax = function() {
  this.parallax_01 = new montigo.component.ParallaxImage({
  },$('#activities-parallax-01'));

  this.parallax_01.create_text_scene_2(this.controller);
  this.parallax_01.create_parallax_scene(this.controller2);

  /*
  this.parallax_02 = new montigo.component.ParallaxImage({
  },$('#activities-parallax-02'));

  this.parallax_02.create_text_scene_2(this.controller);
  this.parallax_02.create_parallax_scene(this.controller2);
  */

};

montigo.page.Activities.prototype.private_method_04 = function() {};
montigo.page.Activities.prototype.private_method_05 = function() {};
montigo.page.Activities.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.page.Activities.prototype.sample_method_calls = function() {
  montigo.page.Activities.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.page.Activities.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Activities.prototype.public_method_01 = function() {};
montigo.page.Activities.prototype.public_method_02 = function() {};
montigo.page.Activities.prototype.public_method_03 = function() {};
montigo.page.Activities.prototype.public_method_04 = function() {};
montigo.page.Activities.prototype.public_method_05 = function() {};
montigo.page.Activities.prototype.public_method_06 = function() {};


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
montigo.page.Activities.prototype.on_window_resize = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_event_handler_04 = function(event) {
};






// make it visible outside.
goog.exportSymbol('montigo.page.Activities', montigo.page.Activities);

