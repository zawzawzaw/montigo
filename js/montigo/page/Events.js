goog.provide('montigo.page.Events');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.component.MainImage');
goog.require('montigo.component.ParallaxImage');

goog.require('manic.ui.PanelContainer');

goog.require('montigo.page.Default');

/**
 * The Events Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Events = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Events.DEFAULT, options);

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
  
  this.menu.add_black_gradient();

  
  this.create_scrollmagic();
  this.create_main_image();
  this.create_parallax();
 

  this.has_main_image_pin = true;
  

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
goog.inherits(montigo.page.Events, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Events Page
 * @const {object}
 */
montigo.page.Events.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Events Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Events.EVENT_01 = '';

/**
 * Events Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Events.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.page.Events.prototype.create_scrollmagic = function() {

  this.controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  this.controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

};
montigo.page.Events.prototype.create_main_image = function() {
  this.main_image = new montigo.component.MainImage({
  },$('#events-slider'));
  

  //this.main_image.create_spa_scene(this.controller);
  //this.main_image.create_pin_scene(this.controller);
};

montigo.page.Events.prototype.create_parallax = function() {

  this.parallax_01 = new montigo.component.ParallaxImage({
  },$('#events-wedding-section'));

  this.parallax_01.create_parallax_scene(this.controller2);

};
montigo.page.Events.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Events.prototype.public_method_01 = function() {};
montigo.page.Events.prototype.public_method_02 = function() {};
montigo.page.Events.prototype.public_method_03 = function() {};
montigo.page.Events.prototype.public_method_04 = function() {};
montigo.page.Events.prototype.public_method_05 = function() {};
montigo.page.Events.prototype.public_method_06 = function() {};


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
montigo.page.Events.prototype.on_window_resize = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Events.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Events.prototype.on_event_handler_04 = function(event) {
};




// make it visible outside.
goog.exportSymbol('montigo.page.Events', montigo.page.Events);
